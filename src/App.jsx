import React, { useState } from 'react'
import ContextProvider from './context/Context'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

const App = () => {


  return (
    <>
      <ContextProvider>
      <Sidebar />
      <Main />
    </ContextProvider>
    </>
  )
}

export default App
