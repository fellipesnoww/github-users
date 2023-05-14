import React, {useEffect, useState, useRef} from 'react';
import {Container, RepositoriesList, SearchArea} from './styles';
import HeaderWithUser from '../../components/HeaderWithUser';
import RepoCard from '../../components/RepoCard';
import {useRoute} from '@react-navigation/native';
import {apiCall} from '../../services/api';
import {RepositoryDTO} from '../../dtos/RepositoryDTO';
import EmptyList from '../../components/EmptyList';
import Loader from '../../components/Loader';
import InputSearch from '../../components/Search/Input';

interface RepositoryRouteParams {
  login: string;
  avatar_url: string;
}

export default function Repository() {
  const [loading, setLoading] = useState(true);
  const [repositories, setRepositories] = useState<RepositoryDTO[]>([]);
  const [repositoriesCopy, setRepositoriesCopy] = useState<RepositoryDTO[]>([]);
  const [focusedInput, setFocusedInput] = useState<'filter' | 'search'>(
    'search',
  );

  const searchInputRef = useRef<InputSearch>();
  const filterInputRef = useRef<InputSearch>();

  const route = useRoute();
  const {login, avatar_url} = route.params as RepositoryRouteParams;

  async function handleGetUserRepositories() {
    const reposRequest = await apiCall<RepositoryDTO>({
      url: `users/${login}/repos`,
    });

    if (reposRequest.success) {
      setRepositories(reposRequest.data);
      setRepositoriesCopy(reposRequest.data);
    }

    setLoading(false);
  }

  function filterRepositories(repositoryName: string) {
    const filteredRepositories = repositories.filter(repository =>
      repository.name.includes(repositoryName),
    );

    setRepositoriesCopy(filteredRepositories);
  }

  useEffect(() => {
    handleGetUserRepositories();
  }, []);

  if (loading) {
    return <Loader message="Procurando repositórios..." />;
  }

  function handleFocusSearch() {
    filterInputRef.current?.blur();
    searchInputRef.current?.focus();
    setFocusedInput('search');
  }

  function handleFocusFilter() {
    searchInputRef.current?.blur();
    filterInputRef.current?.focus();
    setFocusedInput('filter');
  }

  return (
    <Container>
      <HeaderWithUser avatar_url={avatar_url} />
      <SearchArea>
        <InputSearch
          ref={searchInputRef}
          icon="search"
          placeholder="Buscar um repositório..."
          onChangeText={name => filterRepositories(name)}
          isFocused={focusedInput === 'search'}
          focusAction={handleFocusSearch}
          onFocus={handleFocusSearch}
        />
        <InputSearch
          ref={filterInputRef}
          icon="filter"
          onChangeText={name => filterRepositories(name)}
          isFocused={focusedInput === 'filter'}
          focusAction={handleFocusFilter}
          onFocus={handleFocusFilter}
        />
      </SearchArea>
      <RepositoriesList
        data={repositoriesCopy}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <RepoCard repository={item} />}
        ListEmptyComponent={
          <EmptyList message="Nenhum repositório encontrado" />
        }
      />
    </Container>
  );
}
