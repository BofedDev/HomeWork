import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@toast-ui/editor/dist/toastui-editor.css';
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
