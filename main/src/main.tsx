import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from 'team-a'
import {AppFromTeamB} from 'team-b'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <AppFromTeamB/>
  </StrictMode>,
)
