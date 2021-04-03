const initialState={
    email:''
};


export default (state=initialState,action)=>{
    if(action.type==='SET_EMAIL'){
        return {...state, email:action.payload.email}; //COPIA O STATE MODIFICANDO APENAS A PROPRIEDADE E-MAIL.
    }    
    return state;

};


