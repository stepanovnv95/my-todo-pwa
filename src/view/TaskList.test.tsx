import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';

test('TaskList render', () => {
  render(<TaskList tasks={['one', 'two']} />);
  expect(screen.getByText(/one/i)).toBeInTheDocument();
  expect(screen.getByText(/two/i)).toBeInTheDocument();
});

test('TaskList empty render', () => {
  render(<TaskList tasks={[]} />);
  expect(screen.getByText(/empty/i)).toBeInTheDocument();
});
