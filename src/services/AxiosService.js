import Axios from 'axios'

export const nasaApi = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary',
  timeout: 4000
})
