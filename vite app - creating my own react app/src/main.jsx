import React from 'react'
import ReactDOM from 'react-dom/client'

const element = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  "Please click me"
)



ReactDOM.createRoot(document.getElementById('root')).render(
  element
    
)
