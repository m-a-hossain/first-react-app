import React from 'react'

const MyProps =(props)=>{
    console.log('m proops page', props)
    return <h2>this is my props page setting name value in props obj as {props.name}</h2>
}
    
export default MyProps