export default (state = 4, action) => {


    switch (action.type) {
        case 'select_library':
            console.log('select_library', action.payload)
            
            return action.payload;

        default:
            return state;
    }
}