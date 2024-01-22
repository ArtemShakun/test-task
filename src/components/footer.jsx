import GitHubIcon from '../img/github.svg';
import LinkedIn from '../img/linkedin.svg';
import {
  Wrapper,
  ContentBlock,
  FooterTitle,
  FooterImgBlock,
} from './styles/styles';

export function Footer() {
  return (
    <Wrapper>
      <ContentBlock>
        <div>
          <a href="https://github.com/ArtemShakun">
            <FooterImgBlock src={GitHubIcon} />
          </a>
          <a href="https://www.linkedin.com/in/artemshakun/">
            <FooterImgBlock src={LinkedIn} />
          </a>
        </div>
        <FooterTitle>(c) A.Shakun</FooterTitle>
      </ContentBlock>
    </Wrapper>
  );
}
