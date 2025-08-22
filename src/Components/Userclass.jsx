import React from "react";

class Userclass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
            name: 'default',
            location: 'Pondy',
            avatar_url: 'https://avatars.githubusercontent.com/',
            },
        }
        }

        async componentDidMount(){
            const data = await fetch('https://api.github.com/users/Arvinrasool');
            const json = await data.json();
            // console.log(json);
            this.setState({
            userInfo:json,
        });
        }
       

    render(){
        const {name, location, avatar_url} = this.state.userInfo;
        // debugger;
        return(
            <div className="user-class">
                <img src={avatar_url} alt="" width={100}/>
                <h1>Name : {name}</h1>
                <h2>Location : {location}</h2>
                <h3>Instagram : @dev.exe</h3>
            </div>
        )
    }
}

export default Userclass;