import React,{Component} from 'react'

/* 
// basic component 
class App extends Component{
    render(){
     return <h1>hello suhel welcome to react</h1>;
    }
} */
const CustomComp =() => <h2>my name is hossain</h2>
class App extends Component{
    render(){
        const name= 'M A Hossain Suhel'
        const myData=(
                <div>
                    <h2>this is {name}</h2>
                    <p>now all text in myData div working because const myData is defined into the render function 
                        and it calling into the return area using a variable .
                    </p>
                </div>
        ); 

        
        return(
            <div className='App'>
                <CustomComp/>

                <h1>this is my first react class based component </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex in nihil molestiae doloribus laboriosam earum nobis itaque illo! Iusto, est! Ex natus reiciendis blanditiis iure nihil nemo facere non.</p>
                <p>{name}</p>

                {myData}
            </div>
        );
    }
}

export default App