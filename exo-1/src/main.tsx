import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hello from './components/hello/Hello'
import FormTask from './components/FormTask/FormTask'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormTask/>
  </StrictMode>
)
