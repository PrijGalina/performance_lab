import axios from 'axios';

export class ProductsService {
  static async getFood() {
    const response = await axios.get(`https://api.jsonbin.io/v3/b/6570cbcb54105e766fda9445`);
    return response;
  }

  static async getCloth() {
    const response = await axios.get(`https://api.jsonbin.io/v3/b/6570d55f0574da7622d13874`);
    return response;
  }

  static async getElectronics() {
    const response = await axios.get(`https://api.jsonbin.io/v3/b/6570dc7154105e766fda9b7c`);
    return response;
  }
}