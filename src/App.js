import React, { Component } from "react";
import CardList from "./cardList";
// import {Robots} from "./9.1 robots";
import Searchbar from "./Searchbar";
import Scroll from "./Scroll";
import "./App.css";


class App extends Component{
    constructor(){
        super()
        this.state = {
            Robots:[],
            Searchfield: ""
        }
    }
    onSearchChange = (event) => {
        this.setState({Searchfield : event.target.value});
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => {this.setState({Robots: users})});
    }
    render(){
        const filterRobo = this.state.Robots.filter(Robots => {
            return Robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
        })
        
            if(this.state.Robots.length === 0){
                return <h1 className="tc">Loading.....</h1>
            }else{
                return (<div className="tc">
                <h1 className="f1">Robot Friends</h1>
                <Searchbar searchChange={this.onSearchChange} />
                <Scroll>
                  <CardList Robots={filterRobo} />
                </Scroll>
            </div>);
            }
            
        
    }
}

export default App;