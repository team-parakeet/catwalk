import axios from 'axios';
import {TOKEN} from '../../config.js';

/**
 * Returns a promise that resolves to all questions for a given product.
 *
 * @param {number} productId The product_id you want questions for.
 * @returns {Promise<any>} Promise object representing api results
 */
export function getAllQuestions(productId) {
  return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/qa/questions', {
    headers: {
      Authorization: TOKEN
    },
    params: {
      product_id: productId
    }
  })
}
<<<<<<< HEAD

export function getProductReviewMeta(productId) {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews/meta/?product_id=${productId}`
  return axios.get(url, {
    headers: {
      Authorization: TOKEN
    }
  })
}

=======
>>>>>>> e885080609df30c2ae710741da54cc4c2adb271f
