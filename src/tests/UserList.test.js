import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { UserList } from '../components/user-list';
import userEvent from '@testing-library/user-event';

jest.mock('axios');
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('UserList render', () => {
  let response;

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Ervin Howell',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
        },
      ],
    };
  });

  test('check getting users', async () => {
    axios.get.mockResolvedValue(response);
    render(
      <MemoryRouter>
        <UserList users={response.data} />
      </MemoryRouter>,
    );
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(4);
  });

  test('check user name', async () => {
    const mockUsers = [{ id: 1, name: 'John' }];

    render(
      <MemoryRouter>
        <UserList users={mockUsers} />
      </MemoryRouter>,
    );
    expect(screen.getByText('John')).toBeInTheDocument();
  });

  test('check button Detail', async () => {
    axios.get.mockResolvedValue(response);

    render(
      <MemoryRouter>
        <UserList users={response.data} />
      </MemoryRouter>,
    );

    const buttons = await screen.findAllByTestId('user-button');
    expect(buttons.length).toBe(4);
  });

  test('check onClick button for link to the user detail page', () => {
    const mockUsers = [{ id: 1, name: 'John' }];

    render(
      <MemoryRouter>
        <UserList users={mockUsers} />
      </MemoryRouter>,
    );

    userEvent.click(screen.getByText('Деталі'));
    expect(mockNavigate).toHaveBeenCalledWith('/user/1');
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
