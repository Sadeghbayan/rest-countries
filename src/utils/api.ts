export const BASE_URL = "https://restcountries.com/v2";

class Country {
  static async fetchAllCountries() {
    try {
      const resp = await fetch(`${BASE_URL}/all`, {
        method: "GET",
      });
      if (!resp.ok) {
        console.log("there might be a problem from server!");
      }

      const data = await resp.json();
      return {
        data,
        error: "",
      };
    } catch (error) {
      return {
        data: "",
        error: error,
      };
    }
  }
}

export default Country;
