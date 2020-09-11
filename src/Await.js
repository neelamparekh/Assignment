import React, { Component } from "react";

class Await extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: [],
            data2: [],
        };
    }
    fetching = (url) => {
        let results = fetch(url)
            .then((response) => response.json())
            .then((data) => data)
            .catch((error) => error);

        return results;
    };
    //use async whenever you are using function & await at the fetching url
    getData = async () => {
        const data1 = await this.fetching(
            `http://api.github.com/users/jayeshkattar`
        );
        console.log(data1);

        const data2 = await this.fetching(
            `http://api.github.com/users/neelamparekh`
        );
        console.log(data2);

        // const data2 = await this.fetching("weather");
        // console.log(data2);

        if (data1.followers > data2.followers) {
            console.log("Data1");
        }
        else {
            console.log("Data2");
        }
    };

    render() {
        return (
            <div>
                <h5>{JSON.stringify(this.state.data1)}</h5>
                <h5>{JSON.stringify(this.state.data2)}</h5>

                <button onClick={this.getData}> Get Something</button>
            </div>
        )
    }
}
export default Await;