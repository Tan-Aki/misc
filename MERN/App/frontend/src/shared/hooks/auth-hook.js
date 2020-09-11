import { useState, useCallback, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

let logoutTimer;

export const useAuth = () => {
    const [token, setToken] = useState(false);
    const [userId, setUserId] = useState(false);
    const [tokenExpirationDate, setTokenExpirationDate] = useState();

    const login = useCallback((uid, token) => {
        setToken(token);
        setUserId(uid);
        setTokenExpirationDate(jwt_decode(token).exp);

        localStorage.setItem(
            'userData',
            JSON.stringify({
                userId: uid,
                token: token,
            })
        );
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setTokenExpirationDate(null);
        localStorage.removeItem('userData');
    }, []);

    useEffect(() => {
        if (token && tokenExpirationDate) {
            const remainingTime = tokenExpirationDate * 1000 - Date.now();
            //expected time in setTimeout is in milliseconds, hence the *1000
            logoutTimer = setTimeout(logout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    }, [token, logout, tokenExpirationDate]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));

        if (storedData && storedData.token) {
            const localTokenExpirationDate = jwt_decode(storedData.token).exp;

            if (localTokenExpirationDate > Date.now() / 1000) {
                login(storedData.userId, storedData.token);
            }
        }
    }, [login]);

    return [token, login, logout, userId];
};
