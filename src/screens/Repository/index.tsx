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
import {Alert, Modal, View} from 'react-native';
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
    const formatedTopics = topicsToFilter.map(t => t.toLowerCase());
    const filteredRepositories: RepositoryDTO[] = [];

    repositoriesCopy.forEach(repo => {
      repo.topics.forEach(topic => {
        if (formatedTopics.includes(topic)) {
          filteredRepositories.push(repo);
        }
      });
    });

    setRepositoriesCopy(filteredRepositories);
    setVisibleModal(false);
  }

  function handleResetFilters(){
    Alert.alert("Confirme", "Deseja limpar todos os filtros?" , [
      {
        style: "cancel",
        onPress: () => {},
        text: "Não"
      },
      {
        style: "default",
        onPress: () => {
          setRepositoriesCopy(repositories);
        },
        text: "Sim"
      }
    ]);
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
            style={{width: "85%"}}
          />
          <FilterButton 
            onPress={() => setVisibleModal(true)} 
            onLongPress={handleResetFilters}
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
