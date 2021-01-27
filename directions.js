const axios = require('axios')
const qs = require('qs')
const baseUrl = `https://maps.googleapis.com/maps/api/directions/json`

//https://console.cloud.google.com/google/maps-apis/metrics?project=itinerary-303004

const parameters = {
    // origin:`place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE`,
    // destination:`place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE`,
    origin: 'Copacabana',
    destination: 'Ramos',
    key: 'AIzaSyB_Og5ysgQBErdHzKYLWMnF4ziYfrsQgI0'
}

const getDirection = async () => {
    let url = `${baseUrl}?${qs.stringify(parameters)}`
    let { data } = await axios.get(url);
    return data;
}


getDirection().then(console.log).catch(console.err);