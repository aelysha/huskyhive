import React, {useEffect, useState} from 'react'

// cd client, npm start
function App() {

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    )
  })
  return (
    <div>
      Hello World

    </div>
  )
}

export default App