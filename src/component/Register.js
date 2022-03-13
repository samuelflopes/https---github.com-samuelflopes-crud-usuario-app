import React, {useState, useEffect} from 'react'
import FormsRegister from './FormsRegister'
import fireDb from '../firebase'
//import { useEffect, useState } from 'react'

   

const Register = () => {

    let [dadosUsuarios, setDadosUsuarios] = useState({})
//Rederização de cadastro


//function button
    let [idAtual, setIdAtual] = useState('')

    useEffect( () => {
        fireDb.child('usuario').on('value', dbPhoto =>{
            if(dbPhoto.val() != null){
                setDadosUsuarios({
                    ...dbPhoto.val()
                })
            }else{
                setDadosUsuarios([])
            }
        })
    }, [])

// Função de adicionar e editar 

/*Se os dados estiverem vazios esta função irá adicionar
caso contrario irá para o else que pegará o Id e atualizará*/
    const addEdit = obj => {
        if(idAtual == ''){
            console.log(obj)
            fireDb.child('usuario').push(
                obj,
                error => {
                    if(error){
                        console.log(error)
                    }else{
                        setIdAtual('')
                    }
                }
            )
        } else {
            fireDb.child(`usuario/${idAtual}`).set(
                obj, 
                err => {
                    if(err) {
                        console.log(err)
                    }
                }
            )
        }
    }
// Confirmação se deseja deletar o dado
     const deleteUsuario = key =>{
       if(window.confirm('Deseja realizar a exclusão do cadastro'))
            fireDb.child(`usuario/${key}`).remove(
                err =>{
                    if(err){
                        console.log(err)
                    }
                    
                }
            )
    }

    return (

        <div>
          
            <div className = "jumbotron jumbotron-text-center text-muted p-3 mb-2 bg-dark text-white">
                <div className = "container">
                    <h1 id="titulo" className = "display-4">Bem vindo ao Sistema de Cadastro de Usuários</h1>
                    <p id="texto" className = "lead">Casdastre as informações abaixo</p>
                    <p>
                        <div className='container d-flex flex-reverse p-2'>
                            <a class="btn btn-primary " data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">INFORME</a>
                            <div class="row">
                                <div class="col">
                                    <div class="collapse multi-collapse " id="multiCollapseExample1">
                                        <div id='text'>
                                            <div class="p-2 card card-body">
                                                Seja bem vindo a tela de cadastro de usuários, esta tela apresenta alguns campos necessários para que seja feita o cadastro completo do usuário desejado 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col p-2">
                                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                                        <div class="card card-body"> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
            <div className='row'>
      </div>
                <div className = "row">
                    <div className = "col-md-5 col-lg-6">
                        <FormsRegister {...({addEdit, idAtual, dadosUsuarios})} />
                    </div>
                    <div className="col-md-7 col-lg-3">
                        <table className="table table-boderless tables-stripped">
                            <thead className="thead-light">
                                <td>Nome</td>
                                <td>Telefone</td>
                                <td>CPF</td>
                                <td>CEP</td>
                                <td>Logradouro</td>
                                <td>Cidade</td>
                                <td>Estado</td>
                                <td>
                                    <p><i className='fas fa-bars'></i></p>
                                </td>
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
                                                <a className='btn btn-primary' onClick={ () => {setIdAtual(id)}}>
                                                    <i className='fas fa-pencil-alt'></i>
                                                </a>
                                                <a className='btn btn-danger' onClick={ () => deleteUsuario(id)}>
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