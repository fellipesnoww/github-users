import React from 'react';

import ArrowRight from '../../assets/icons/keyboard_arrow_right.svg';
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
} from './styles';
import {RepositoryDTO} from '../../dtos/RepositoryDTO';

interface RepoCardProps {
  repository: RepositoryDTO;
}

export default function RepoCard({repository}: RepoCardProps) {
  return (
    <Container>
      <InlineContent>
        <RepoName>
          <Name>{repository.full_name}</Name>
          <ArrowRight />
        </RepoName>
        <StarButton>
          <Star width={16} height={16} />
        </StarButton>
      </InlineContent>
      <AboutRepo>{repository.description}</AboutRepo>
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
          <DetailName>{repository.updated_at}</DetailName>
        </Detail>
      </RepoDetails>
    </Container>
  );
}
