import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import Test from './Test';
// 配置路由
const BasicRoute = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/detail" element={<Detail/>} />
            <Route exact path="/test" element={<Test/>} />
        </Routes>
    </Router>
);


export default BasicRoute;