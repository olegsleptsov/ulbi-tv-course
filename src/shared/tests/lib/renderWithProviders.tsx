import {ReactNode} from 'react';
import {render} from '@testing-library/react'
import i18nForTests from '../i18n/configForTests'
import {I18nextProvider} from 'react-i18next';

export const renderWithProviders = (component: ReactNode) => {
  return render(<I18nextProvider i18n={i18nForTests}>
    {component}
  </I18nextProvider>)
}