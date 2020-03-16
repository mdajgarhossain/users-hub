import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './User.css';

function User(props) {
    console.log(props.user);
    const {name, email, phone, salary, image} = props.user;
    return (
        <div className="row d-flex justify-content-between" id="user">
            <div className="col-md-4">
                <img src={image} className="img-fluid rounded"alt="img"/>
            </div>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title"> User Name: {name}</h4>
                        <h5>Email: {email}</h5>
                        <h5>Phone: {phone}</h5>
                        <h5>Yearly Income: ${salary}</h5>
                        <button 
                            type="button" 
                            className="btn" 
                            id="add-user-btn"
                        >
                            <FontAwesomeIcon icon={faUserPlus} /> Add User
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
