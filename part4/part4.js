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

//Step 02:
// Create an array of at least 10 movies with mock values
/**
  * @description movieList - An array of 10 movies with
  * @type {Array<Movie>}
  * @memberof Movie
  * @property {string} movieID - The ID of the movie.
  * @property {string} title - The title of the movie.
  * @property {number} year - The release year of the movie.
  * @property {number} rating - The rating of the movie.
 */

let movieList = [
  new Movie("A021", "The Shawshank Redemption", 1994, 9.3),
  new Movie("C020", "The Godfather", 1972, 9.2),
  new Movie("D003", "The Dark Knight", 2008, 9.0),
  new Movie("A104", "The Godfather Part II", 1974, 9.0),
  new Movie("B005", "12 Angry Men", 1957, 9.0),
  new Movie("A106", "Schindler's List", 1993, 9.0),
  new Movie("S007", "The Lord of the Rings", 2003, 9.0),
  new Movie("D108", "Pulp Fiction", 1994, 8.9),
  new Movie("L009", "The Good, the Bad and the Ugly", 1966, 8.8),
  new Movie("B110", "Fight Club ", 1999, 8.81)
];

//Display the movie list
console.log(`Movie List:`);
console.log(movieList);

//Display the movie list
document.getElementById('movie-list').innerHTML = movieList.map(movie => `<span class="note bold">${movie.movieID}: ${movie.title}, Year: ${movie.year}, Rating: ${movie.rating}`).join("<br></span>");


//Step 03:
// Use localeCompare() to sort the movie list by movieID (as a string)
/**
 * @function sortMovie
 * @description Sort the movie list by movieID
 * @memberof Movie
 * @param {string} a - The first movieID
 * @param {string} b - The second movieID
 */
function sortMovie() {
  movieList.sort((a, b) => a.movieID.localeCompare(b.movieID));
}
sortMovie();

//Display the movie list
console.log(`Sorted Movie List:`);
console.log(movieList);


//Display the movie list
document.getElementById('sorted-movie-list').innerHTML = movieList.map(movie => `<span class="note bold">${movie.movieID}: ${movie.title}, Year: ${movie.year}, Rating: ${movie.rating}`).join("<br></span>");
