const assign = Object.assign

const initialState = {
    tokens: {
        accTok: '',
        refTok: '',
    }
}

export default function storeReducer(state=initialState, action) {
    switch(action.type) {
        case 'SET_TOKEN':
            return assign({}, state, {
                tokens: action.newState
            })
        case 'REF_TOKEN':
            return assign({}, state, {
                tokens: action.newState
            })
        default:
            return state
    }
}