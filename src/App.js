import React from 'react';
import {HashRouter, Router, Route} from "react-router-dom";
import Home from "./routes/Home";
import List from "./routes/List";
import About from "./routes/About";
import Detail from "./routes/Detail";

function App(){

  return (
    <HashRouter>   
      <Route path="/" exact={true} component={Home}/>
      <Route path="/list" component={List}/>
      <Route path="/about" component={About}/>
      <Route path="/movie/:id" component={Detail}/>
    </HashRouter>
  );
}

export default App;
