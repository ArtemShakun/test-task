import React from 'react';
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import { HomePage } from '../pages/HomePage';
import { MemoryRouter } from 'react-router-dom';

jest.mock('axios');

describe('HomePage', () => {
  test('check loading component and Error msg', async () => {
    axios.get.mockRejectedValueOnce(new Error('ERROR'));

    render(
      <MemoryRouter>
        <HomePage />
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

    const userItemElements = screen.queryAllByTestId('user-item');
    expect(userItemElements).toHaveLength(0);
  });
});
