import axios from 'axios';

const url = 'http://localhost:42069/posts';

export const fetchPosts = () => axios.get(url);
export const createProfessor = (newProfessor) => axios.post(url, newProfessor);
export const updateProfessor = (id, updatedProfessor) => axios.patch(url + "/" + id, updatedProfessor);
export const rateProfessor = (id, newRating) => axios.patch(url + "/" + id + "/rateProfessor", newRating);
export const deleteProfessor = (id) => axios.delete(url + "/" + id);