import React, { Component } from 'react'
import './profile.style.css'
import Bio from './bio'
import Skill from './skill'
import Social from './social'

class Profile extends React.Component{
    render(){
        return (
            <div className='container'>
                  <Bio/>
                  <Skill/>
                  <Social/>
                  
           </div>
         
        )
    }
}

export default Profile