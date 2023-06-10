import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Provider as StroreProvider } from 'react-redux'

import { ThemeProvider } from './feature/themeProvider/ThemeProvider.tsx'
import { store } from './app/store.ts'
import { BackgroundProvider } from './feature/backgroundProvider/BackgroundProvder.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StroreProvider store={store}>
      <ThemeProvider>
        <BackgroundProvider>
          <App></App>
        </BackgroundProvider>
      </ThemeProvider>
    </StroreProvider>
  </React.StrictMode>,
)
