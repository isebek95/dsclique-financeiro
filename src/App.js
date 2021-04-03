import React from 'react';
import {connect} from 'react-redux';

import {BrowserRouter,Route, Switch} from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/Login'));

const Page =(props)=>{

  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
          <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
        </Switch>
      </React.Suspense>    
    </BrowserRouter>

  );

}


const mapStateToProps=(state)=>{
  return {
    user:state.user   //Quero tudo do meu reducer user
  };
}

const mapDispatchToProps=(dispatch)=>{
  return {
    
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(Page);