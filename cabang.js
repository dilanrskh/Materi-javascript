// // 1. Syntax Percabangan If

// var totalBelanja = 9000;

// if (totalBelanja >= 50000) {
//   document.getElementById("if").innerHTML = "Selamat kamu dapat piring";
// }

// // 2. Syntax Percabangan If Else

// var umurPengunjung = 1;

// if (umurPengunjung >= 17) {
//   document.getElementById("ifelse").innerHTML = "Kamu Boleh Masuk Wahana Ini";
// } else {
//   document.getElementById("ifelse").innerHTML =
//     "Maaf Kamu Tidak Dapat Masuk ke Wahana Ini";
// }

// // 3. Percabangan If Else If
// var tiket = 1;

// if (tiket >= 6) {
//   document.getElementById("ifelseif").innerHTML = "Dapat Popcorn";
// } else if (tiket >= 4) {
//   document.getElementById("ifelseif").innerHTML = "Dapat Makanan Ringan";
// } else if (tiket >= 2) {
//   document.getElementById("ifelseif").innerHTML = "Dapat Permen";
// } else {
//   document.getElementById("ifelseif").innerHTML = "Tidak dapat snack";
// }

// 4, Syntax Percabangan Switch Case

// Cara pertama
// var umurPengunjung = prompt("Masukkan Umur Anda !");
// var wahana;

// switch(true){
//     case umurPengunjung >= 18:
//         wahana = "Boleh Masuk Wahana Kora kora";
//         document.getElementById("switchcase").innerHTML = wahana;
//         break;

//         case umurPengunjung >= 16:
//         wahana = "Boleh Masuk Wahana Flying Fox";
//         document.getElementById("switchcase").innerHTML = wahana;
//         break;

//         case umurPengunjung >= 14:
//         wahana = "Boleh Masuk Wahana Halilintar";
//         document.getElementById("switchcase").innerHTML = wahana;
//         break;

//         default:
//             wahana = "Terimakasih sudah berkunjung";
//             document.getElementById("switchcase").innerHTML = wahana;
// }

// Cara Kedua
// var nilai = prompt("Masukkan Nilai Anda");
// var grade = "";

// switch (true) {
//   case nilai > 90:
//     grade = "A+";
//     document.getElementById("switchcase").innerHTML = grade;
//     break;
//   case nilai > 80:
//     grade = "A";
//     document.getElementById("switchcase").innerHTML = grade;
//     break;
//   case nilai > 70:
//     grade = "B";
//     document.getElementById("switchcase").innerHTML = grade;
//     break;
//   case nilai > 60:
//     grade = "C";
//     document.getElementById("switchcase").innerHTML = grade;
//     break;
//   case nilai > 50:
//     grade = "D";
//     document.getElementById("switchcase").innerHTML = grade;
//     break;
//   default:
//     grade = "F";
//     document.getElementById("switchcase").innerHTML = grade;
// }

// 5. Percabangan Ternary ?
// var tanya = prompt("Apakah Serang ibukota Banten ?");

// var jawaban = (tanya.toUpperCase() == "IYA") ? "Benar" : "Salah";
// document.getElementById("ternary").innerHTML = jawaban;

// 6. Percabangan Nested
var user = {
    nama: "Dila",
    email: "dila@gmail.com",
    password: "0204",
    role: "admin" 
};

function masuk(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(user.email == email){
        if(user.password == password){
            if(user.role == "admin"){
               location.replace('https://id.pinterest.com/');
            }
        }else{
            alert("Tidak Bisa Masuk");
        }
    }else{
        alert("Bukan Admin WOeee !");
    }
}
