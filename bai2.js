let tuoi = parseInt(prompt("Nhập tuổi của bạn:"));
if (tuoi < 18) {
  console.log("Trẻ em");
} else if (tuoi >= 18 && tuoi <= 30) {
  console.log("Thanh niên");
} else if (tuoi >= 31 && tuoi <= 50) {
  console.log("Trung niên");
} else if (tuoi > 50) {
  console.log("Cao niên");
} else {
  console.log("Tuổi không hợp lệ");
}
