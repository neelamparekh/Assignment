import React, { Component } from 'react';

class Competition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName1: " ",
            userName2: " ",
            item: [],
            item2: [],
            //winner: " ",
        }
    }

    getUserName1 = (e) => {
        this.setState({
            userName1: e.target.value,
        });
    };

    getUserName2 = (e) => {
        this.setState({
            userName2: e.target.value,
        });
    };

    getDetails = () => {

        fetch(`https://api.github.com/users/${this.state.userName1}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    item: data,
                })
            });

        fetch(`https://api.github.com/users/${this.state.userName2}`)
            .then((resp) => resp.json())
            .then((dat) => {
                this.setState({
                    item2: dat,
                })
            });
    }

    getWinner = (event) => {
        this.setState({
            winner: event.target.value
        });

        let win = " ";

        if (this.state.item.followers >= this.state.item2.followers) { // .length
            win = <h1> Winner is {this.state.userName1} </h1>
        } else if (this.state.item.followers <= this.state.item2.followers) {
            win = <h1> Winner is {this.state.userName2} </h1>
        } else {
            win = <h2> Its a TIE</h2>
        }

    }
    render() {

        return (
            <div>

                <input type="text" id="userName1" placeholder="Enter UserName 1 " onChange={this.getUserName1} />
                <input type="text" id=" userName2" placeholder="Enter UserName 2 " onChange={this.getUserName2} /> <br />
                <button onClick={this.getDetails}> DISPLAY DATA </button>
                <button onClick={this.getWinner}> Show Result </button>

                <table>
                    <tbody>
                        <tr>
                            <th>            </th>
                            <th>   UserName 1</th>
                            <th>   UserName 2</th>
                        </tr>

                        <tr> Followers :
                        <td>  {this.state.item.followers}</td>
                            <td> {this.state.item2.followers}</td>


                        </tr>

                        <tr> Following :
                        <td>  {this.state.item.following}</td>
                            <td> {this.state.item2.following}</td>
                        </tr>

                        <tr> Public Repository :
                        <td>  {this.state.item.public_repos}</td>
                            <td> {this.state.item2.public_repos}</td>
                        </tr>
                        <tr>Winner </tr>
                        <td>{this.state.win}</td>
                    </tbody>
                </table>
            </div >

        )
    }
}
export default Competition;