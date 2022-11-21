import axios from 'axios'

const API = axios.create({
  baseURL: 'https://hotelerio-backend-api.onrender.com/api'
})

async function signup(newUser) {
  try {
    const { data: { token, email } } = await API.post('/auth/signup', newUser)
    localStorage.setItem('token', token)
    localStorage.setItem('email', email)
    return token
  } catch (error) {
    return {error: error.message}
  }
}

async function login(newUser) {
  try {
    const response = await API.post('/auth/login', newUser)
    localStorage.setItem('token', response.data?.token)
    localStorage.setItem('email', response.data?.email)
    return response.data
  } catch (error) {
    return {error: error.message}
  }
}

async function getAvailableRooms(checkin, checkout) {
  const response = await API.get('/rooms/available', {
    params: {
      checkin,
      checkout
    }, headers: {
      token: localStorage.getItem('token')
    }
  })
  return response.data
}


export default {
  signup,
  login,
  getAvailableRooms
}
