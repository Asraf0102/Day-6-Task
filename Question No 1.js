/*a).Write a constructor for the class Movie, which takes a String representing the title of the movie,
 a String representing the studio, and a String representing the rating as its arguments, and sets the
 respective class properties to these values.
*/

class movie1 {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    Title() {
        console.log(` Movie name is "${this.title}"`);
    }

    Studio() {
        console.log(`The movie made in this studio "${this.title}" is -  "${this.studio}"`)
    }

    Rating(){
        console.log(`Rating of the movie "${this.title}" - "${this.rating}"`)
    }
}
let mymovie1 = new movie1("Baahubali","Arka Media Works","9")
mymovie1.Title()
mymovie1.Studio()
mymovie1.Rating()

//Output:
//Movie name is "Bahubali"
//The movie made in this studio "Bahubali" is -  "baahu ptoduction"
//Rating of the movie "Bahubali" - "9"

//--------------------------------------------------------------------------------------------------------

/*b) The constructor for the class Movie will set the class
property rating to "PG" as default when no rating is provided.*/

class movie2 {
    constructor(title, studio, rating= "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    Title() {
        console.log(`Movie name is "${this.title}"`);
    }

    Studio() {
        console.log(`The movie made in this studio "${this.title}" is - "${this.studio}"`)
    }

    Rating(){
        console.log(`Rating of the movie "${this.title}" - "${this.rating}"`)
    }
}
let mymovie2 = new movie2("Chandramukhi 2","Lyca Production")
mymovie2.Title()
mymovie2.Studio()
mymovie2.Rating()

// Output:
// Movie name is "Chandramukhi 2"
// XHR.js:13 The movie made in this studio "Chandramukhi 2" is - "Lyca Production"
// XHR.js:17 Rating of the movie "Chandramukhi 2" - "PG"

/*c)  Write a method getPG, which takes an array of base type Movie as its argument, and returns 
    a new array of only those movies in the input array with a rating of "PG". You may assume
    the input array is full of Movie instances. The returned array need not be full.*/




class movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    Title() {
        console.log(`Movie name is "${this.title}"`);
    }

    Studio() {
        console.log(`The movie made in this studio "${this.title}" is -  "${this.studio}"`)
    }

    Rating(){
        console.log(`Rating of the movie "${this.title}" - "${this.rating}"`)
    }
}
class movieNew extends movie{
    getPG(){
        console.log(`only PG rating movies is "${this.title}" rating is"${this.rating}"`)
    }
}


    

let mymovie = new movieNew("kalakalappu 2","Lyca Production","10")
mymovie.Title()
mymovie.Studio()
mymovie.Rating()
mymovie.getPG()

//output:
// Movie name is "kalakalappu 2"
// XHR.js:20 The movie made in this studio "kalakalappu 2" is -  "Lyca Production"
// XHR.js:24 Rating of the movie "kalakalappu 2" - "PG13"
// XHR.js:29 only PG rating movies is "kalakalappu 2" rating is"10"



class movie3 {
    constructor(title, studio, rating= PG) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    Title() {
        console.log(`Movie name is "${this.title}"`);
    }

    Studio() {
        console.log(`The movie made in this studio "${this.title}" is -  "${this.studio}"`)
    }

    Rating(){
        console.log(`Rating of the movie "${this.title}" - "${this.rating}"`)
    }
}
let mymovie3 = new movie3("Casino Royale","Eon Productions","PG­13")
mymovie3.Title()
mymovie3.Studio()
mymovie3.Rating()


// Output:
// Movie name is "Casino Royale"
// XHR.js:14 The movie made in this studio "Casino Royale" is -  "Eon Productions"
// XHR.js:18 Rating of the movie "Casino Royale" - "PG­13"







