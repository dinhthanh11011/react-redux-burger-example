const burgerState = {
    burger:{
        salad:0,
        cheese:0,
        beef:0
    },
    menu:{
        salad:10,
        cheese:15,
        beef:20
    },

    total:0
}

export const burgerReducer = (state = burgerState, action)=>{
    let nState = {...state}
    switch(action.type){
        case "INCREASE":{
            nState.burger[action.payload] ++
            nState.total += nState.menu[action.payload]
            break
        }
        case "DECREASE":{
            if( nState.burger[action.payload]>0){
                nState.burger[action.payload] --
                nState.total -= nState.menu[action.payload]
            }
            break
        }
        default:{

        }
    }
    state = nState
    return state
}