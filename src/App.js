import React, { Component } from 'react';
import Header from './Header';
import FolderList from './FolderList';
import NoteList from './NoteList';
import './App.css';

class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    folders: this.props.Store.folders,
    notes: this.props.Store.notes
  }}

  render(){
    return (
      <>
        <Header />
        <FolderList folderList={this.state.folders}/>
        <NoteList noteList={this.state.notes} />
      </>
    );
  }
}

export default App;
