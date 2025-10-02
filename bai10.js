let giatri = Number(prompt("Nhập giá trị nhiệt độ:"));
let donvi = prompt("Nhập đơn vị (celsius/fahrenheit):").toLowerCase();

switch (donvi) {
  case "celsius":
    if (giatri < -273.15) {
      console.log("Giá trị không hợp lệ cho Celsius");
      break;
    }
    let f = (giatri * 9) / 5 + 32;
    console.log(f + " Fahrenheit");
    break;
  case "fahrenheit":
    if (giatri < -459.67) {
      console.log("Giá trị không hợp lệ cho Fahrenheit");
      break;
    }
    else{
        let c = ((giatri - 32) * 5) / 9;
        console.log(c + " Celsius");
        break;
    }
  default:
    console.log("Đơn vị không hợp lệ");
    break;
}
