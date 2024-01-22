import React from 'react';
import axios from 'axios';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { UserDetails } from '../components/user-details';
import { UserDetailsPage } from '../pages/UserDetailsPage';

jest.mock('axios');
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('User Detail page render', () => {
  test('check loading component and Error msg', async () => {
    axios.get.mockRejectedValueOnce(new Error('ERROR'));

    render(
      <MemoryRouter>
        <UserDetailsPage />
      </MemoryRouter>,
    );

    expect(screen.getByText('Loading....')).toBeInTheDocument();
    expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Loading....')).not.toBeInTheDocument();
    });

    const errorMessageElement = screen.getByTestId('error-message');
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement.textContent).toBe('ERROR');
  });

  test('Render UserDetail page', () => {
    const mockUser = {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      phone: '010-692-6593',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
      },
      address: {
        city: 'Wisokyburgh',
        street: 'Victor Plains',
        suite: 'Suite 879',
        zipcode: '90566-7771',
        geo: { lat: '-43.9509', lng: '-34.4618' },
      },
    };
    render(
      <MemoryRouter>
        <UserDetails user={mockUser} />
      </MemoryRouter>,
    );

    expect(screen.queryByText(mockUser.id)).not.toBeInTheDocument();
    expect(screen.getByTestId('title-name')).toBeInTheDocument();
    expect(screen.getByText(/name: Ervin Howell/)).toBeInTheDocument();
    expect(screen.getByText(/Antonette/i)).toBeInTheDocument();
    expect(screen.getByText(/Shanna@melissa.tv/)).toBeInTheDocument();
    expect(screen.getByText(/010-692-6593/)).toBeInTheDocument();
    expect(screen.getByText(/anastasia.net/)).toBeInTheDocument();
    expect(screen.getByText(/Deckow-Crist/)).toBeInTheDocument();
    expect(
      screen.getByText(/Proactive didactic contingency/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/synergize scalable supply-chains/),
    ).toBeInTheDocument();
    expect(screen.getByText(/Wisokyburgh/)).toBeInTheDocument();
    expect(screen.getByText(/Victor Plains/)).toBeInTheDocument();
    expect(screen.getByText(/Suite 879/)).toBeInTheDocument();
    expect(screen.getByText(/90566-7771/)).toBeInTheDocument();
    expect(screen.getByText(/-43.9509/)).toBeInTheDocument();
    expect(screen.getByText(/-34.4618/)).toBeInTheDocument();
  });

  test('check button back', async () => {
    render(
      <MemoryRouter>
        <UserDetailsPage />
      </MemoryRouter>,
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
