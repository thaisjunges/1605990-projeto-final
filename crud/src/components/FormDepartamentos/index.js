import React, { useEffect, useState} from "react";

const FormDepartamentos = () => {
    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');

    return (
        <>
            <h3 className='mt-3 mb-3'>Cadastro de Departamento</h3>

            <div className="row">

                <div className='col-md-10 col-sm-6 col-12'>

                    <div className='form-floating'>
                    <input 
                    className='form-control' 
                    type='text' 
                    id='nome' 
                    placeholder='Nome' 
                    value={nome}
                    onChange={e => {
                        setNome(e.target.value)
                    }}
                    />
                    <label htmlFor='nome'>Nome</label>
                    </div>
                </div>

                <div className='col-md-2 col-sm-6 col-12'>
                <div className="form-floating">
                <input 
                className='form-control' 
                type='text' 
                id='sigla' 
                placeholder='Sigla' 
                value={sigla}
                onChange={e => {
                    setSigla(e.target.value)
                }}
                />
                <label htmlFor='sigla'>Sigla</label>
                </div>
                </div>

            </div>

            <div className='row'>
                <div className='col'>
                    <button 
                    className='btn btn-primary mt-3'
                    onClick={() => {
                        alert('Clicou')
                    }}>
                    <i class="bi bi-box-arrow-down" />Salvar
                    </button>
                </div>
            </div>
        </>
    )
}

export default FormDepartamentos;