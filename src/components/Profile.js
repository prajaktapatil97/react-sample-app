import React from "react";

class Profile extends React.Component{
    constructor(){
        super()// javascript keyword
        this.state = {
            name : '',
            email: 'peter@gmail.com'

        }
    }

    // updateState(e){
    //     console.log("##################",e)
    //     this.setState({
    //         name:e
    //     })
    // }
    render(){
        return(<div>
          <h1>  Hello State {this.state.name}</h1>
          {/* <button onClick={()=>{this.updateState()}}>
              Update
          </button> */}
          <input type = "text" onChange = {(e)=>{this.setState({name : e.target.name})}}/>
        </div>);
    }
}

export default Profile



// without constructor can't define state  - this 