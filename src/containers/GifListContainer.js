import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


export default class GifListContainer extends Component{
    constructor(){
        super();
        this.state ={
            gif: [],
            searchVal: ''
        }
    }

    handleSearch = () => {
        if (this.state.searchVal){
            let search = this.state.searchVal
            search.replace(' ', '+')
            fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=FFXEnaAm26WTUwTsArmvy5gRr7GG0YAe&rating=g`)
            .then(resp => resp.json())
            .then(data => {
                const gifs = data.data.splice(0, 3)
                this.setState({
                    gif: gifs
                })
            })
        }
    }

    handleChange = event => {
        this.setState({
            searchVal: event.target.value
        })
    }

    render(){
        return(
            <div>
                <GifSearch searchVal={this.state.searchVal} handleChange={this.handleChange} handleSearch={this.handleSearch}/>
                <GifList gifs={this.state.gif}/>
            </div>
        )
    }

    componentDidMount(){
        this.handleSearch()
    }
}