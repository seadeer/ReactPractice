var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');
var Router = require('react-router');
var Route = Router.Route;
var router = Router.Router;
var IndexRoute = Router.IndexRoute;
var browserHistory = Router.browserHistory;

module.exports = (
    <router history={browserHistory}>
        <Route path="/" component={Main}>
        <Route path="profile/:username" component={Profile} />
        <IndexRoute component={Home}/>
        </Route>
    </router>
    );
