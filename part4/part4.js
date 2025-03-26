// ---------------------------------------------------------------------
// Part 4: Data structures and algorithms – complex data types
// ---------------------------------------------------------------------
// Certificate IV in Information Technology
// Holmesglen Institute, VIC, Australia
// Student Name: Van Minh Le
// Student ID: 100693330
// ---------------------------------------------------------------------

// Step 1:
/**
 * @class Movie
 * @classdesc A class representing a movie.
 * @property {number} movieID - The ID of the movie.
 * @property {string} title - The title of the movie.
 * @property {number} year - The release year of the movie.
 * @property {number} rating - The rating of the movie.
 */
// Define the Movie class
class Movie {
    constructor(movieID, title, year, rating) {
      this.movieID = movieID;
      this.title = title;
      this.year = year;
      this.rating = rating;
    }
  }
//Display the Movie class
  console.log(Movie);

//Display the class definition on the HTML page
//Convert the class definition to a string
  const classDefinition = Movie.toString();
//Display the class definition on the HTML page
  document.getElementById('movie-object').textContent = classDefinition;