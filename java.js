// Khang dinh - Phu dinh
// Bai 1
// function chanLe() {
//     let x = 1; 
//     x = Number(prompt("Nhap so ban muon"));
//     if (x % 2 == 0) {
//         console.log("Chan");
//     }
//     else {
//         console.log("Le");
//     }
// }

// Bai 2 
// function soAm() {
//     let x = 1; 
//     x = Number(prompt("Nhap so ban muon"));
//     if (x < 0) {
//         console.log("Am");
//     }
//     else {
//         console.log("Khong phai so am");
//     }
// }

// Bai3
// function ketqua() {
//     let diemTB = 1; 
//     diemTB = Number(prompt("Nhap diem trung binh"));
//     if(diemTB>=5) {
//         console.log("Dau");
//     }
//     else {
//         console.log("rot");
//     }
// };
// ketqua();

// and-or 
// bai1
// function tamGiacDeu() {
//     let a = 1, b = 1, c = 1;
//     a = Number(prompt("Nhap canh 1"));
//     b = Number(prompt("Nhap canh 2"));
//     c = Number(prompt("Nhap canh 3"));
//     if (a==b && b==c) {
//         console.log("Tam giac deu");
//     }
//     else {
//         console.log("Ko phai tam giac deu");
//     }
// }
// tamGiacDeu();
// Bai 3
// function testTamGiacVuong() {
//     let a = 1, b = 1, c = 1;
//     a = Number(prompt("Nhap canh 1"));
//     b = Number(prompt("Nhap canh 2"));
//     c = Number(prompt("Nhap canh 3"));
//     if (a**2==b**2+c**2 || b**2==a**2+c**2 || c**2==a**2+b**2) {
//         console.log("Tam giac vuong");
//     }
//     else {
//         console.log("Ko phai tam giac vuong");
//     }
// }
// testTamGiacVuong();
// bai2
// function tinhTienDien() {
//     let kw = prompt("nhap so dien");
//     if (kw < 100) {
//         console.log("tien dien la", kw * 2000);
//     }
//     else {
//         if (kw < 200) {
//             console.log("tien dien la", kw * 2500);
//         }
//         else {
//             console.log("tien dien la", kw * 3500);
//         }
//     }    
// }
// tinhTienDien();
function timNghiem() {
    let a = Number(prompt("Nhap so a")), b = Number(prompt("nhap so b"));
    if (a==0) 
        if (b==0) 
            console.log("phuong trinh vo so nghiem");       
        else 
            console.log("phuong trinh vo nghiem");
    else {
        let x = (-b)/a;
        console.log("nghiem cua phuong trinh la", x);
    }
}
timNghiem();

