
import ReactDOM from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from './App.jsx'

import './index.css'
import './app.css'
import { Provider } from 'react-redux';
import store from '../Redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <Provider store={store}>
        <App />
    </Provider>
)
