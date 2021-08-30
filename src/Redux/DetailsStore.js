import produce from 'immer'


const initialState = {
    details: {
        name: 'DFGHJ',
        age: 0,
        liket: ''
    }
};

export default produce((state, action) => {
    debugger
    switch (action.type) {

        case 'SET_NAME':
            debugger;
            state.details.name = action.payload;
            break;

        default:
            return state;
    }
}, initialState);