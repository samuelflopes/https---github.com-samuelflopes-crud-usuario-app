import React, { useEffect, useState } from 'react';
const FormsRegister = (props) =>  {

    //Variable capture dados
const initialvalues = {
    nomeCompleto: '', 
    telefone:'',
    cpf: '',
    cep:'',
    logradouro: '',
    cidade: '',
    estado: ''
    }




//captura e manipulação dos valores 
let [values, setValues] = useState(initialvalues)

//Clicando em editar os dados voltam para os campos de edição
useEffect( () => {
    if(props.idAtual == '') {
        setValues({
            ...initialvalues
        })
    } else {
        setValues({
            ...props.dadosUsuarios[props.idAtual]
        })
    }
}, [props.idAtual, props.dadosUsuarios])

//Manipulação dos dados
const manipulateInputChange = e => {
    let {name, value} = e.target

    setValues({
        ...values,
        [name]: value
    })
}

// Prevenção do comportamento padrão: Ao clicar em submit enviar para outra página
const manipulatesubmit = e =>{
    e.preventDefault()
    props.addEdit(values)
}

    return (
        
        <form autoComplete="off" onSubmit={manipulatesubmit}> 
            <div className = "form-group input-group">
                <div className = "input-group-prepend">
                    <div className = "input-group-text">
                        <i className = "fas fa-user"></i>
                    </div>
                </div>

                    <input className = "form-control" placeholder = "Nome Completo" name="nomeCompleto"  value={values.nomeCompleto} onChange={manipulateInputChange} />
            </div>

            <div className = "row">
                <div className = "form-group input-group col-md-6">
                    <div className = "input-group-prepend ">
                        <div className = "input-group-text ">
                            <i className = "fas fa-mobile "></i>
                        </div>
                    </div>
                    
                        <input className = "form-control" type="number"  placeholder = "Telefone" name="telefone"value = {values.telefone} onChange={manipulateInputChange}/>
                </div>
            </div>
            <div className = "row">
                <div className = " form-group input-group col-md-6">
                    <div className = "input-group-prepend">
                        <div className = "input-group-text">
                            <i className = "fas fa-location-arrow"></i>
                        </div>
                    </div>
                        <input className = "form-control" type="number" placeholder = "CPF" name="cpf" value = {values.cpf} onChange={manipulateInputChange}/>
                </div>
            </div>

            <div className = "row">
                <div className = "form-group input-group col-md-6">
                    <div className = "input-group-prepend">
                        <div className = "input-group-text">
                        <i className="fa fa-map" aria-hidden="true"></i>
                        </div>
                    </div>
                        <input className = "form-control" type="number" placeholder = "CEP" name="cep" value = {values.cep} onChange={manipulateInputChange}/>
                </div>
            </div>

            <div className = "row">
                <div className = "form-group input-group col-md-6">
                    <div className = "input-group-prepend">
                        <div className = "input-group-text">
                            <i className = "fas fa-search-location"></i>
                        </div>
                    </div>
                        <input className = "form-control" placeholder = "logradouro" name="logradouro"value = {values.logradouro} onChange={manipulateInputChange}/>
                </div>
            </div>

            <div className = "row">
                <div className = " form-group input-group col-md-6">
                    <div className = "input-group-prepend">
                        <div className = "input-group-text ">
                            <i className = "fas fa-city"></i>
                        </div>
                    </div>
                        <input className = "form-control" placeholder = "Cidade" name="cidade" value = {values.cidade} onChange={manipulateInputChange}/>
                </div>
            </div>

            <div className = "row">
                <div className = " form-group input-group col-md-6">
                    <div className = "input-group-prepend">
                        <div className = "input-group-text">
                            <i className = "fas fa-building"></i>
                        </div>
                    </div>
                        <input className = "form-control" placeholder = "estado" name="estado" value = {values.estado} onChange={manipulateInputChange}/>
                </div>
            </div>

            <div className='form-group'>
                <input type="submit" value= {props.idAtual == '' ? 'Salvar' : 'Atualizar'} className="btn btn-primary btn-block" />
            </div>

         </form>
    )
    

}

export default FormsRegister
