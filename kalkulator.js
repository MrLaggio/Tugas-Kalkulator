var operator = prompt("masukan jenis operator (+ x - / )");
if (operator == "+") {
  var angka1 = parseInt(prompt("masukan angka pertama"));
  var angka2 = parseInt(prompt("masukan angka kedua"));
  var hasil = angka1 + angka2;
  console.log("hasil tambah dari angka 1 dan angka 2 adalah " + hasil);
  console.log("angka pertama adalah " + angka1);
  console.log("angka kedua adalah " + angka2);
} else if (operator == "x") {
  var angka1 = parseInt(prompt("masukan angka pertama"));
  var angka2 = parseInt(prompt("masukan angka kedua"));
  var hasil = angka1 * angka2;
  console.log("hasil perkalian dari angka 1 dan angka 2 adalah " + hasil);
  console.log("angka pertama adalah " + angka1);
  console.log("angka kedua adalah " + angka2);
} else if (operator == "/") {
  var angka1 = parseInt(prompt("masukan angka pertama"));
  var angka2 = parseInt(prompt("masukan angka kedua"));
  var hasil = angka1 / angka2;
  console.log("hasil pembagian dari angka 1 dan angka 2 adalah " + hasil);
  console.log("angka pertama adalah " + angka1);
  console.log("angka kedua adalah " + angka2);
} else if (operator == "-") {
  var angka1 = parseInt(prompt("masukan angka pertama"));
  var angka2 = parseInt(prompt("masukan angka kedua"));
  var hasil = angka1 - angka2;
  console.log("hasil pengurangan dari angka 1 dan angka 2 adalah " + hasil);
  console.log("angka pertama adalah " + angka1);
  console.log("angka kedua adalah " + angka2);
} else {
  console.log("tidak valid");
}
