import React from 'react'

const Skill=(props)=>(
    <div className='skill'>
    <h2>skills</h2>
    <ul>
        <li>{props.skillA}</li>
        <li>{props.skillB}</li>
        <li>{props.skillc}</li>
        <li>{props.skillD}</li>
    </ul>
    </div>
)
export default Skill
