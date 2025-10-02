let diem = Number(prompt("Nhập điểm (0-100):"));

if (diem >= 90 && diem <= 100) {
  console.log("Giỏi");
} else if (diem >= 70 && diem < 90) {
  console.log("Khá");
} else if (diem >= 50 && diem < 70) {
  console.log("Trung bình");
} else if (diem >= 0 && diem < 50) {
  console.log("Yếu");
} else {
  console.log("Điểm không hợp lệ");
}
