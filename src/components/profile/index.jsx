import React, { Component } from 'react'
import './profile.style.css'

class Profile extends React.Component{
    render(){
        return (
            <div className='container'>
                   <div className='Bio'>
                     <h1>my name : M A Hossain</h1>
                    <h4>beginer web developer from scratch</h4>
                 </div>
                 <div className='skill'>
                     <h2>skills</h2>
                     <ul>
                         <li>html</li>
                         <li>css</li>
                         <li>java script</li>
                         <li>boostrap</li>
                     </ul>
                 </div>
                 <div className='social'>
                     <h2>Social links</h2>
                     <ul>
                         <li>face book</li>
                         <li>twitter</li>
                         <li>instagram</li>
                         <li>linkdine</li>
                     </ul>
                 </div>
            </div>
         
        )
    }
}

export default Profile