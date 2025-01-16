import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from "react-redux";
import Store from './utils/Store.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Provider store={Store}>
    <App />
    </Provider>
    </Router>
  </StrictMode>,
)
