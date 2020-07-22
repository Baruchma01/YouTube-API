import React from 'react';
import SearchPage from './components/search-page/SearchPage';
import ItemPage from './components/item-page/ItemPage';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container" style={{minHeight:'1030px'}}>
      <Router>
      <div>
        <SearchPage />
        <Switch>
          {/* <Route exact path="/" component={SearchPage}/> */}
          <Route exact path="/item-page" component={ItemPage}/>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
