import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FolderPage from './FolderPage';
import MainPage from './MainPage';
import NotePage from './NotePage';
import './App.css';
import StateContext from './StateContext';
import ApiCalls from './ApiCalls'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      folders: [],
      notes: [],
      filter: ''
    }
  }

    componentDidMount() {
      
      ApiCalls('folders')
        .then((data) =>  this.setState ({folders: data}))
        .catch((error) => console.log(error.message));

      ApiCalls('notes')
        .then((data) => this.setState ({notes: data}))
        .catch((error) => console.log(error.message));
      
      this.setState ({filter: ''})
      
    }
  

  render() {
    return (
      <StateContext.Provider value={{
        folders: this.state.folders,
        notes: this.state.notes
      }}>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/folder/:folderId' component={FolderPage} />
          <Route path='/note/:noteId' component={NotePage} />
        </Switch>
      </StateContext.Provider>
    );
  }
}
