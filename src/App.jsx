import React from 'react'
import './App.css'
import {router} from './Pages/index.js'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Alert from './Components/Alert/Alert'

export default function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={router}/>
        <Alert/>
    </Provider>
  )
}