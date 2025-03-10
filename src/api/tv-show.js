import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake_data";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(
      `${BASE_URL}tv/popular?api_key=${API_KEY_PARAM}`
    );
    return response.data.results;
    //return FAKE_POPULARS;
  }
  static async fetchRecommendation(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations?api_key=${API_KEY_PARAM}`
    );

    return response.data.results;
    //return FAKE_RECOMMENDATIONS;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}search/tv?api_key=${API_KEY_PARAM}&query=${title}`
    );

    return response.data.results;
    //return FAKE_RECOMMENDATIONS;
  }
}
