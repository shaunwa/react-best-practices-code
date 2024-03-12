import { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import useUser from './useUser';

const UserProfilePage = () => {
    const user = useUser('123');


    return (
        <>
        <UserInfo user={user} />
        <button onClick={sendFriendRequest}>Send Friend Request</button>
        </>
    )
}
