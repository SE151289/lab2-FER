import React, { Component } from 'react'
import Film from './Film';
import { films } from './ListOfFilms';
export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            film: films
        }
    }
    render() {
        return (
            <div>
                <Film films={this.state.film}></Film>
            </div>
        )
    }
}