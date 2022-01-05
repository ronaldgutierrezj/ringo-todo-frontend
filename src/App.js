
import AllPost from "./pages/AllPost";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";

import{useState, useEffect} from "react";



import {Route, Switch} from "react-router-dom";


function App(props) {

// Style Objects

const h1 = {
  textAlign: "center",
  margin: "10px"
}

// State & other Variables

// api url
const url ="https://rgj-ringo-todo-backend.herokuapp.com/todos/"

// State to hold list of todos
const [posts,setPosts] = useState ([]);

// Functions


// Useeffects



// Returned JSX

  return (
    <div className="App">
      <h1 style={h1}>My Todo List</h1>
      <Switch>
        {/* Index Page */}
        <Route
          exact
          path = "/"
          render = {(rp)=>{
            return <AllPost {...rp}
                    posts={posts}/>
          }}
        />
        {/* Show Page */}
        <Route
          path = "/post/:id"
          render = {(rp) => {
            return <SinglePost {...rp}
                  posts={posts}
                  />
          }}
        />

        {/* New and Edit Pages */}
        <Route 
          path = "/new"
          render = {(rp) => {
            return <Form {...rp}
                  />
          }}
        />

        <Route 
          path = "/edit"
          render = {(rp) => {
            return <Form {...rp}
                  />
          }}
        />

      </Switch> 
    </div>
  );
}

export default App;
