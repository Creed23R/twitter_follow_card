import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
function App() {
  
  return (
    <>
      <TwitterFollowCard username="kevin" initialIsFollowing={false}>
        Rios Nicho Kevin
      </TwitterFollowCard>
      <TwitterFollowCard username="midudev" initialIsFollowing>
        Miguel Angel Duran
      </TwitterFollowCard>
    </>
  )
}

export default App
