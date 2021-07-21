import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import Test from './Test';
// 配置路由
const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
            <Route exact path="/test" component={Test}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;