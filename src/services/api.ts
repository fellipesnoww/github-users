import axios, {AxiosRequestConfig, AxiosError} from 'axios';
import {API_URL} from '@env';
import * as Sentry from '@sentry/react-native';

interface HTTPResponse {
  success: boolean;
  message: string;
  httpStatus: number;
  data?: any;
}

export const api = axios.create({
  baseURL: API_URL,
});

const defaultError = {
  success: false,
  message: 'Request failed',
  httpStatus: 400,
  data: null,
};

export async function apiCall<T>(
  config: AxiosRequestConfig,
): Promise<HTTPResponse> {
  try {
    const response = await api.request<T>(config);
    if (response.data) {
      return {
        success: true,
        message: 'Resquest successful',
        httpStatus: response.status,
        data: response.data,
      };
    }

    return defaultError;
  } catch (error) {
    Sentry.captureMessage("Error on sending request");
    Sentry.captureException(error);
    if (error instanceof AxiosError) {
      return {
        success: false,
        message: error.message,
        httpStatus: Number(error.code),
        data: null,
      };
    }
    
    return defaultError;
  }
}
