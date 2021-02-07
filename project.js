const numberOfFilms = +prompt('How many movie have you watched','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = ("Один из последних просмотренных фильмов",''),
      b = ("На сколько оцените его",''),
      c = ("Один из последних просмотренных фильмов",''),
      d = ("На сколько оцените его",'');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

console.log (personalMovieDB);
