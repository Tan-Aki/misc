import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import jwt_decode from 'jwt-decode';
import { AuthContext } from './shared/context/auth-context';

let logoutTimer;

function App() {
    const [token, setToken] = useState(false);
    const [userId, setUserId] = useState(false);
    const tokenExpirationDate = useRef();

    const login = useCallback((uid, token) => {
        setToken(token);
        setUserId(uid);

        tokenExpirationDate.current = jwt_decode(token).exp;

        console.log('tokenExpirationDate.current', tokenExpirationDate.current);

        localStorage.setItem(
            'userData',
            JSON.stringify({
                userId: uid,
                token: token,
            })
        );
    }, []);

    const logout = useCallback(() => {
        console.log('logout')
        setToken(null);
        setUserId(null);
        localStorage.removeItem('userData');
    }, []);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        console.log('login1');
        if (storedData && storedData.token) {
            tokenExpirationDate.current = jwt_decode(storedData.token).exp;
            console.log('login2');

            // console.log(tokenExpirationDate.current);
            // console.log(Date.now() / 1000);
            console.log(tokenExpirationDate.current - Date.now() / 1000);
            if (tokenExpirationDate.current > Date.now() / 1000) {
                console.log('login3');

                login(storedData.userId, storedData.token);
            }
        }
    }, [login]);

    useEffect(() => {
        console.log('tokenExpirationDate.current', tokenExpirationDate.current)
        if (token && tokenExpirationDate.current !== 'undefined') {
            const remainingTime =
                tokenExpirationDate.current - Date.now() / 1000;
            console.log('remaining time :', remainingTime);
            // logoutTimer = setTimeout(logout, remainingTime);
        } else {
            // clearTimeout(logoutTimer);
        }
    }, [token, logout]);

    let routes;

    if (token) {
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Users />
                </Route>
                <Route path="/:userId/places" exact>
                    <UserPlaces />
                </Route>
                <Route path="/places/new" exact>
                    <NewPlace />
                </Route>
                <Route path="/places/:placeId">
                    <UpdatePlace />
                </Route>
                <Redirect to="/" />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Users />
                </Route>
                <Route path="/:userId/places" exact>
                    <UserPlaces />
                </Route>
                <Route path="/auth">
                    <Auth />
                </Route>
                <Redirect to="/auth" />
            </Switch>
        );
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                userId: userId,
                login: login,
                logout: logout,
            }}
        >
            <Router>
                <MainNavigation />
                <main>{routes}</main>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
