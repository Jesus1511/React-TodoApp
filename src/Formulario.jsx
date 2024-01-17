import React, { useState } from 'react';
import { ToDo } from './ToDo';


export const Formulario = () => {
    const [value, setValue] = useState("");
    const [toDos, setToDos] = useState([]);

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        const toDo = {
            id: crypto.randomUUID(),
            value: value
        }

        if (value !== "") {
            setToDos(prevToDos => [toDo, ...prevToDos]);
            setValue("");
        }
    }
    function newValor(value, id) {
        setToDos(prevToDos =>
            prevToDos.map(todo =>
                todo.id === id ? { ...todo, value: value } : todo
            )
        );
    }
    function deleten (id){
        let newTodos = toDos.filter((element)=>{
           return element.id !== id
        })
        setToDos(newTodos)
    }
    return (
        <>
            <form className='form' action="">
                <input onChange={handleChange} className='formInput' type="text" value={value} />
                <button onClick={handleClick} className='formButton'>Crear ToDo</button>
            </form>

            <div className='todosContainer'>
                {toDos.map((item) => (
                    <ToDo  key={item.id} item={item} newValue={newValor} deleten={deleten} />
                ))}
            </div>
        </>
    )
}