import React from 'react'
import "./global.css"
import { RouterProvider } from 'react-router-dom'
import { myRoute } from './Route'

const App = () => {
  return <RouterProvider router={myRoute}></RouterProvider>
}

export default App
