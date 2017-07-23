import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura',
            done: true
        },{
            _id: 2,
            description: 'Termina curso',
            done: false
        },{
            _id: 3,
            description: 'Consulta medica',
            done: false
        }]

    })
})

export default rootReducer