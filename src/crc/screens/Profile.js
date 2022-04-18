import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function Profile(props) {
    let navigate = useNavigate()
    let {username} = useParams();
    return (
        <div>
            this is a {username}
        </div>
    );
}

export default Profile;