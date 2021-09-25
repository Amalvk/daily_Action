import React,{useState,useEffect} from 'react'


function Counter() {
    const [count, setCount] = useState(0)
     useEffect(() => {
        console.log("Mounting....")
        return()=> {
            console.log(`Unmounting.....`+count);
        }
    },[count])
    return (
        <div>
            <button onClick={()=>setCount(count+1)}> Add </button>
            <h2>Count : {count}</h2>
        </div>
    )
}

export default Counter
