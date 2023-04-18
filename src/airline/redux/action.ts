export function dispatchGetAirlineData(name:any){
    return{
        type:"GET_AIRLINE_DATA",
        payload:name
    }
}

export function dispatchGetAirlineSearch(info:any){
    return{
        type:"GET_AIRLINE_DATA_SEARCH",
        payload:info
    }
}

export function dispatchGetAirlineSearchReset(){
    return{
        type:"GET_AIRLINE_DATA_SEARCH_RESET",
        
    }
}

export function dispatchGetAirlineDataLoading(){
    return{
        type:"GET_AIRLINE_DATA_LODING",
       
    }
}

export function dispatchGetAirlineDataError(){
    return{
        type:"GET_AIRLINE_DATA_ERROR",
       
    }
}