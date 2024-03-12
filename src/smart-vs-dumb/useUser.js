import { useState, useEffect } from 'react';

const useUser = (id) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Load user data from server

        setUser({ name: 'Shaun' });
    }, []);

    return user;
}

export default useUser;