import React, { Component } from "react";
import Robo from "./robo";


class CardList extends Component {
    render() {
        const { Robots } = this.props;
        const cardComponent = Robots.map((user,i) => {
            return <Robo key={i} id={user.id} name={user.name} username={user.username} email={user.email} />
        })
        return (
            <div>{cardComponent}</div>
            
        )
    }
}

export default CardList;