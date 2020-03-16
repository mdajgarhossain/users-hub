import React from 'react';
import users from '../../usersData/users';
import User from '../User/User';
import './UsersHub.css';

function UsersHub() {
    return (
        <div className="users-hub">
            <div className="container">
                <div className="row">
                    <div className="col-md-8" id="users-info">
                        {
                            users.map(user => <User user={user}/>)
                        }
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    )
}

export default UsersHub
