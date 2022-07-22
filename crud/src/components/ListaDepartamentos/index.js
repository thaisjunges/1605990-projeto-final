import React, { useEffect, useState} from 'react';
import getDepartamentos from '../../services/departamentos';

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
        <h3 className='mt-3'>Departamentos</h3>

        <table className='table table-striped'>
          <thead>
            <tr>
            <th>Nome</th>
            <th>Sigla</th>
            <th>Ações</th>
            </tr>
          </thead>
         
          <tbody>
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