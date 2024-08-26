let initialState = {
    contactList : [],
    searchword : "",
}

function reducer(state=initialState, action){
    const {type, payload} = action
    switch(type){
        case "ADD_CONTACT":
            return{
                ...state,
                contactList:[
                    ...state.contactList,
                    {
                        name:payload.name,
                        phoneNumber:payload.phoneNumber
                    },
                ],
            }
        case "SEARCH_USERNAME":
            return {
                ...state,
                searchword : payload.searchword
            }
            default: return {...state}
    }
}

export default reducer;