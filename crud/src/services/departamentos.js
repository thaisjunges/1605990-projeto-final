import api from "./api";

export const getDepartamentos = async () => {
    const resp = await api.get('/departamentos')
    return resp.data
}

export const insertDepartamento = async (data) => {
    const { nome, sigla } = data;

    const resp = await api.post('/departamentos', {
        nome,
        sigla
    });

    return resp.data;
}

export const removeDepartamento = async (data) => {
    const { idDepartamento, callback } = data
    const resp = await api.delete(`/departamentos/${idDepartamento}`);
    
    callback(resp.data);

    return resp.data;
}

export const getDepartamentoById = async (idDepartamento) => {
    const resp = await api.get(`departamentos/${idDepartamento}`);

    return resp.data;
}

export const updateDepartamento = async (data) => {
    const { idDepartamento, nome, sigla } = data;

    const resp = await api.put(`departamentos/${idDepartamento}`, {
      nome,
      sigla
    });
    return resp.data;
  }
