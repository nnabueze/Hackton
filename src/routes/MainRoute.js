import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../components/Home';
import Result from '../components/Result';
import ProLaw from '../components/Result/ProLaw';
import RightPrivilage from '../components/Result/RightPrivilage';
import Right from '../components/Result/Right';
import LawyersProfile from '../components/Result/LawyersProfile';
import WhatWeDo from '../components/Result/WhatWeDo';
import Contact from '../components/Contact';

class MainRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/search-result" component={Result} exact />
                    <Route path="/pro-law" component={ProLaw} exact />
                    <Route path="/right-and-privilage" component={RightPrivilage} exact />
                    <Route path="/landlord-right" component={Right} exact />
                    <Route path="/tenent-right" component={RightPrivilage} exact />
                    <Route path="/lawyer-profile" component={LawyersProfile} exact />
                    <Route path="/You-Can-Do-Now" component={WhatWeDo} exact />
                    <Route path="/contact" component={Contact} exact />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default MainRoute;