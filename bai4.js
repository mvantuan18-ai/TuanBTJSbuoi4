let a = Number(prompt("Nhập số thứ nhất:"));
let b = Number(prompt("Nhập số thứ hai:"));
let toantu = prompt("Nhập toán tử (+, -, *, /):");
let ketqua;

switch (toantu) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    if (b === 0) {
      console.log("Không thể chia cho 0");
      break;
    }
    result = a / b;
    break;
  default:
    console.log("Toán tử không hợp lệ");
    break;
}

if (result !== undefined) {
  console.log("Kết quả:", result);
}
