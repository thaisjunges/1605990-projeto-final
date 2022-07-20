import React from 'react';

const ListaDepartamentos = () => {

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
            <tr>
              <td>Recursos Humanos</td>
              <td>RH</td>
              <td>

                <div className='d-flex justify-content-evenly'>
                <button className='btn btn-outline-warning btn-sm'>
                    <i className='bi bi-pencil-fill btn-sm'/> Editar</button>
                <button className='btn btn-outline-danger'>
                    <i className='bi bi-trash-fill'/> Excluir</button>
                </div>

              </td>
            </tr>
          </tbody>
          </table>
          </>
    )
}

export default ListaDepartamentos;