"use client"
import React, { useState } from 'react';


const page =()=> {
const [title, settitle] = useState("")
const [desc, setdesc] = useState("")
const [maintasks, setmaintasks] = useState([])

const submittable = (e)=>{
    e.preventDefault()
    setmaintasks([...maintasks, {title,desc}])
    settitle("")
    setdesc("")
    console.log(maintasks);
}

const deleteHandler = (i) => {
let copytask = [...maintasks]
    copytask.splice(i,1)
    setmaintasks(copytask)
}
let rendertask = <h2 className='text-center bg-yellow-100 px4 py-5 m-2'> No Task is Available Now </h2>

 if(maintasks.length>0){
    rendertask = maintasks.map((t,i)=>{
        return (
            <li key={i}>
          <div className=' flex justify-between mb-5 w-2/3 bg-green-400'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <p className='text-xl font-medium'>{t.desc}</p>
        </div>
        <div className='flex justify-end'>
        <button className='hover: bg-red-600 text-white px-4 py-2 border-right rounded font-bold'
         onClick={()=>{
            deleteHandler(i)
        }}>
            Delete
        </button>
        </div>
        </li>
        )
        })
        

 }
    return (
<>
<h1 className='bg-black text-white p-9 text-2xl font-bold text-center m-5 '><div className='bg-pink-300 rounded-lg text-blue-700'>Shah Todo_list</div> </h1>
<form onSubmit={submittable} className='text-center'>
    <input  type="text" placeholder='Enter the task list' className='text-2xl border-zinc-800 border-2 m-10  px-6 py-2 rounded-xl bg-orange-600 text-black'
    value={title}
    onChange={(e)=>{
        settitle(e.target.value)
    }}
    />
    <input type="text" placeholder='Enter the Description here' className='text-2xl border-zinc-800 border-2 m-10  px-6 py-2 text-black rounded-xl bg-orange-600'
    value={desc}
    onChange={(e)=>{
        setdesc(e.target.value)
    }}
    />
    <button className='border-2 rounded-xl text-bold px-7 py-3 bg-lime-400 m-5'>Add Task</button>
</form>
<div className='p-8 bg-blue-200 rounded border-box'>
<ul> {rendertask}</ul>
</div>
</>
      );
}

export default page