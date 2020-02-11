import React, { Component } from 'react'

export default class GifSearch extends Component{

    handleSubmit = event =>{
        event.preventDefault()
        this.props.handleSearch()
        
    }

    render(){
        return(
           <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.props.searchVal} onChange={this.props.handleChange}/>
                <button>Search</button>
           </form> 
        )
    }
}