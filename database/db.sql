-- Create a new table with the given specification
CREATE TABLE Restaurants (
    id VARCHAR(36) NOT NULL PRIMARY KEY,
    rating CHAR(1) NOT NULL,    -- 0-5 -> it's only  digit, so i think this is the best way to do it
    name VARCHAR(255) NOT NULL,
    site VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(32) NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    lat DECIMAL(18,15) NOT NULL,
    lng DECIMAL(18,15) NOT NULL
);

-- Load the data in the csv
LOAD DATA LOCAL INFILE 'restaurantes.csv' 
INTO TABLE Restaurants
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

SELECT *, ( 6371 * acos( cos( radians(19.44005705) ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(-99.1270471) ) + sin( radians(19.44005705) ) * sin( radians( lat ) ) ) ) AS distance 
FROM Restaurants
HAVING distance < 5;