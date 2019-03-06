import types from '../actions/actionTypes'

const initialState = {
    lists: []
}

const viewReducer = (state = initialState, action) => {
    const { lists } = state

    switch(action.type) {
        case types.INIT:
            return {
                lists: action.data
            };
        case types.UPDATE:
            return {
                lists: [
                    ...lists.slice(0, action.index),
                    action.data,
                    ...lists.slice(action.index, lists.length)
                ]
            };
        case types.REMOVE:
            return {
                lists: [
                    ...lists.slice(0, action.from),
                    ...lists.slice(action.to, lists.length)
                ]
            };
        default:
            return state;
    }
}

export default viewReducer