import React, { Component } from 'react';
import queryString from 'query-string'
import petActions from '../../actions/PetActions'
import PetStore from '../../stores/PetStore'

class ListPetsPage extends Component {
    constructor(props){
        super(props)

        const query = queryString.parse(this.props.location.search)
        const page = parseInt(query.page, 10) || 1

        this.state = {
            pets: [],
            page: page
        }
        this.handlePetsFetching = this.handlePetsFetching.bind(this)
        PetStore.on(
            PetStore.eventTypes.PETS_FETCHED,
            this.handlePetsFetching
        )
    }

    componentDidMount(){
        petActions.all(this.state.page)
    }
    componentWillUnmount(){
        PetStore.removeListener(
            PetStore.eventTypes.PETS_FETCHED,
            this.handlePetsFetching
        )
    }
    handlePetsFetching(data){
        this.setState({
            pets: data
        })
    }
    goToPrevPage(){
        if (this.state.pets.length === 0){
            return
        }
        let page = this.state.page
        page--
        this.setState({
            page
        })

        this.props.history.push(`/?page=${page}`)
        petActions.all(page)
    }
    
    goToNextPage(){
        if (this.state.pets.length === 0){
            return
        }

        let page = this.state.page
        page++
        this.setState({
            page
        })

        this.props.history.push(`/?page=${page}`)
        petActions.all(page)
    }
    render() {
        let pets = 'No pets available'
        if(this.state.pets.length > 0){
        pets = this.state.pets.map(pet =>(
            <div key={pet.id}>{pet.id} - {pet.name}</div>
            
        ))
    }
        return (
            <div>
                <h1>ALL Pets</h1>
                {pets}
                <div>
                    <button onClick={this.goToPrevPage.bind(this)}>Prev</button>
                    <button onClick={this.goToNextPage.bind(this)}>Next</button>
                </div>
            </div>
            
        )
    }
}

export default ListPetsPage
