//Hooks Concept : useState, useEffect 
import {useState} from 'react'
import Employee from './Employe.js'
import Counter from './Counter.js'

function App(){
  const [count,setCount] = useState(0)

  const addCount =()=>{
  
  setCount(count+1)
  console.log(count) 
  //While Calling function usestate will update value in count  
 
}

let employe =[{name:'Amal', age :23},
              {name:'Akshay',age:21},
              {name:'Sirin ', age:23}]

  return(
    <div ClassName='App'>
   <button onClick={addCount}> Add </button> 
    
        {
          employe.map((obj,index) => {
            return(
            // <Employee keys={index} name={obj.name} age={obj.age} count={count}/>

            <Counter />

            )
          })
        }
      
      
    </div>
  )
}

 export default App;