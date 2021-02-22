<<<<<<< HEAD
"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
=======
const numberOfFilms = +prompt('How many movie have you watched','');
>>>>>>> 80fcd583f66ccbe943626cad268f770d05602f9b

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
<<<<<<< HEAD
    privat: false
};

/*for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);*/

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB)
    }
}
showMyDB();

/*function showMyDB(hidden) {
    if (!hidden) {
        console.log (personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat)*/

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const favoiriteGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = favoiriteGenre;
    }
}
writeYourGenres();
=======
    privat: false,
};

const a = ("Один из последних просмотренных фильмов",''),
      b = ("На сколько оцените его",''),
      c = ("Один из последних просмотренных фильмов",''),
      d = ("На сколько оцените его",'');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

console.log (personalMovieDB);
>>>>>>> 80fcd583f66ccbe943626cad268f770d05602f9b
