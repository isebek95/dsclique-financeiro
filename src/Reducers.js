
// VAI SERVIR PARA JUNTARMOS TODOS OS REDUX QUE FORMOS CRIANDO
import{combineReducers} from 'redux';
import userReducer from './reducers/userReducer';

//EXPORTANDO OS REDUCERS
export default combineReducers({
    user:userReducer
});