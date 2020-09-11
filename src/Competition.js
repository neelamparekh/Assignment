import React, { Component } from 'react';

class Competition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName1: " ",
            userName2: " ",
            user1Data: [],
            user2Data: [],
            winner: " ",
            user1Score: 0,
            user2Score: 0,
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

    // followers, following, public_repo
    getDetails = async (url) => {

        let results = fetch(url)
            .then((response) => response.json())
            .then(data => data)
            .catch((error) => error);

        return results;
    }

    // Subscriptions & Received Events

    getData = (url) => {
        let result = fetch(url)
            .then((resp) => resp.json)
            .then(dat => dat)
            .catch((err) => err);

        return result;

    }

    getWinner = async () => {

        // debugger; // to check error

        let user1Data = await this.getDetails(
            `https://api.github.com/users/${this.state.userName1}`
        );
        this.setState({ user1Data: user1Data });

        let user2Data = await this.getDetails(
            `https://api.github.com/users/${this.state.userName2}`)
        this.setState({ user2Data: user2Data });

        let data1 = await this.getData(
            `https://api.github.com/users/${this.state.userName1}/subscriptions`)

        this.setState({ data1: data1 });

        let data2 = await this.getData(
            `https://api.github.com/users/${this.state.userName2}/subscriptions`)

        this.setState({ data2: data2 });

        let eventData1 = await this.getData(
            `https://api.github.com/users/${this.state.userName1}/received_events`)
        this.setState({ eventData1: eventData1 });

        let eventData2 = await this.getData(
            `https://api.github.com/users/${this.state.userName2}/received_events`)
        this.setState({ eventData2: eventData2 });

        //data.length = count

        // OPTIMIZE IF ELSE conditions 

        // if (user1Data.followers > user2Data.followers) {
        //     let score = this.state.user1Score + 1;
        //     this.setState({ user1Score: score });

        // } else {
        //     let score = this.state.user2Score + 1;
        //     this.setState({ user2Score: score });
        // }

        // if (user1Data.following > user2Data.following) {
        //     let score = this.state.user1Score + 1;
        //     this.setState({ user1Score: score });
        // } else {
        //     let score = this.state.user2Score + 1;
        //     this.setState({ user2Score: score });
        // }

        // if (user1Data.public_repos > user2Data.public_repos) {
        //     let score = this.state.user1Score + 1;
        //     this.setState({ user1Score: score });
        // } else {
        //     let score = this.state.user2Score + 1;
        //     this.setState({ user2Score: score });
        // }

        // if (data1.length > data2.length) {
        //     let score = this.state.user1Score + 1;
        //     this.setState({ user1Score: score });
        // } else {
        //     let score = this.state.user2Score + 1;
        //     this.setState({ user2Score: score });
        // }

        // if (eventData1.length > eventData2.length) {
        //     let score = this.state.user1Score + 1;
        //     this.setState({ user1Score: score });
        // } else {
        //     let score = this.state.user2Score + 1;
        //     this.setState({ user2Score: score });
        // }

        // if (this.state.user1Score > this.state.user2Score) {
        //     this.setState({
        //         winner: `${this.state.userName1} is the Winner!!`
        //     });
        // } else {
        //     this.setState({
        //         winner: `${this.state.userName2} is the Winner!!`
        //     });
        // }


        let score = this.getWinner(user1Data.followers > user2Data.followers ? this.state.user1Score + 1 : this.state.user2Score + 1);

        let score1 = this.getWinner(user1Data.following > user2Data.following ? this.state.user1Score + 1 : this.state.user2Score + 1);

        let score2 = this.getWinner(user1Data.public_repos > user2Data.public_repos ? this.state.user1Score + 1 : this.state.user2Score + 1);

        let score3 = this.getWinner(data1.length > data2.length ? this.state.user1Score + 1 : this.state.user2Score + 1);

        let score4 = this.getWinner(eventData1.length > eventData2.length ? this.state.user1Score + 1 : this.state.user2Score + 1);

        this.state.user1Score > this.state.user2Score ?
            this.setState({
                winner: `${this.state.userName1} is the Winner`,
            })

            : this.setState({
                winner: `${this.state.userName2} is the Winner`,
            });

    }

    render() {
        return (
            <div>
                <input type="text" id="userName1" placeholder="Enter UserName 1 " onChange={this.getUserName1} />
                <input type="text" id=" userName2" placeholder="Enter UserName 2 " onChange={this.getUserName2} /> <br />
                <button onClick={this.getDetails}> DISPLAY DATA </button>
                <button onClick={this.getWinner}> Declare Winner </button> <br /><br />

                <table>
                    <thead>
                        <tr>
                            {/* code to Display data  */}
                            <th>            </th>
                            <th> {this.state.user1Data.name}</th>
                            <th>  {this.state.user2Data.name}</th>
                        </tr>

                        <tr> Followers :
                        <td>  {this.state.user1Data.followers}</td>
                            <td> {this.state.user2Data.followers}</td>

                        </tr>

                        <tr> Following :
                        <td>  {this.state.user1Data.following}</td>
                            <td> {this.state.user2Data.following}</td>
                        </tr>

                        <tr> Public Repository :
                        <td>  {this.state.user1Data.public_repos}</td>
                            <td> {this.state.user2Data.public_repos}</td>
                        </tr>

                        <tr> Subscriptions :
                        <td>  {this.state.data1}</td>
                            <td> {this.state.data2}</td>
                        </tr>

                        <tr> Received Events  :
                        <td>  {this.state.eventData1}</td>
                            <td> {this.state.eventData2}</td>
                        </tr>
                        <br />
                        <tr>Winner
                        <td>{this.state.winner}</td>
                        </tr>
                    </thead>
                </table>
            </div >

        )
    }
}
export default Competition;