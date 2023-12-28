import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS, QUERIES } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const BreadcrumbsBar = () => (
  <Breadcrumbs>
    <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale/shoes">
      Shoes
    </Breadcrumbs.Crumb>
  </Breadcrumbs>
);

const SortBy = ({ sortId, setSortId }) => (
  <SortByWrapper>
    <Select
      label="Sort"
      value={sortId}
      onChange={(ev) => setSortId(ev.target.value)}
    >
      <option value="newest">Newest Releases</option>
      <option value="price">Price</option>
    </Select>
  </SortByWrapper>
);

const ShoeIndex = (props) => {
  return (
    <Wrapper>
      <MainColumn>
        <MobileBreadcrumbsWrapper>
          <BreadcrumbsBar />
        </MobileBreadcrumbsWrapper>
        <Header>
          <Title>Running</Title>
          <SortBy {...props} />
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <BreadcrumbsBar />
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const SortByWrapper = styled.div`
  @media ${QUERIES.phoneAndDown} {
    display: none;
  }
`;

const MobileBreadcrumbsWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--weight-medium);
`;

export default ShoeIndex;
