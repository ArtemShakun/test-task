import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  margin: 0;
  padding: 0px;
  background-color: rgb(15, 23, 42);
`;

export const ContentBlock = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
`;

export const FooterTitle = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  color: rgb(229, 231, 235);
`;
export const HeaderImgBlock = styled.img`
  width: 80px;
  height: 80px;
`;

export const FooterImgBlock = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
`;

export const ListBlock = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
  max-width: 700px;
  margin: 50px auto;
  padding: 0;
`;

export const ListItem = styled.li`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  padding: 20px;
  border: 1px #ededed solid;
  border-radius: 5px;
  line-height: 1.5rem;
  background-color: rgb(229, 231, 235);
`;

export const ButtonDetail = styled.button`
  margin: 10px 0px 0 auto;
  height: 25px;
  width: 150px;
  cursor: pointer;
`;

export const ListUserBlock = styled.ul`
  list-style-type: none;
`;

export const Container = styled.article`
  width: 1200px;
  margin: 0 auto;
`;

export const BackButton = styled.button`
  margin: 50px 0 0 50px;
`;

export const Main = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  flex: 1;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
