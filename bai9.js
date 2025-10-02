let gotuoi = Number(prompt("Gõ tuổi:"));
let vaitro = prompt("Nhập vai trò (admin/user/guest):");

if (vaitro === "admin" || (vaitro === "user" && tuoi >= 18)) {
  console.log("Được truy cập");
} else {
  console.log("Không được truy cập");
}
