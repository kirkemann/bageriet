import axios from 'axios';

// BASE url
const api = {
    baseUrl: 'http://localhost:5033/'
}

//----------- Seneste nyt ------------
export const hentAntalProdukter = async () => {

    let response = await axios.get(api.baseUrl + "nyheder/" + "antal/" + "3") // http://localhost:5033/nyheder/antal/2
    return response.data;

}
//----------- Hent produkter ------------
export const hentProdukter = async () => {

    let response = await axios.get(api.baseUrl + "produkter/" + "antal/" + "8") // http://localhost:5033/produkter/antal/9
    return response.data;

}
//----------------Søgning------------------------
export const soegProdukt = async (soegord) => {

    let response = await axios.get(api.baseUrl + "produkter/soeg/" + soegord) // http://localhost:5033/produkter/soeg/
    return response.data;

}

//----------------Nyhedsmail------------------------
export const tilmeldNyheder = async (tilmelding) => {

    let response = await axios.post(api.baseUrl + "nyhedsbrevtilmelding/", tilmelding) // http://localhost:5033/nyhedsbrevtilmelding/
    return response.data;

}

//----------------Hent Kategori------------------------
export const hentAlleKategori = async () => {

    let response = await axios.get(api.baseUrl + "region") // http://localhost:5021/region
    return response.data;

}