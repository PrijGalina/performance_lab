import axios from 'axios';

export default class ProductsService {
  static async getFood(limit = 8, page = 1) {
    const response = await axios.get(`https://api.jsonbin.io/v3/b/6570cbcb54105e766fda9445`,
    {
      params: {
        _limit: limit,
        _page: page 
      }
    });
    return response;
  }

  static async getCloth(limit = 8, page = 1) {
    const response = await axios.get(`https://api.jsonbin.io/v3/b/6570d55f0574da7622d13874`,
    {
      params: {
        _limit: limit,
        _page: page 
      }
    });
    return response;
  }

  static async getElectronics(limit = 8, page = 1) {
    const response = await axios.get(`https://api.jsonbin.io/v3/b/6570dc7154105e766fda9b7c`,
    {
      params: {
        _limit: limit,
        _page: page 
      }
    });
    return response;
  }
}