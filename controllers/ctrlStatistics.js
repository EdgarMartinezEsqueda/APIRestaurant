const Restaurante = require("../models/restaurante"); 

// Return specific statitics depending on the latitude, longitude and radius
const getStatistics = async ( req, res ) => {
    try{
        let allRestaurants = await Restaurante.findAll();   // Get all restaurants in the database

        let latitud = req.query.latitude, longitud = req.query.longitude, radio = req.query.radius;
        // filter restaurants that fall inside the circle with center [x,y] and radius r
        // The formula is: √( (x-a)^2 + (y-b)^2 ) 
        // And check if the distance between the center and the restaurant is less than r
        let data = Object.keys(allRestaurants).filter(key => 
            Math.sqrt( ( parseFloat(allRestaurants[key].dataValues.lat) - latitud)**2 + ( parseFloat(allRestaurants[key].dataValues.lng) - longitud)**2 ) < radio
        );
        // Change the keys to the rating of the restaurant
        data = data.map(key => parseInt( allRestaurants[key].dataValues.rating) );
        
        let n = data.length;    // Number of restaurants inside the circle
        let mean = data.reduce((a, b) => a + b, 0) / n; // Mean of all ratings
        // Calculate the standard deviation s = √(Σ(x-x')^2 / n-1 )
        let sdp = Math.sqrt( data.map( x => (x - mean)**2 ).reduce( (a, b) => a + b ) / (n - 1) );  

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