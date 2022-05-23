import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:42069"})

export const fetchPosts = () => API.get("/posts");
export const createProfessor = (newProfessor) => API.post("/posts", newProfessor);
export const updateProfessor = (id, updatedProfessor) => API.patch("/posts/" + id, updatedProfessor);
export const rateProfessor = (id) => API.patch("/posts/" + id + "/rateProfessor");
export const deleteProfessor = (id) => API.delete("/posts/" + id);

export const signIn = (formData) => API.post('user/signin', formData);
export const signUp = (formData) => API.post('user/signup', formData);