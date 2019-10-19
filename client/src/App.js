import React, {Component} from 'react'
import './App.css';
import axios from 'axios'
import 'materialize-css/dist/css/materialize.min.css'

import HeaderBlogM from './materials/HeaderBlogM';
import SideBarM from './materials/SideBarM';
import ContentBlogM from './materials/ContentBlogM';
import FooterBlobM from './materials/FooterBlogM';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resultado: []
    }
    
    axios
      .get('/postagens')
      .then(resultado => {
        console.log(resultado)
        this.setState({
          resultado: resultado.data[0]
        })
      })

      axios
      .get('/comentarios/teste')
      .then(resultado => {
        console.log(resultado)
      })
  }
  render() {
    return (
      <div className="grid">
        <HeaderBlogM />
        <SideBarM />
        <ContentBlogM posts={this.state.resultado}/>
        <FooterBlobM />
      </div>
    );
    }
}

export default App;
