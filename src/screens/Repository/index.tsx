import React, {useEffect, useState} from 'react';
import {Container, RepositoriesList} from './styles';
import HeaderWithUser from '../../components/HeaderWithUser';
import RepoCard from '../../components/RepoCard';
import {useRoute} from '@react-navigation/native';
import {apiCall} from '../../services/api';
import {RepositoryDTO} from '../../dtos/RepositoryDTO';
import EmptyList from '../../components/EmptyList';
import Loader from '../../components/Loader';

interface RepositoryRouteParams {
  login: string;
  avatar_url: string;
}

export default function Repository() {
  const [loading, setLoading] = useState(true);
  const [repositories, setRepositories] = useState<RepositoryDTO[]>([]);

  const route = useRoute();
  const {login, avatar_url} = route.params as RepositoryRouteParams;

  async function handleGetUserRepositories() {
    const reposRequest = await apiCall<RepositoryDTO>({
      url: `users/${login}/repos`,
    });

    if (reposRequest.success) {
      setRepositories(reposRequest.data);
    }

    setLoading(false);
  }

  useEffect(() => {
    handleGetUserRepositories();
  }, []);

  if (loading) {
    return <Loader message="Procurando repositórios..." />;
  }

  return (
    <Container>
      <HeaderWithUser avatar_url={avatar_url} />
      <RepositoriesList
        data={repositories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <RepoCard repository={item} />}
        ListEmptyComponent={
          <EmptyList message="Nenhum repositório encontrado" />
        }
      />
    </Container>
  );
}
