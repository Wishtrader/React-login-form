import react from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled.div`
  position: absolute;
  width: 160%;
  height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  background: linear-gradient(
    58deg, rgba(241,196,15,1) 20%, 
    rgba(243,172,18,1) 100%
  );
`;

export default function AccountBox(props) {
  return <BoxContainer>
    <TopContainer>
      <BackDrop />
    </TopContainer>
  </BoxContainer>
}