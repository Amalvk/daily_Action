import React from 'react'

function Employee(props) {
    return (
        <div>
            <h1> Name :{props.name} ,  Age :{props.age}</h1>
            <h2>Counter : {props.count}</h2>
        </div>
    )
}

export default Employee
