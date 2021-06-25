import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import UserRegister from '../pages/UserRegister';
import PetList from '../pages/PetList';
import PetDetails from '../pages/PetDetails';
import PetRegister from '../pages/PetRegister';
import Password from '../pages/Password';
import Appointments from '../pages/Appointments';
import CreateAppointment from '../pages/CreateAppointment';
import NewPassword from '../pages/NewPassword';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact to="/home" from="/" />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={UserRegister} />
        <Route path="/list" component={PetList} />
        <Route path="/details/:id" component={PetDetails} />
        <Route path="/petregister" component={PetRegister} />
        <Route path="/password" component={Password} />
        <Route path="/appointments" component={Appointments} />
        <Route path="/createappointment" component={CreateAppointment} />
        <Route path="/newpassword" component={NewPassword} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
