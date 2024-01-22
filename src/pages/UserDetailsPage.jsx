import { useNavigate } from 'react-router-dom';

import { UserDetails } from '../components/user-details';
import { useGetUserById } from '../hooks/hooks';
import { BackButton } from '../components/styles/styles';

export function UserDetailsPage() {
  const { user, loading, error } = useGetUserById();
  const navigate = useNavigate();

  return (
    <>
      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
      {loading && <p>Loading....</p>}
      {error && <p data-testid="error-message">{error}</p>}
      {user && <UserDetails user={user} />}
    </>
  );
}
