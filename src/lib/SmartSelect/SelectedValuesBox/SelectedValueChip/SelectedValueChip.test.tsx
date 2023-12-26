import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectedValueChip from './SelectedValueChip';

describe('<SelectedValueChip />', () => {
  test('it should mount', () => {
    render(<SelectedValueChip />);
    
    const selectedValueChip = screen.getByTestId('SelectedValueChip');

    expect(selectedValueChip).toBeInTheDocument();
  });
});