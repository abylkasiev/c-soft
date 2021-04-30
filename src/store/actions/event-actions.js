import * as actionTypes from './actionTypes'; 

export const addEvent = (eventName) => {
    return {type: actionTypes.ADD_EVENT, eventName};
};

export const removeEvent = (eventName) => {
    return {type: actionTypes.REMOVE_EVENT, eventName};
};