import React, { Component } from "react";


class Searchbar extends Component{
    render(){
        return(
            <input
            style={{marginBottom: "5px"}}
            className="pa3 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="Serach Robots"
            onChange={this.props.searchChange}
            ></input>
        )
    }
}

export default Searchbar;