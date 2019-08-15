import React from 'react';
import Film from './Film'; 
import Loader from 'react-loader-spinner'; 
import { connect } from 'react-redux'; 
import { getData } from '../actions/index'; 


function FilmList(props) {
 
    return (
        <div>
            <h2>Welcome to the Unofficial Studio Ghibli film list!</h2>
            <button onClick={props.getData}>
                {props.isLoading ? (
                    <Loader type="TailSpin" color="#00BFFF" height="15" width="100" />
                ) : (
                    'Get List of Films'
                )}
            </button>
            {props.films && props.films.map(film => <Film key={film.id} film={film} />)}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        isLoading: state.isLoading,
        films: state.films
    }
}


export default connect(mapStateToProps, 
    { getData })(FilmList); 