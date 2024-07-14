import {render, screen} from '@testing-library/react';
import {Button} from './Button';

describe('Button', () => {
  it('test render', async () => {
    render(<Button>TEST</Button>)

    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})