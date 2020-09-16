const initState = {
    sensorLoading:false,
    sensors:[]
};

const tankReducer = (state = initState, action) => {
    //console.log(action.payload);
    switch(action.type){
        case 'SENSORS_LOADING':
            return {
              ...state,
              sensorLoading: true
            }
        case 'GET_SENSORS':
            return {
                ...state,
                sensorLoading: false,
                sensors:action.payload
            } 
        default: 
            return state;   
    }
}
export default tankReducer; 