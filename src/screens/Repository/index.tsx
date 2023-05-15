import React, {useEffect, useState} from 'react';
import {Container, ModalContent, RepositoriesList, SearchArea} from './styles';
import HeaderWithUser from '../../components/HeaderWithUser';
import RepoCard from '../../components/RepoCard';
import {useRoute} from '@react-navigation/native';
import {apiCall} from '../../services/api';
import {RepositoryDTO} from '../../dtos/RepositoryDTO';
import EmptyList from '../../components/EmptyList';
import Loader from '../../components/Loader';
import InputSearch from '../../components/Search/Input';
import FilterButton from '../../components/Search/FilterButton';
import {Modal, View} from 'react-native';
import TopicSelector from '../../components/TopicSelector';

interface RepositoryRouteParams {
  login: string;
  avatar_url: string;
}

export default function Repository() {
  const [loading, setLoading] = useState(true);
  const [visibleModal, setVisibleModal] = useState(false);

  const [repositories, setRepositories] = useState<RepositoryDTO[]>([]);
  const [repositoriesCopy, setRepositoriesCopy] = useState<RepositoryDTO[]>([]);
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

  function handleCancelTopicSelection() {
    setVisibleModal(false);
  }

  function handleFilterTopics(topicsToFilter: string[]) {
    const filteredRepositories = repositoriesCopy.filter(repo =>
      repo.topics.some(item => topicsToFilter.includes(item)),
    );
    setRepositoriesCopy(filteredRepositories);
    setVisibleModal(false);
  }

  return (
    <View style={{flex: 1, opacity: visibleModal ? 0.6 : 1}}>
      <Container>
        <HeaderWithUser avatar_url={avatar_url} />
        <SearchArea>
          <InputSearch
            icon="search"
            placeholder="Buscar um repositório..."
            onChangeText={name => filterRepositories(name)}
          />
          <FilterButton onPress={() => setVisibleModal(true)} />
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
      <Modal visible={visibleModal} transparent animationType="slide">
      <ModalContent>
        <TopicSelector
          cancelAction={handleCancelTopicSelection}
          confirmAction={topics => handleFilterTopics(topics)}
        />
      </ModalContent>
    </Modal>
   </View>
  );
}
