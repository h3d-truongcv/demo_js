console.log('Hello World');

let ten_sinh_vien = [
     'Đức',
     'Tuấn',
     'Tuấn Anh'
];

console.log('Các sinh viên đang thực tập là:');
console.log(1, ten_sinh_vien[0]);
console.log(2, ten_sinh_vien[1]);
console.log(3, ten_sinh_vien[2]);


let ten_sinh_vien_2 = [
     'Đức',
     'Tuấn',
     'Tuấn Anh 1',
     'Đức',
     'Tuấn',
     'Tuấn Anh 2',
     'Đức',
     'Tuấn',
     'Tuấn Anh 3',
     'Đức',
     'Tuấn',
     'Tuấn Anh 4',
     'Đức',
     'Tuấn',
     'Tuấn Anh 5',
     'Đức',
     'Tuấn',
     'Tuấn Anh 6',
     'Đức',
     'Tuấn',
     'Tuấn Anh 7',
     'Đức',
     'Tuấn',
     'Tuấn Anh 8',
     'Đức',
     'Tuấn',
     'Tuấn Anh 9',
     'Đức',
     'Tuấn',
     'Tuấn Anh10',
     'Đức',
     'Tuấn',
     'Tuấn Anh11',
     'Đức',
     'Tuấn',
     'Tuấn Anh12'
];

console.log('Các sinh viên đang thực tập là:');
// 10 chú
let a = 0;
for (let i = a; i < 10; i++) {
     console.log(i + 1, ten_sinh_vien_2[i]);
}

// tất cả các chú
console.log('Sỹ số lớp:' + ten_sinh_vien_2.length);

//boolean : true || false
let check = true;
if (check) {
     console.log('Đây là true');
} else {
     console.log('Đây là false');
}

// thêm 1 giá trị vào mảng
ten_sinh_vien_2.push("Chung");

for (let i = a; i < ten_sinh_vien_2.length; i++) {
     console.log(i + 1, ten_sinh_vien_2[i]);
}


// Tạo 1 mảng rỗng để lưu tên sinh viên. Tên biến là lop_h3d
// Viết 1 hàm để add tên sinh viên mới vào mảng trên
// Viết 1 hàm để tìm ra các ông sinh viên có tên dài nhất

let lop_h3d = []; // mảng rỗng

let addStudent = function (tenHocSinh) {
     lop_h3d.push(tenHocSinh);
     return lop_h3d;
}
let max = 0;

addStudent('tuan');
addStudent('tuan 1');
addStudent('tuan 12');
addStudent('tuan 123');
addStudent('tuan 13');

let timMax = function () {
     let longest = [];
     console.log('khởi tạo max = ', max)

     for (let i = 0; i < lop_h3d.length; i++) {
          let tenHocVien = lop_h3d[i];
          console.log(tenHocVien, tenHocVien.length);

          if (tenHocVien.length > max) {
               max = tenHocVien.length;
          }
     }

     for (let i = 0; i < lop_h3d.length; i++) {
          let tenHocVien = lop_h3d[i];
          if (tenHocVien.length == max) {
               longest.push(tenHocVien);
          }
     }
     return longest;
}
let max1 = 0;

let timMaxNew = function () {
     let longest = [];
     console.log('khởi tạo max = ', max)

     for (let i = 0; i < lop_h3d.length; i++) {
          let tenHocVien = lop_h3d[i];
          console.log(tenHocVien, tenHocVien.length);

          if (tenHocVien.length > max) {
               longest = [];
               max = tenHocVien.length;
          }

          if (tenHocVien.length == max) {
               longest.push(tenHocVien);
          }
     }

     let return1 = {
          'max là ': max,
          'các sinh viên': longest
     };
     return return1;
}

let dt1 = {
     ten: 'dt 1',
     giaban: 1000
}
let dt2 = {
     ten: 'dt 1',
     giaban: 1000
}

let mang_dt = [dt1, dt2];

console.log(mang_dt);

// BTVN
// Tạo 1 mảng rỗng để lưu tên điện thoại
// Viết 1 hàm để add 1 đối tượng điện thoại mới vào mảng trên
// Viết 1 hàm để tìm ra các ông điện thoại có giá cao nhất 
// Viết 1 hàm để tìm ra các ông điện thoại có giá thấp nhất 
// ================================================================
// Tìm hiểu về các sự kiện trong javascript: event click, innerHTML, appendChild, localStorage
