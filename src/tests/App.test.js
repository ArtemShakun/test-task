import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';

describe('render App components', () => {
  test('Error page test', () => {
    render(
      <MemoryRouter initialEntries={['/asdasdas']}>
        <App />
      </MemoryRouter>,
    );
    const errorPage = screen.getByText(`This page doesn't exist`);
    expect(errorPage).toBeInTheDocument();
  });

  test('Home Page test', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('Page Details test', () => {
    render(
      <MemoryRouter initialEntries={['/user/1']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Back/i)).toBeInTheDocument();
  });
});
