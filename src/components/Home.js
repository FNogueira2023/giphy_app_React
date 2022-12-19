import React, { Component } from "react";
import Gif from "./Gif";

class Home extends Component {
    constructor() {
        super()
        this.state = {
            iconList: []
        }
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=igjoEeQ9wmM6UOeVcrc5TvzP9wb5Yrs9')
            .then(data => data.json())
            .then(icons => {
                this.setState({ iconList: icons.data });
                console.log(icons.data)
            })
            .catch(error => console.log(error))
    }

    componentDidUpdate() {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=igjoEeQ9wmM6UOeVcrc5TvzP9wb5Yrs9')
            .then(data => data.json())
            .then(icons => {
                this.setState({ iconList: icons.data });
                console.log(icons.data)
            })
            .catch(error => console.log(error))

    }

    render() {
        return (
            <>
                {this.state.iconList.map((icon, i) => <Gif {...icon} key={i} />)}
                console.log(icon)
            </>
        )
    }





}

export default Home;