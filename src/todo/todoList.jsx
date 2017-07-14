import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || [] 
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleHandleMarkAsDone(todo)}/>
                    <IconButton style='danger' icon='undo'
                        onClick={() => props.handleHandleMarkAsPending(todo)}/>
                    <IconButton style='danger' icon='check'
                        onClick={() => props.handleRemove(todo)}/></td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <th>Descrição</th>
                <th>Ações</th>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}