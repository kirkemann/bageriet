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

    let response = await axios.get(api.baseUrl + "kategorier") // http://localhost:5033/kategorier
    return response.data;

}

// ----------------- Hent alle produkter------------------
//GET alle produkter
export const alleProdukter = async () => {

    let response = await axios.get(api.baseUrl + "produkter") // http://localhost:5033/produkter
    return response.data;

}

// ----------------- Hent produkter via id------------------
//GET hent event ud fra id
export const hentProduktID = async (id) => {

    let response = await axios.get(api.baseUrl + "produkter/" + id) // http://localhost:5033/produkter/
    return response.data;
}

//----------------Kontakt------------------------
//Post kontakt
export const opretKontakt = async (besked) => {
    //lav data fra e.target (formularen) om til form-data som så bliver lavet til et object af input-data
    let beskedobjekt = Object.fromEntries(new FormData(besked))

    let response = await axios.post(api.baseUrl + "kontakt", beskedobjekt) // http://localhost:5033/kontakt/

    return response.data;

}