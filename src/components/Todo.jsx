import React, { useEffect, useRef, useState} from 'react'
import todo_icon from "../assets/todo_icon.png"
import ItemList from './ItemList'

const Todo = () => {
    const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [])

    const inputVal = useRef(); 
    const handleAdd = () => {
        const inputText = inputVal.current.value.trim();
        if (inputText === "") {
            alert("Please enter a task");
        } else {
            const newTask = {
                id: Date.now(),
                text: inputText,
                isDone: false
            }
            setTodoList((prev)=>[...prev, newTask]);
            inputVal.current.value = "";
        }
    }
    const handleDelete = (id) => {
        setTodoList((otherItems) => {
            return otherItems.filter((items) => items.id !== id);
        })
    }
    const handleDone = (id) => { 
        setTodoList((items) => {
            return items.map((item) => {
                if (item.id === id) {
                    return {...item, isDone: !(item.isDone)};
                }
                return item;
            })
        })
    }
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todoList))
    },[todoList])
  return (
      <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
          <div className='flex items-center mt-7 gap-2'>
              <img className="w-8" src={todo_icon} alt='todoicon'/>
              <h1 className='text-3xl font-semibold'>Todo List</h1>
          </div>
          <div className='flex items-center my-7 bg-gray-200 rounded-full'>
              <input ref={inputVal} name="task" type="text" placeholder="Enter a task" className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"></input>
              <button onClick={handleAdd} className='border-none rounded-full bg-orange-700 hover:bg-orange-900 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add+</button>
          </div>
          <div>
              {todoList.map((item,index) => {
                  return <ItemList key={index} text={item.text} id={item.id} isComplete={item.isDone} deleteBtn={handleDelete} toggleDone={handleDone} />
              })}
          </div>
      </div>
  )
}

export default Todo