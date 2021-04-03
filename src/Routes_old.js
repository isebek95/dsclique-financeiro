// Aqui que vamos colocar todas as rotas do sistema

import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {TheSidebar,TheFooter,TheContent,TheHeader,TheHeaderDropdown,TheHeaderDropdownMssg,TheHeaderDropdownNotif,TheHeaderDropdownTasks,TheLayout} from './containers/index';

import About from './pages/About';
import Login from './pages/Login';


export default ()=>{
    return(
        <Switch>
            <Route exact path="/">
                <Login></Login>
            </Route>

            <Route exact path="/about">
                <About></About>
            </Route>

            <Route exact path="/login">
                <Login></Login>
            </Route>
            <Route exact path="/teste">
                <TheHeader></TheHeader>
            </Route>           
        </Switch>

    );

}