//Bài 1:(Init)
let person = {
    tetle: "The dark night rises",
    year: 2012,
    rate: 8.4,
};
console.log(person);

//Bài 2:
//2.1:
person.rate
person.year
person.tetle
console.log(person);

person.director
console.log(person);
//2.2:
let list = ['SPORT', 'LOL', 'BST'];
console.log(...list);
//Bài 3:(update)
//3.1:

person.rate = '8.7';
console.log(person.rate);


for(let i=0;i<person.rate.length/2;i++)
{
    console.log(person.rate[i]);
}
console.log(person.rate);
//3.2:
let movies = ['IT', 'DORAEMON', 'AQUAMAN'];
let newItem = prompt('Enter new Item');
movies.push('ATTACK ON TITANS'); {

console.log(movies);
}

//Bài 4:(Create)
let movie = {
       title: 'The dark nignt rises ',
       year : 2012 ,
       rate : 8.4
       }
     let a = prompt('what you want to update?')
     if(movie.hasOwnProperty(a) === true){
     console.log('this property are exist in our data')
     }
     else{
     alert(a+ ' does not exist in our data,we will add new')
     movie[a]=prompt('enter new data');
     console.log(movie)
    }


//Array of object:

let movies = {
    tetle: "30 chưa phải là Tết",
    year: 2020,
    rate:8,
    casts: ['Trường Giang', 'Mạc Văn Khoa', 'Thanh Dũng'],

};

console.log(...movies);

console.log(movies.casts);

casts.push('Nhã Phương');

console.log(casts);
console.log(movies);

const movie = {
       title: '30 chưa phải là tết ',
       year : 2020 ,
       rate : 8,
       cast : ['Trường Giang', 'Mạc Văn Khoa', 'Thanh Dũng']
       }
     const movie2 = {
       title: 'Deliver Us From Evil ',
       year : 2015 ,
       rate : 8.6,
       cast : ['Hwang Jung Min', 'Lee Jung Jae', 'Park Jung Min']
       }
     const movie3 = {
       title: 'Antebellum ',
       year : 2019 ,
       rate : 7.6,
       cast : ['Janelle Monáe', 'Eric Lange', 'Jena Malone']
       }
     let movieArr=[];
     movieArr.push(movie)
     movieArr.push(movie2)
     movieArr.push(movie3)
     for(let i=0 ; i < movieArr.length ; i++){
     console.log(' '+movieArr[i].title+"\n Year: "+ movieArr[i].year +"\n rate: "+movieArr[i].rate +"\n cast: "+movieArr[i].cast)
     }
    
// object optional:

       
       