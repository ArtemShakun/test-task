import { ListUserBlock } from './styles/styles';

export function RenderDetails({ user }) {
  return (
    <ListUserBlock>
      {Object.entries(user).map(([key, value]) => {
        if (key === 'id') return null;

        return (
          <li key={key}>
            {typeof value === 'object' && value !== null ? (
              <>
                <span>{key}: </span>
                <RenderDetails user={value} />
              </>
            ) : (
              <span>
                {key}: {value}
              </span>
            )}
          </li>
        );
      })}
    </ListUserBlock>
  );
}
