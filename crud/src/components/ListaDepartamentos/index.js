import React, { useEffect, useState} from 'react';
import {getDepartamentos} from '../../services/departamentos';
import { Link } from "react-router-dom"


const ListaDepartamentos = () => {
  const [departamentos, setDepartamentos] = useState()

  async function loadDepartamentos() {
    //valor que venho da API = getdepartamentos
    setDepartamentos(await getDepartamentos())
  }

  useEffect(() => {
    loadDepartamentos()
  }, [])


  //const departamentos = getDepartamentos()
  //console.log(departamentos)

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
                <button className='btn btn-outline-warning btn-sm'>
                    <i className='bi bi-pencil-fill btn-sm'/> Editar</button>
                <button className='btn btn-outline-danger'>
                    <i className='bi bi-trash-fill'/> Excluir</button>
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