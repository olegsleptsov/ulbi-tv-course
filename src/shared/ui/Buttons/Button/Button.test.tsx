import React from 'react'
import {render, screen} from '@testing-library/react';
import {Button} from './Button';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { expect } = require('@jest/globals')

describe('Button', () => {
  it('test render', async () => {
    render(<Button>TEST</Button>)

    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})