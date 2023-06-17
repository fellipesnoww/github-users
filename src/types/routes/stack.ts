interface UserData {
  login: string;
  avatar_url: string;
}

export type RootStackParamList = {
  Register: undefined;
  Home: undefined;
  Repository: UserData;
  ModalRegister: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
