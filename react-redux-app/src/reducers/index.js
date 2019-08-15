import React from 'react';
import { FETCH_FILMS_START, FETCH_FILMS_SUCCESS, FETCH_FILMS_FAILURE } from '../actions/index'; 

const initialState = {
    films: [],
    isLoading: false,
    error: '',
}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FILMS_START:
            return {
                ...state,
                isLoading: true, 
                error: ''
            };
        case FETCH_FILMS_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                films: action.payload,
            }
    }
}