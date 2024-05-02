import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import MenuProvider from './context/ProviderContext.ts';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MenuProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MenuProvider>
)
