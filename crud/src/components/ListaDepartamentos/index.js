import React, { useEffect, useState} from 'react';
import {getDepartamentos, removeDepartamento} from '../../services/departamentos';
import { Link, useSearchParams } from "react-router-dom"


const ListaDepartamentos = () => {
  const [departamentos, setDepartamentos] = useState()
  const [excluindo, setExcluindo] = useState();

  async function loadDepartamentos() {
    //valor que venho da API = getdepartamentos
    setDepartamentos(await getDepartamentos())
  }

  useEffect(() => {
    loadDepartamentos()
  }, [])

  useEffect(( ) => {
    setExcluindo(false);
  }, [departamentos])


    return (
        <>
        <div className='d-flex justify-content-between '>
          <h3 className='mt-3'>Departamentos</h3>

        <Link 
        className="btn btn-primary mt-3"
        to='/departamentos/new'>
        <i className='bi bi-plus'/> NOVO
        </Link>
        </div>
        

        <table className='table table-striped'>
          <thead>
            <tr>
            <th>Nome</th>
            <th>Sigla</th>
            <th className='text-center'>Ações</th>
            </tr>
          </thead>
          <tbody>

        {!departamentos &&
          <tr>
            <td colSpan='3'>
              <div className='d-flex justify-content-center'>
                <div className='spinner-border text-warning'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              </div>
            </td>
          </tr>
}
            {departamentos && departamentos.map(d => {
              return (
            <tr key={d.id_departamento}>
              <td>{d.nome}</td>
              <td>{d.sigla}</td>
              <td>
                <div className='d-flex justify-content-evenly'>
                
                
                
                <Link 
                className='btn btn-outline-warning btn-sm'
                  to={`/departamentos/edit/${d.id_departamento}`}
                  >
                    <i className='bi bi-pencil-fill btn-sm'/> Editar
                    </Link>



                <button 
                disabled={excluindo}
                className='btn btn-outline-danger'

                onClick={() => {

                setExcluindo(true);

                 removeDepartamento({
                    idDepartamento: d.id_departamento,
                    callback: (resposta) => {
                      loadDepartamentos()
                     
                      if (resposta == '') {
                        alert('Não foi possivel excluir')
                      }
                    }
                  })

                }}
                >
                  {excluindo &&
                    <span className='spinner-border spinner-border-sm'/>
                  }

                  {!excluindo &&
                    <i className='bi bi-trash3-fill'/>
                  }
                    
                    
                    {' '} Excluir
                    
                    
                    </button>
                </div>

              </td>
            </tr>
            )
            })}
          </tbody>
          </table>
          </>
    )
}

export default ListaDepartamentos;