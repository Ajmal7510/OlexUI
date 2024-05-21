import React from 'react'
import { useAuth } from '../Security/AouthContext'

const ChildComponent = () => {
    const Context=useAuth()
   const handleClick=()=>{
    Context.setStateValue()
   }
  return (
    <div>
        <button onClick={handleClick}> click </button> 
    </div>
  )
}
export default ChildComponent
