import React, { Component } from 'react'
import './profile.style.css'
import Bio from './bio'
import Skill from './skill'
import Social from './social'

class Profile extends React.Component{
    info ={
        name:'m a hossain suhel',
        title:'i am a web beginer web developer from scrch',
        skillA:'java',
        skillB:'java script',
        skillc:'boostrap',
        skillD:'react'
    };
    render(){
        console.log('profile page', this.props)
        return (
            <div className='container'>
                  <Bio name={this.info.name} title={this.info.title}/>
                  <Skill 
                  skillA={this.info.skillA}
                  skillB ={this.info.skillB}
                  skillc={this.info.skillc}
                  skillD={this.info.skillD}
                   />
                  <Social/> 
                  
           </div>
         
        )
    }
}

export default Profile