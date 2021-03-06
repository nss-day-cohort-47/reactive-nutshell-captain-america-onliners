// Component to hold the routes for the app
// Authors: Carter Culkin, Cody Jones, Preston Shotts, Brandon Vinson

import React, { useState } from "react"
import { Route} from "react-router-dom"
import {EventList} from "./event/EventList";
import {EventForm} from './event/EventForm';
import {EventEditForm} from "./event/EventEditForm";
import { TaskList } from "./task/TaskList"
import { TaskForm } from "./task/TaskForm";
import { TaskEditForm } from "./task/TaskEditForm"
import { ArticleList } from "./articles/ArticleList";
import { ArticleForm } from "./articles/ArticleForm";
import { ArticleEditForm } from "./articles/ArticleEditForm";
import { FriendList } from "./friends/FriendList";
import {AddFriendCard} from './friends/AddFriendCard'
import { AddFriendList } from "./friends/AddFriendList";
import { MessageList } from "./messages/MessageList";
import { MessageEditForm } from "./messages/MessageEditForm";

export const ApplicationViews = (props) => {

  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("nutshell_user") !== null)
  const setAuthUser = (user) => {
    sessionStorage.setItem("nutshell_user", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
  }

  const setUser = props.setUser;
  const hasUser = true;
  return (
    <>
      <Route exact path="/">
        {/* Render the component for news articles */}
        <ArticleList />
      </Route>
      <Route path="/:articleId(\d+)/edit">
        {/* Render the component for editing news articles */}
        <ArticleEditForm />
      </Route>
      <Route path="/create">
        {/* Render the component for creating a new article */}
        <ArticleForm />
      </Route>
      <Route exact path="/friends">
        <FriendList />
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/friends/add">
        <AddFriendList />
        {/* Render the component for list of friends */}
      </Route>
      <Route exact path="/messages">
        {/* Render the component for the messages */}
        <MessageList />
      </Route>
      <Route path="/messages/:messageId(\d+)/edit">
        <MessageEditForm />
      </Route>
      <Route exact path="/tasks">
        <TaskList />
      </Route>
      <Route path="/tasks/create">
        <TaskForm />
      </Route>
      <Route path="/tasks/:taskId(\d+)/edit">
        <TaskEditForm />
      </Route>
      {/* Events are down here*/}
      <Route
        exact
        path="/events"
        render={props => {
          return <EventList {...props} />
        }} />
      <Route
        path="/events/new"
        render={(props) => {
          return <EventForm {...props} />
        }} />
      <Route exact
        path="/events/:eventId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <EventEditForm {...props} />
          }}} />
    </>
  )
}