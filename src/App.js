import React,{ Component } from 'react';
import CardList from './CardList';
import Search from './Search';
import Scroll from './Scroll';

class AppComp extends Component {
    
    constructor() {
        super()
        this.state = {
            robots : [],
            searchField : ""
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots : users}));
        
    }

    onSearchChange = (event) => {
        this.setState({searchField : event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(stuff => {
            return stuff.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        }) 
        return(
            <div>
                <div className='header'>
                    <h1>ROBOSERVICE</h1>
                    <p>The only service you need</p>
                    <Search searchChange = {this.onSearchChange} />
                </div>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )    
    }
}


export default AppComp;