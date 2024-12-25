import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CardList from './cardList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardList />
  </StrictMode>,
)
