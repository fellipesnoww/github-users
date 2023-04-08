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

export default function RepoCard() {
  return (
    <Container>
      <InlineContent>
        <RepoName>
          <Name>project-name-java</Name>
          <ArrowRight />
        </RepoName>
        <StarButton>
          <Star width={16} height={16} />
        </StarButton>
      </InlineContent>
      <AboutRepo>
        Project application with component app with React Native.
      </AboutRepo>
      <RepoDetails>
        <Detail removeMargin>
          <Language width={16} height={16} />
          <DetailName>React Native</DetailName>
        </Detail>
        <Detail>
          <Star width={16} height={16} />
          <DetailName>5</DetailName>
        </Detail>
        <Detail>
          <SupervisorAccount width={16} height={16} />
          <DetailName>2</DetailName>
        </Detail>
        <Detail>
          <AccessTime width={16} height={16} />
          <DetailName>2 dias atras</DetailName>
        </Detail>
      </RepoDetails>
    </Container>
  );
}
