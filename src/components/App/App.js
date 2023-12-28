import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <AppWrapper>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  min-width: 350px;
`;

const Main = styled.main`
  padding: 64px 32px;

  @media ${QUERIES.tabletAndDown} {
    padding: 40px 32px;
  }
`;

export default App;
