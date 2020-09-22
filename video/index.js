//Bài 1:(Init Exercise);

let movies = ['Aquaman','IT', 'Avarta'];
console.log(movies);

movies.push('Doraemon');
console.log(movies);

//Bài 2:(Create);

let newItem = prompt('Enter new Item');
movies.push('newItem');
console.log(movies);

//Bài 3:(read);

let i = prompt('Enter new Item');
console.log(movies[i]);

//Bài 4:(update);
console.log(movies[i]);
let x = 0
let Item = prompt('Enter new Item');
movies[x] = Item
console.log(movies[0]);
console.log(movies);

//Bài 5(delete)
movies.slice(0, 2)
console.log(movies);
let y = prompt('Enter new Item');
movies.slice(y, 2);
console.log(movies);

//Bài 6:(read all)

let movies = ['Aquaman','IT','Avarta'];
console.log(movie);
for(let i=0;i<movies.length;i++)
{
    console.log(movies[i]);
}

let movies = ['Aquaman','IT', 'Avarta'];
console.log(movies);
for(let i=0;i<movie.length/2;i++)
{
    console.log(movie[i]);
}

let movies = ['Batman', 'Up', 'Attack on titans', 'My boss my hero'];
console.log(movies);
for(let i=0;i<movies.length;i++)
{
    console.log((i+1)+"."+movies[i]);
}