import React from 'react'
import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from './Sidebar';
import {renderWithProviders} from '@shared/tests/lib/renderWithProviders';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { expect } = require('@jest/globals')

describe('Sidebar', () => {
  it('test render', async () => {
    renderWithProviders(<Sidebar />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  it('toggle width is worked', async () => {
    renderWithProviders(<Sidebar />)

    const button = screen.getByTestId('sidebar-toggle-button')
    fireEvent.click(button)
    expect(screen.getByTestId('sidebar')).toHaveClass('expanded')
  })
})
