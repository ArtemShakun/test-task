import { RenderDetails } from './render-details';
import { Container } from './styles/styles';

export function UserDetails({ user }) {
  return (
    <Container>
      <h2 data-testid="title-name">{user.name}</h2>
      <RenderDetails user={user} />
    </Container>
  );
}
