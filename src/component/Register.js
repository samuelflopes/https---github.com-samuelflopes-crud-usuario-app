import React, {useState, useEffect} from 'react'
import FormsRegister from './FormsRegister'
import fireDb from '../firebase'
//import { useEffect, useState } from 'react'


const Register = () => {

    let [dadosUsuarios, setDadosUsuarios] = useState({})
//Rederização de cadastro


//function button
    let[idAtual, setIdAtual] = useState('')


    useEffect( () => {
        fireDb.child('usuario').on('value', dbPhoto =>{
            if(dbPhoto.val() != null){
                setDadosUsuarios({
                    ...dbPhoto.val()
                })
            }
        })
    }, [])

// Função de adicionar e editar 
    const addEdit = obj => {
        
        console.log(obj)
        fireDb.child('usuario').push(
            obj,
            error => {
                if(error){
                    console.log(error)
                }
            }
        )
    }

    return (
        <div>
            <div className = "jumbotron jumbotron-fluid">
                <div className = "container">
                    <h1 className = "display-4">Cadastro de usuários</h1>
                    <p className = "lead">This is horizontal space of its parent.</p>
                </div>
            </div>
                <div className = "row">
                    <div className = "col-md-5">
                        <FormsRegister addEdit={addEdit} />
                    </div>
                    <div className="col-md-7">
                        <table className="table table-boderless tables-stripped">
                            <thead className="thead-light">
                                <td>Nome Completo</td>
                                <td>Telefone</td>
                                <td>CPF</td>
                                <td>CEP</td>
                                <td>Logradouro</td>
                                <td>Cidade</td>
                                <td>Estado</td>
                                <td>Ações</td>
                            </thead>
                            
                            <tbody>
                                { //Lista de renderização na tabela
                                    Object.keys(dadosUsuarios).map(id => {
                                        return <tr key={id}>
                                            <td>{dadosUsuarios[id].nomeCompleto}</td>
                                            <td>{dadosUsuarios[id].telefone}</td>
                                            <td>{dadosUsuarios[id].cpf}</td>
                                            <td>{dadosUsuarios[id].cep}</td>
                                            <td>{dadosUsuarios[id].logradouro}</td>
                                            <td>{dadosUsuarios[id].cidade}</td>
                                            <td>{dadosUsuarios[id].estado}</td>

                                            <td>
                                                <a className='btn btn-primary' onClick={() => {setIdAtual(id)}}>
                                                    <i className='fas fa-pencil-alt'></i>
                                                </a>

                                                <a className='btn btn-danger'>
                                                    <i className='fas fa-trash-alt'></i>
                                                </a>
                                                
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>    
            </div>
        </div>
    )
}

export default Register