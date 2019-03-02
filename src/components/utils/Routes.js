import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from '../utils/ScrollToTop';
import Home from '../pages/Home';
import Hiragana from '../pages/Hiragana';
import Katakana from '../pages/Katakana';
import Trainer from '../pages/Trainer';
import Info from '../pages/Info';
import Settings from '../pages/Settings';
import NoMatch from '../pages/NoMatch';

function Routes() {
    return <Router>
        <ScrollToTop>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/hiragana" component={Hiragana} />
                <Route exact path="/katakana" component={Katakana} />
                <Route exact path="/trainer" component={Trainer} />
                <Route exact path="/info" component={Info} />
                <Route exact path="/settings" component={Settings} />
                <Route component={NoMatch} />
            </Switch>
        </ScrollToTop>
    </Router>;
}

export default Routes;
