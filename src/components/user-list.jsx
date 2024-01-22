import { useNavigate } from 'react-router-dom';
import { ListBlock, ListItem, ButtonDetail } from './styles/styles';

export function UserList({ users }) {
  const navigate = useNavigate();
  return (
    <ListBlock>
      {users &&
        users.map(user => (
          <ListItem key={user.id}>
            <h3 data-testid="user-item">{user.name}</h3>
            <ButtonDetail
              data-testid="user-button"
              onClick={() => navigate(`/user/${user.id}`)}
            >
              Деталі
            </ButtonDetail>
          </ListItem>
        ))}
    </ListBlock>
  );
}
