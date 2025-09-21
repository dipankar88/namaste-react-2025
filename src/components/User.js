import '../styles/User.css';

const User = ({name, location}) => {
    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Learning: JavaScript and React</h3>
            <p>Functional Component</p>
        </div>
    );
};

export default User;