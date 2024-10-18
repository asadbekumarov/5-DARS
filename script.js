// UYGA VAZIFA
// 1-
// let a = ["apple", "banna", "orange"];
// console.log(a.join("=>"));

// 2-
// let gap = prompt("gap kiriting");
// let gapLeng = gap.trim().split(/\s+/).length;
// console.log(gapLeng);

// 3-
// let ism1 = prompt("Ismingizni kiriting (Asadbek)");
// let sana1 = prompt("Tug'ilgan sanangizni kiriting (dd.mm.yy)");
// let soat1 = prompt("Tug'ilgan vaqtlaringizni kiriting (00:00)");

// let ism2 = prompt("Ismingizni kiriting (Asadbek)");
// let sana2 = prompt("Tug'ilgan sanangizni kiriting (dd.mm.yy)");
// let soat2 = prompt("Tug'ilgan vaqtlaringizni kiriting (00:00)");

// function tenglik(sana1, soat1, sana2, soat2) {
//   let sana = sana1.split(".");
//   let sana2 = sana2.split(".");

//   let vaqt = new Date(sana[2], sana[1] - 1, sana[0]);
//   let vaqt2 = new Date(sana2[2], sana2[1] - 1, sana2[0]);

//   let soat1 = soat1.split(":");
//   let soat2 = soat2.split(":");

//   vaqt.setHours(soat1[0], soat1[1]);
//   vaqt2.setHours(soat2[0], soat2[1]);

//   let farq = Math.abs(vaqt - vaqt2);

//   let kun = Math.floor(farq / (1000 * 60 * 60 * 24));
//   let yil = Math.floor(kun / 365);
//   let ortipQolgan = kun % 365;
//   let oy = Math.floor(ortipQolgan / 30);
//   let kun1 = ortipQolgan % 30;

//   let soatfarqi = Math.floor((farq % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutfarqi = Math.floor((farq % (1000 * 60 * 60)) / (1000 * 60));

//   console.log(`${ism1} va ${ism2} orasidagi farq:`);
//   console.log(`${yil} yil, ${oy} oy, ${kun1} kun.`);
//   console.log(`Vaqt farqi: ${soatfarqi} soat ${minutfarqi} daqiqa.`);
// }

// tenglik(sana1, soat1, sana2, soat2);

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// QOSHIMCA
// 1-
// 1 dan 20 gacha bo'lgan faqat juft sonlarni chiqar.
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) console.log(i);
// }
// ---------------------------------------------------------------
// 2-
// 1 dan 20 gacha bo'lgan faqat toq sonlarni chiqar.
// for (let i = 1; i <= 20; i++){
//   if (i % 2 !== 0) console.log(i);
// }
// ---------------------------------------------------------------
// 3-
// let fruits = ["apple", "banana", "cherry"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// ---------------------------------------------------------------
// 4-
// 1 dan 100 gacha bo'lgan sonlar ichida 3 ga bo'linadigan sonlarni chiqarish
// for (let i = 1; i < 100; i++) {
//   if (i % 3 === 0) console.log(i);
// }
// ---------------------------------------------------------------
// 5-
// 2 ning 1-darajasidan 2 ning 10-darajasigacha bo'lgan qiymatlarni for loop yordamida chiqar.
// for (let i = 2; i <= 10; i++) {
//   console.log(i ** 2);
// }
// ---------------------------------------------------------------
// 6-
// Berilgan string ichidagi harflarni for loop yordamida alohida chiqar:
// let word = "hello";
// for (let i = 1; i < word.length; i++) {
//   console.log(word[i]);
// }
// ---------------------------------------------------------------
// 7-
// Berilgan arraydagi har bir elementni 3 ga ko'paytiring va natijaviy arrayni chiqar:
// let numbers = [1, 2, 3, 4];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]*3);
// }
