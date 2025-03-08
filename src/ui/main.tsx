import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ChakraProvider } from "../components/ui/provider"
import Main from './pages/Main';
import '../assets/styles/global.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Provider store={store}>
        <ChakraProvider>
          <Main />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);