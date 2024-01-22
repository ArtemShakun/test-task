import { UserList } from '../components/user-list';
import { useGetUsers } from '../hooks/hooks';

export function HomePage() {
  const { users, loading, error } = useGetUsers();

  return (
    <>
      {loading && <p>Loading....</p>}
      {error && <p data-testid="error-message">{error}</p>}
      {users && <UserList users={users} />}
    </>
  );
}
