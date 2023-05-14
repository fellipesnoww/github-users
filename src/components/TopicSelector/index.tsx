import React, {useState} from 'react';
import InputSearch from '../Search/Input';
import {Topic, TypeAction} from '../Topic';
import {
  Container,
  SelectedTopicSection,
  SugestionLabel,
  Sugestions,
  SugestionsSection,
  Title,
} from './styles';
import Button from '../Button';
import CancelButton from '../CancelButton';

interface TopicSelectorProps {
  cancelAction: () => void;
  confirmAction: (topics: string[]) => void;
}

export default function TopicSelector({
  cancelAction,
  confirmAction,
}: TopicSelectorProps) {
  const [sugestionsTopics, setSugestionTopics] = useState([
    'TypeScript',
    'GraphQL',
    'C#',
    'React',
    'iOS',
    'Android',
    'Java',
    'Phyton',
    'JSON',
  ]);

  const [topicInput, setTopicInput] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  function handleAddTopicToFilter(topic: string) {
    setSelectedTopics([...selectedTopics, topic]);
    const filteredSugestion = sugestionsTopics.filter(st => st !== topic);
    setSugestionTopics(filteredSugestion);
  }

  function handleRemoveTopicFromFilter(topic: string) {
    const filteredTopics = selectedTopics.filter(t => t !== topic);
    setSelectedTopics(filteredTopics);
    setSugestionTopics([...sugestionsTopics, topic]);
  }

  function applyFilters() {
    if (topicInput) {
      setSelectedTopics([...selectedTopics, topicInput]);
    }
    confirmAction(selectedTopics);
  }

  return (
    <Container>
      <Title>Filtrar tópicos</Title>
      <InputSearch
        icon="search"
        style={{width: '100%'}}
        onChangeText={setTopicInput}
      />
      <SelectedTopicSection>
        {selectedTopics.map(selectedTopic => (
          <Topic
            key={selectedTopic}
            name={selectedTopic}
            typeAction={TypeAction.remove}
            onPress={() => handleRemoveTopicFromFilter(selectedTopic)}
          />
        ))}
      </SelectedTopicSection>
      <Sugestions>
        <SugestionLabel>Sugestões</SugestionLabel>
        <SugestionsSection>
          {sugestionsTopics.map(sugestion => (
            <Topic
              key={sugestion}
              name={sugestion}
              typeAction={TypeAction.add}
              onPress={() => handleAddTopicToFilter(sugestion)}
            />
          ))}
        </SugestionsSection>
        <Button
          text="Filtrar"
          style={{marginTop: 8, marginBottom: 8}}
          onPress={applyFilters}
        />
        <CancelButton text="Cancelar" onPress={cancelAction} />
      </Sugestions>
    </Container>
  );
}
