import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../../Components/Home'
import UpdatePosts from '../../Components/UpdatePosts'
import CreatePosts from '../../Components/CreatePosts'



export const Routes = ({ posts, comments }) => (
    <Switch>
        <Route
            exact
            path="/"
            render={props => <Home {...props} posts={posts} comments={comments}/>}
        />
        <Route
            exact
            path="/createposts"
            component={CreatePosts}
        />
        <Route
            exact
            path="/posts/:id/edit"
            component={UpdatePosts}
        />
    </Switch>
)