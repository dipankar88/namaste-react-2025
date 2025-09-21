import { useState } from 'react';
import '../styles/User.css';

const User = ({name, location}) => {
    const [count, setCount] = useState(0);
    return (
        <div className="user-card">
            <div className='count-fn'>
                <h1>Count: {count}</h1>
                <button className='increment' onClick={() => setCount(count + 1)}>+</button>
            </div>

            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Learning: JavaScript and React</h3>
            <p>Functional Component</p>
        </div>
    );
};

export default User;