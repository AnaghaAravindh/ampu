import React from 'react'

const Sample2 = () => {
    var pname=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
        <ul>
        {pname.map((value,index)=>{
        return <li key={index}>{value}</li>
    })}
        </ul>
      </div>
  )
}

export default Sample2
