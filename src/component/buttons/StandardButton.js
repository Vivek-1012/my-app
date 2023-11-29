import React from 'react'

const StandardButton = ({text,action}) => {
  return (
    <div>
<button onClick={()=>action} >{text}</button>      
    </div>
  )
}

export default StandardButton
