const initState = {
    sensorLoading:false,
    sensors:[]
};

const tankReducer = (state = initState, action) => {
    //console.log(action.payload);
    switch(action.type){
        case 'SENSOR_LOADING':
            return {
              ...state,
              sensorLoading: true
            } 
        case 'GET_SENSOR':
            return {
                ...state,
                sensorLoading: false,
                sensors:action.payload
            }
        case 'UPDATE_FILLLEVEL':

            return {
                ...state,
                sensors:action.payload.fillLevel
            }
        
        default: 
            return state;   
    }
}
export default tankReducer; 