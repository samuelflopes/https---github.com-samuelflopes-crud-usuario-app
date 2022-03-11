import React from 'react';
import FormsRegister from './FormsRegister';

const Register = () => {
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
                        <FormsRegister />
                    </div>
                    <div>
                        <h2>Lista de pessoas cadastradas</h2>
                    </div>    
            </div>
                
  
        </div>
    )
}

export default Register