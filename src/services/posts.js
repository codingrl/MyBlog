import axios from 'axios';

const URL = "https://gentle-ridge-36337.herokuapp.com/api/posts"

// Получить все посты
const getPosts = () => {
  return axios.get(URL)
}

// Получить один пост
const getPost = (id) => {
  return axios.get(`${URL}/${id}`)
}

export default {
  get: getPosts,
  getPost: getPost
}