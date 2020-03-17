import React, { useState } from 'react';
import usersData from '../../usersData/users.json';
import User from '../User/User';
import './UsersHub.css';
import UsersBriefInfo from '../UsersBriefInfo/UsersBriefInfo';

function UsersHub() {
    const [users, setUsers] = useState([]);

    const handleAddUser = (user) => {
        // console.log('Added user', user);
        const newUsers = [...users, user];
        setUsers(newUsers);
    };
    return (
        <div className="users-hub">
            <div className="container">
                <div className="row">
                    <div className="col-md-8" id="users-info">
                        {
                            usersData.map((user) => 
                                <User 
                                    user={user}
                                    handleAddUser={handleAddUser}
                                />
                            )
                        }
                    </div>
                    <div className="col-md-4" id="users-brief-info">
                        <UsersBriefInfo users={users}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersHub
