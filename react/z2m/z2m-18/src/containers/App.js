import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                return res.json();
            })
            .then(users => {
                this.setState({ robots: users });
            })
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value })
    }
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return robots.length === 0 ?
            <h1>Loading</h1> :
            (
                <div>
                    <h1>Robot Family</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );

    }
}


export default App;