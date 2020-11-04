import { AppState } from '../AppState'

const { nasaApi } = require('./AxiosService')

class PictureService {
  async getPicture(query) {
    try {
      const res = await nasaApi.get('apod?api_key=80fwO0C9OfrlRnmzpFqFv6GLg9pUssqrGxlqay3u&date=' + query)
      console.log(res.data)
      AppState.photo = res.data
    } catch (error) {
      console.error(error)
    }
  }
}

export const pictureService = new PictureService()
