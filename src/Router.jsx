import React from 'react';
import { Route, Switch } from 'react-router';
import Cart from './containers/Cart';
import Favorite from './containers/Favorite';
import Home from './containers/Home';
import Shipping from './containers/Shipping';
import Signin from './containers/Signin';
import SignUp from './containers/SignUp';
import ThankYou from './containers/ThankYou';



const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/signup'} component={SignUp} />
                <Route exact path={'/signin'} component={Signin} />
                <Route exact path={'/cart'} component={Cart} />
                <Route exact path={'/shipping'} component={Shipping} />
                <Route exact path={'/thankyou'} component={ThankYou} />
                <Route exact path={'/favorite'} component={Favorite} />


            </Switch>
        </>
    );
};
export default Router;
