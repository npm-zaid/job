import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context from './components/Context.jsx'
import { Provider } from 'react-redux'
import App2 from './App2.jsx'
import {store} from './New/Redux/store.js'



createRoot(document.getElementById('root')).render(

    <Provider store={store}>
   <App/>
    </Provider>

//  <Context>
//     <App2/>
// </Context> 



)
