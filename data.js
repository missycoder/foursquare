async function search(lat, lng, searchTerms) {
    const response = await axios.get('https://api.foursquare.com/v3/places/search', {
       params: {
           query: encodeURI(searchTerms), //encodeURI function to convert special characters to their encoded eqv so that query will be wellformed
           ll: lat + "," + lng,
           // categories:"13033",  // enable use of categories
           sort:"DISTANCE",
           radius: 5000,
           limit: 50

       },
       headers: {
           Accept: "application/json",
           // Provide the API key here
           Authorization: 'fsq3ofxnrK35qH0GpPfCrR+Bowg+cETIGLnC7DLpi/Q+fZg='
       }
   })
  return response.data;

   


}