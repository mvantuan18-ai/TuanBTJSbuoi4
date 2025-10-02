let nhietdo = Number(prompt("Nhập nhiệt độ:"));
let mua = prompt("Trời có mưa không? (true/false):") === "true";

let hoatdong;
if (mua) {
  hoatdong = "Ở nhà";
} else if (nhietdo > 25) {
  hoatdong = "Đi chơi";
} else {
  hoatdong = "Hoạt động khác";
}
console.log(hoatdong);
