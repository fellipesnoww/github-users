import React from 'react';

import ArrowRight from '../../assets/icons/keyboard_arrow_right.svg';
import YellowStar from '../../assets/icons/yellow_star.svg';
import Star from '../../assets/icons/star.svg';
import Language from '../../assets/icons/language.svg';
import SupervisorAccount from '../../assets/icons/supervisor_account.svg';
import AccessTime from '../../assets/icons/access_time.svg';
import {
  AboutRepo,
  Container,
  Detail,
  DetailName,
  InlineContent,
  Name,
  RepoDetails,
  RepoName,
  StarButton,
  TopicList,
} from './styles';
import {RepositoryDTO} from '../../dtos/RepositoryDTO';
import {Topic, TypeAction} from '../Topic';
import moment from 'moment';

interface RepoCardProps {
  repository: RepositoryDTO;
}

export default function RepoCard({repository}: RepoCardProps) {
  return (
    <Container>
      <InlineContent>
        <RepoName>
          <Name>{repository.name}</Name>
          <ArrowRight />
        </RepoName>
        <StarButton>
          <YellowStar width={16} height={16} />
        </StarButton>
      </InlineContent>
      <AboutRepo>{repository.description}</AboutRepo>
      {repository.topics.length > 0 && (
        <TopicList testID='topic-list'>
          {repository.topics.map(topic => (
            <Topic name={topic} typeAction={TypeAction.none} key={topic} />
          ))}
        </TopicList>
      )}
      <RepoDetails>
        <Detail removeMargin>
          <Language width={16} height={16} />
          <DetailName>{repository.language}</DetailName>
        </Detail>
        <Detail>
          <Star width={16} height={16} />
          <DetailName>{repository.stargazers_count}</DetailName>
        </Detail>
        <Detail>
          <SupervisorAccount width={16} height={16} />
          <DetailName>{repository.watchers_count}</DetailName>
        </Detail>
        <Detail>
          <AccessTime width={16} height={16} />
          <DetailName>{moment(repository.updated_at).format("DD/MM/YYYY")}</DetailName>
        </Detail>
      </RepoDetails>
    </Container>
  );
}
