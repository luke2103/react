import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
    const {user} = useContext(UserContext)
    // console.log(user.username)
    if (!user.username) {return <div>Please login</div>}
        
    
    return <div>Welcome { user.username}</div>
}

export default Profile
