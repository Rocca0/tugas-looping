//ada lima macam bentuk perulangan di javascipt.secara umu,perulangan dibagi menjadi 2 .
//yaitu counted loop and Uncounted loop
//perbedaannya:
//1. counted loop merupakan perulangan yg jelas dan sudah tentu banyak perulangannya
//2. uncounted loop merupakan perulangan yg tidak jelas beberapakali harus mengulang 

//contoh counted loop

// function PushUp(){

// }
// for(i = 1; i <=10; i++){
//     PushUp();
// }

// //contoh uncounted loop

// let bosan;

// while(bosan == false) {
//      PushUp();
// }

// macam macam perulangan counted loop;
// 1.perulangan for 
// 2.perulangan forEach
// 3.perulangan repeat 

// macammacam perulangan uncounted loop
// 1.perulanan while
// 2.perulangan d0/while

// perulangan for
//perulangan for merupakan perulangan yg termaksuk dalam counted loop,karena sudah jelas berapakali akan mengulang sebuah perulangan

// for(let i = 10; i = 0; i++){
//     document.write(`<P>perulangan ini berulang ${i + 1}kali</p>`)
// }


// perulangan while 
// perulangan while merupakan perulangan yg Termaksuk kedalam perulangan uncounted loop namun,perulangan while juga dapat masuk 

// contoh 
// let ulang = confirm("apakah anda mau mengulang?");
// let counter = 0;

// while(ulang){
//     let jawab = confirm("apakah anda mau mengulang?");
//     counter++;
//     if(jawab == false){
//         ulang = false;
//     }
// }
// Document.write("perulangan sudah dilakukan sebanyak" + counter + "kali"); 

// perulangan do/while 
// perulangan do wo/while sama seperti perulangan while .

// perbedaan nya adalah perulangan sebanyak satu kali terlbih dahulu lalu mengecek kondsi yang ada di dalam kurung while.





let sum = "";
while(true){
    let value = prompt("masukan huruf", '');
    if(!value)break;

    sum+= value;

}

alert('sum : ' + sum);