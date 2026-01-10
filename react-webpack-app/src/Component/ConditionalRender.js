import React, { useState } from 'react';

function LoggedIn() {
    const [isLoggedIn, setIsloggedIn] = useState(false);

    return (

        <>
            {isLoggedIn ? (
                <h1>Welcome User !</h1>
            ) : (
                <h1>Please login to continue</h1>
            )}

            <button onClick={() => setIsloggedIn(!isLoggedIn)}>{isLoggedIn ? 'Logout' : 'Login'}</button>
        </>
    )
}

export default LoggedIn;