import { useState } from 'react';
// import '../styles/User.css';

const User = ({name, location}) => {
    const [count, setCount] = useState(0);
    return (
        <div className="user-card border border-solid rounded-xl m-1 p-3">
            <div className='count-fn flex'>
                <p><strong>Count : </strong>{count}</p>
                <button className='increment bg-amber-200 px-2 mx-2 rounded-2xl' onClick={() => setCount(count + 1)}>+</button>
            </div>

            <h2><strong>Name : </strong>{name}</h2>
            <h3><strong>Location : </strong>{location}</h3>
            <h3><strong>Learning : </strong>JavaScript and React</h3>
            <p>Functional Component</p>
        </div>
    );
};

export default User;