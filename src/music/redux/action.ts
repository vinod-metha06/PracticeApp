export function dispatchGetMusicData(name:any){
    return{
        type:"GET_MUSIC_DATA",
        payload:name
    }
}

export function dispatchGetMusicDataInfo(info:any){
    return{
        type:"GET_MUSIC_DATA_INFO",
        payload:info
    }
}

export function dispatchGetMusicDataLoading(){
    return{
        type:"GET_MUSIC_DATA_LODING",
       
    }
}

export function dispatchGetMusicDataError(){
    return{
        type:"GET_MUSIC_DATA_ERROR",
       
    }
}