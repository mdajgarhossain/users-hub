import React from 'react';
import './UsersBriefInfo.css';

function UsersBriefInfo(props) {
    // console.log(props);
    const users = props.users;
    const totalSalary = users.reduce((totalSalary, user) => totalSalary + Number(user.salary), 0);
    
    return (
        <div className="container users-brief">
            <h3>Users Brief Info</h3>
            <h5>Total Added Users: {users.length}</h5>
            <h5>Users Yearly Income: ${totalSalary}</h5>
        </div>
    )
}

export default UsersBriefInfo
