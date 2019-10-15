import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

import HeaderBlogM from './components/HeaderBlog';
import SideBarM from './materials/SideBarM';
import ContentBlogM from './materials/ContentBlogM';
import FooterBlobM from './materials/FooterBlogM';



class App extends Component {
  constructor(props) {
    super(props)
    
    axios
      .get('/postagens')
      .then(resultado => {
        console.log(resultado)
      })

      axios
      .get('/comentarios/teste')
      .then(resultado => {
        console.log(resultado)
      })
  }
  render() {
    return (
      <div className="App">
        <HeaderBlogM />
        <SideBarM />
        <ContentBlogM />
        <FooterBlobM />
      </div>
    );
    }
}

export default App;
