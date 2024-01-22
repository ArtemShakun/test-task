import logo from '../img/logo.svg';
import { Wrapper, ContentBlock, HeaderImgBlock } from './styles/styles';

export function Header() {
  return (
    <Wrapper>
      <ContentBlock>
        <HeaderImgBlock src={logo} alt="React Logo" />
      </ContentBlock>
    </Wrapper>
  );
}
