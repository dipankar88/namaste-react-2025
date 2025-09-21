import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        // this.name = props.name;
    }

    render(){
        const {name, location} = this.props;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Learning: JavaScript and React</h3>
                <p>Class Based Component</p>
            </div>
        );
    }
}

export default UserClass;