import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import FolderList from './FolderList';
import NoteList from './NoteList';
import FolderPage from './FolderPage';
import MainPage from './MainPage';
import NotePage from './NotePage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folders: this.props.Store.folders,
      notes: this.props.Store.notes,
      filter: ''
    }
  }

  

  render() {
    return (
      <>        
        <Switch>
          <Route path='/' exact render={(routeProps) => <MainPage 
            folderList={this.state.folders}
            noteList={this.state.notes}></MainPage>} />
          <Route path='/folder/:folderId' render={(routeProps) => <FolderPage 
          folderList={this.state.folders}
          noteList={this.state.notes}
          routeProps={routeProps} ></FolderPage>} />
          <Route path='/note/:noteId' render={(routeProps) => <NotePage 
          noteList={this.state.notes}
          folderList={this.state.folders}
          routeProps={routeProps} ></NotePage>} />
        </Switch>

        {/* <div className='list-box'>
          <FolderList folderList={this.state.folders} />
          <NoteList noteList={this.state.notes} />
        </div> */}
      </>
    );
  }
}

export default App;
