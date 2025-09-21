import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        // this.name = props.name;
        this.state = {
            count: 0,
            count2: 1
        }
    }

    render(){
        const {name, location} = this.props;
        const {count, count2} = this.state;
        return (
            <div className="user-card">
                <div className='count-fn'>
                    <h1>Count: {count}</h1>
                    <button
                    className='increment'
                    onClick={() => this.setState({
                        count: this.state.count + 1
                    })}>+</button>
                </div>
                <h1>Class-Count: {count2}</h1>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Learning: JavaScript and React</h3>
                <p>Class Based Component</p>
            </div>
        );
    }
}

export default UserClass;