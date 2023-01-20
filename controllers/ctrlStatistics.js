const Restaurante = require("../models/restaurante"); 

// Return specific statitics depending on the latitude, longitude and radius
const getStatistics = async ( req, res ) => {
    try{
        let allRestaurants = await Restaurante.findAll();   // Get all restaurants in the database

        let latitud = req.query.latitude, longitud = req.query.longitude, radio = req.query.radius / 100000;    // convert radius to meters
        // filter restaurants that fall inside the circle with center [x,y] and radius r
        // The formula is: √( (x-a)^2 + (y-b)^2 ) 
        // And check if the distance between the center and the restaurant is less than the radius
        let data = Object.keys(allRestaurants).filter(key => 
            Math.sqrt( ( parseFloat(allRestaurants[key].dataValues.lat) - latitud)**2 + ( parseFloat(allRestaurants[key].dataValues.lng) - longitud)**2 ) < radio
        );
        // Change the keys to the rating of the restaurant
        data = data.map(key => parseInt( allRestaurants[key].dataValues.rating) );
        
        let n = data.length;    // Number of restaurants inside the circle
        let mean = 0, sdp = 0;

        (n === 0) // If there are no restaurants inside the circle
        ? mean = 0
        : mean = data.reduce((a, b) => a + b, 0) / n; // Mean of all ratings

        (n <= 1) // if only one restaurant is inside the circle
        ? sdp = mean    // Standard deviation = mean
        : sdp = Math.sqrt( data.map( x => (x - mean)**2 ).reduce( (a, b) => a + b ) / (n - 1) );  // Else Calculate the standard deviation s = √(Σ(x-x')^2 / n-1 )

        return res.json({   // Return the statistics
            count : n,
            avg: mean,
            sdp
        });
    }catch(e) {
        return res.status(500).json({ message: "An error has occured", error: e });
    }
}

module.exports = { getStatistics };