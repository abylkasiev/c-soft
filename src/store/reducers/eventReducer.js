import * as actionTypes from '../actions/actionTypes'

const initialState = {
    events: {
        name: '',
        startTime: '',
        endTime: ''
    }
}

const eventReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_EVENT:
            return {
                ...state,
                events: {
                    ...state.events,
                    [action.eventName]: state.events[action.eventName] + 1
                }
            }

        case actionTypes.REMOVE_EVENT:
            return {
                ...state,
                events: {
                    ...state.events,
                    [action.eventName]: state.events[action.eventName] - 1
                }
            }

        default: return state;
    }
};

export default eventReducer;