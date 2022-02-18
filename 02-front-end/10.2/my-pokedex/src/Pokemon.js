import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css'

class Pokemon extends Component {
    render() {
    const {name, type, averageWeight: {value, measurementUnit}, image} = this.props.data;
        return ( 
    <div className='pokedex-infos'>
        <div className='pokedex-text'>
            <p>{name}</p>
            <p>{type}</p>
            <p>Average Weigth: {value} {measurementUnit}</p>  
        </div>
        <img src={image} alt={name}></img>
    </div>)
    }
}

Pokemon.prototypes = {
    // id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
    image: PropTypes.string,
}

// Pokemon.propTypes = {
//     name: PropTypes.string,
//     type: PropTypes.string,
//     averageWeight: {
//       value: PropTypes.number,
//       measurementUnit: PropTypes.string
//       },
//     image: PropTypes.string,
// }

export default Pokemon;