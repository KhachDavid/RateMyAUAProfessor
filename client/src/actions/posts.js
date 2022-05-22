import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }


}

export const createProfessor = (professor) => async (dispatch) => {
    try {
        const {data} = await api.createProfessor(professor);
        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateProfessor = (id, professor) => async (dispatch) => {
    try {
        const {data} = await api.updateProfessor(id, professor);
        dispatch({type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const rateProfessor = (id) => async (dispatch) => {
    try {
        const {data} = await api.rateProfessor(id);
        dispatch({type: 'RATE', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteProfessor = (id) => async (dispatch) => {
    try {
        await api.deleteProfessor(id);
        dispatch({type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error.message);
    }
}