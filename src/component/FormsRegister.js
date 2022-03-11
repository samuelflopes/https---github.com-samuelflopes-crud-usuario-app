import React, { useState } from 'react';

const FormsRegister = () =>  {

    //Variable capture dados
const initialvalues = {
    nome: '',
    telefone:'',
    cpf: '',
    cep: '',
    Logradouro: '',
    cidadeEstado: ''
}

//captura e manipulação dos valores 
let { valor, setValues } = useState( initialvalues )

    return (
        <h1> Formulario </h1>
    )

}

export default FormsRegister
