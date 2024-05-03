import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import MenuProvider from './context/ProviderContext.tsx';
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <MenuProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
   </MenuProvider>
  </QueryClientProvider>
)
