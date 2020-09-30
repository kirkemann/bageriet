import axios from 'axios';

// BASE url
const api = {
    baseUrl: 'http://localhost:5033/'
}

//----------- Seneste nyt ------------
export const hentAntalProdukter = async () => {

    let response = await axios.get(api.baseUrl + "produkter/" + "antal/" + "3") // http://localhost:5033/produkter/antal/3
    return response.data;

}
//----------- Hent produkter ------------
export const hentProdukter = async () => {

    let response = await axios.get(api.baseUrl + "produkter/" + "antal/" + "8") // http://localhost:5033/produkter/antal/9
    return response.data;

}