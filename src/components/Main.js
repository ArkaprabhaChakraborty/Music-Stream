import React from 'react';
import Categories from '../components/Categories';
import {Switch, Route} from 'react-router-dom';

const Main = ()=>{
    return(
        <div className="main">
            <div className="uppernav">
                dummy text 
            </div>
            <Switch>
                <Route path="/" exact component={Categories}></Route>
                <Route path="/search">Search</Route>
                <Route path="/your-library">Your Library</Route>
            </Switch>
        </div>
    )
}
export default Main