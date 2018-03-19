import * as React from 'react';
import './App.css';
import { Link } from './model';
import { LinkList } from './LinkList';
import 'bootstrap/dist/css/bootstrap.css'
import { LinkForm } from './LinkForm';

const logo = require('./logo.svg');

interface AppState {
  links: Link[];
  filteredLinks: Link[];
  isLinkFormOpen: boolean;
  query: string;
}
class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    let linksJSON = localStorage.getItem('links');
    let links: Link[] = [];
    if (linksJSON !== null) {
      links = JSON.parse(linksJSON);
    }

    this.state = {
      isLinkFormOpen: false,
      links: links,
      filteredLinks: [],
      query: ''
    };
  }

  addLinkClicked = () => {
    this.setState({
      isLinkFormOpen: true
    });
  }

  linkFormCloseRequested = () => {
    this.setState({
      isLinkFormOpen: false
    })
  }
  LinkFormSubmitted = (link: Link) => {
    let links = this.state.links.slice();
    links.push(link);

    localStorage.setItem('links,', JSON.stringify(links));
    
    this.setState({
      isLinkFormOpen: false,
      links: links
    })
  }

  onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let query = e.target.value;
    this.setState({
      query: query,
      filteredLinks: this.state.links.filter(l => (
        l.title.indexOf(query) > -1 || l.url.indexOf(query) > -1
      ))
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <input type="text" value={this.state.query} onChange={this.onQueryChange} />
          <div className="col-2">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <button onClick={this.addLinkClicked}>Add Link</button>
          </div>
          <div className="col">
            <LinkList links={this.state.query !== '' ? this.state.filteredLinks : this.state.links} />
          </div>
        </div>
        <LinkForm
          isOpen={this.state.isLinkFormOpen}
          onRequestClose={this.linkFormCloseRequested}
          onSubmit={this.LinkFormSubmitted}
        />
      </div>
    );
  }
}

export default App;
