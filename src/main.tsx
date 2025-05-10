import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { AuthProvider } from '@altanlabs/auth'
import '@altanlabs/auth/dist/styles.css'
import './index.css'
import './App.css'
import App from './App'

// Auth configuration
const AUTH_CONFIG = {
  tableId: 'temp_users_table_id',
  providers: {
    google: {
      clientId: process.env.VITE_GOOGLE_CLIENT_ID,
      clientSecret: process.env.VITE_GOOGLE_CLIENT_SECRET
    }
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider {...AUTH_CONFIG}>
        <App />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
)