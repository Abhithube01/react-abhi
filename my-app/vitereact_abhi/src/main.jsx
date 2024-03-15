import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'
import Abhi from './abhi.jsx'

function MyApp()
{
  return(
    <div>
      <h1>custom App</h1>
    </div>
  )
}

// const reactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'

//   },
//   children:'click me to visit google'
// }

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
)

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Abhi/>
)
// you cannot write if else syntax in evaluated expression