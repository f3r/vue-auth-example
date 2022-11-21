import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:2222/api'
})

async function signup(newUser) {
  try {
    const { data } = await API.post('/auth/signup', newUser)
    return data
  } catch (error) {
    return { error: error.message }
  }
}

async function login(newUser) {
  try {
    const { data } = await API.post('/auth/login', newUser)
    return data
  } catch (error) {
    return { error: error.message }
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
