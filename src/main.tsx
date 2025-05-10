import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { AuthProvider } from "@altanlabs/auth"
import "@altanlabs/auth/dist/styles.css"
import './index.css'
import './App.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider tableId="your-users-table-id">
        <App />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
)