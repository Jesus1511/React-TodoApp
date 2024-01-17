import React from 'react'
import { useState } from 'react'

export const ToDo = ({ item, newValue, deleten }) => {

    const [editing, setEditing] = useState(true)
    const [value, setValue] = useState()


    function handleEditeClick(){
        setEditing(false)
        setValue(item.value)
    }

    function handleUpdateClick (){
        newValue(value, item.id)
        setEditing(true)
    }

    function handleDelteClick(){
        deleten(item.id)
    }
 
  return (

    editing?         
    <div className='toDos'>
        <div className='elDiv'>{item.value}</div>     
        <button className='editButton' onClick={handleEditeClick} >edite</button>
        <button className='deleteButton' onClick={handleDelteClick}>delete</button>
    </div> 
    :         
    <div className='toDos' >
        <input className='inputEdite' onChange={(e)=>{setValue(e.target.value)}} type="text" value={value} on />
        <button className='updateButton' onClick={handleUpdateClick}>update</button>
    </div>

  )
}
