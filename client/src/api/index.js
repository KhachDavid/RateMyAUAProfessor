import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:42069"})
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ` + JSON.parse(localStorage.getItem('profile')).token;
    }
    return req;
})

export const fetchProfessors = () => API.get("/professors");
export const createProfessor = (newProfessor) => API.post("/professors", newProfessor);
export const updateProfessor = (id, updatedProfessor) => API.patch("/professors/" + id, updatedProfessor);
export const rateProfessor = (id, newRating) => API.patch("/professors/" + id + "/rateProfessor", newRating);
export const deleteProfessor = (id) => API.delete("/professors/" + id);

export const signIn = (formData) => API.post('user/signin', formData);
export const signUp = (formData) => API.post('user/signup', formData);