import Userclass from "./Userclass";
// import User from "./User";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");   
    }

    componentDidMount(){
        console.log("Parent ComponentDidMount");
    }

    render(){
        return(
        <div>
            <h1>This is my About Restaurant Page</h1>
            <h3>Here You will find Everything You need about us</h3>
            <Userclass name={'Aravindh'} location={'Puducherry'} />
            {/* <User name={'Aravindh'} location={'Puducherry'} /> */}
        </div>
    )
    }
}

export default About;