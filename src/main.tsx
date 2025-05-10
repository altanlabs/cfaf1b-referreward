import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { AuthProvider } from '@altanlabs/auth'
import '@altanlabs/auth/dist/styles.css'
import './index.css'
import './App.css'
import App from './App'

// Initialize auth with a temporary ID - replace with actual users table ID in production
const USERS_TABLE_ID = 'temp_users_table_id';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider tableId={USERS_TABLE_ID}>
        <App />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
)