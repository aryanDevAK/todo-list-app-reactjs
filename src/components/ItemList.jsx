import React from 'react'
import tick from "../assets/tick.png"
import not_tick from "../assets/not_tick.png"
import delete_icon from "../assets/delete.png"

const ItemList = ({text,id,isComplete,deleteBtn,toggleDone}) => {
  return (
      <div className='flex item-center my-3 gap-2'>
          <div className='flex flex-1 items-center cursor-pointer'>
              <img onClick={()=>{toggleDone(id)}} className='w-7' src={isComplete ? tick : not_tick} alt='tick'></img>
              <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? "line-through" : ""}`}>{text}</p>
          </div>
          <img onClick={()=>{deleteBtn(id)}} src={delete_icon} className='w-4 cursor-pointer'></img>
      </div>
  )
}

export default ItemList