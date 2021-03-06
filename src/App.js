import React, { Component } from 'react'
import Table from './Table'
import Header from './Header'
import Form from './Form'

class App extends Component {
    state = {
        characters: [
            // { name: 'Charlie', job: 'Janitor', age: 30, handle: '@me' },
            // { name: 'Mac', job: 'Bouncer', age: 30, handle: '@me' },
            // { name: 'Dee', job: 'Aspiring actress', age: 30, handle: '@me' },
            // { name: 'Dennis', job: 'Bartender', age: 30, handle: '@me' }
        ]
    };

    handleSubmit = character => {
        console.log(character)
        this.setState({ characters: [...this.state.characters, character]})
    }

    render() {
        // const characters = [
        //     { name: 'Charlie', job: 'Janitor', age: 30, handle: '@me' },
        //     { name: 'Mac', job: 'Bouncer', age: 30, handle: '@me' },
        //     { name: 'Dee', job: 'Aspiring actress', age: 30, handle: '@me' },
        //     { name: 'Dennis', job: 'Bartender', age: 30, handle: '@me' }
        // ]
        const { characters } = this.state;
        return (
            <div className="container">
                <div className="row header">
                    <div className="col-md-12">
                        <Header />
                    </div>
                </div>
                <div className="row body">
                    <div className="col-md-4">
                        <Form handleSubmit={this.handleSubmit}/>
                    </div>
                    <div className="col-md-8">
                        <Table characterData={characters} removeCharacter={this.removeCharacter} />
                    </div>
                </div>
                <div className="row footer"></div>
               
            </div>
        )
    }

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        })
    }
}

export default App