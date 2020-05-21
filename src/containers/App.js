import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots'; 
import SearchBox from '../components/SearchBox';
import './App.css';
import { robots } from '../robots';
import Scroll from '../components/Scroll';


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: '' //empty string
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        /*const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })*///the value of this is not referring to the app. Because of the event in the input (searchB),
        //the value of this is all the input, and the input doesnt have the state.robots.
        
        //console.log(event.target.value); //to know the difference when you type. 
        //we have the searchbox onchange to see an event that calls this function, the parent
    }//everythime a change happen we get an event

    render () {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        })
        if (robots.lenght === 0) {//or !robots.lenght which would be false..
            return <h1>Loading..</h1>
        } else{
        return(
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filterRobots} />
                </Scroll>
            </div>
            );
        }
    }
} 
//search box must communicate with cardlist to search. In the one flow diagram, 
//one need to send information to the parent to tell the other what to do.

export default App;