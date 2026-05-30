# Lesson 4: JavaScript Part 3 - Advanced Concepts

More syntax, more challenges, more confusion… but also more learning! 😵‍💫➡️😎🧮✨

## Function

- Viết 1 lần, dùng nhiều lần
- Có thể nhận tham số và trả về giá trị

**Cú pháp**

```python
function <functionName>(<parameter1>, <parameter2>, ...) {
    // code to be executed
    return
};

functionName (arguments);
```

**Example**

```python
function trangTri(baitap) {
  //baitap = parameter
  const a = 10;
  console.log(`Bat dau lam bai tap so: ${baitap}`); // template literal + back tick
}
```

trangTri(1);
console.log("Code của bài tập 1");
trangTri(2);
console.log("Code của bài tập 2");
trangTri(3);
console.log("Code của bài tập 3");

### Advanced JavaScript Concepts:

**const**

```python
const str = "Anh";
const age = 26;
const isNgoo = false;

console.log(typeof str);
console.log(typeof age);
console.log(typeof isNgoo);
```

**operator**

```python
const a = 5;
const b = 10;
const c = 10;

// console.log(a < b);
console.log(a === b); // a con bang b khong?
console.log(c === b);
console.log(a !== b);
console.log(c !== b); // c co khac b k
```

**const**

```python
const nhieuHon6th = true;
const chinhthuc = false;

const thuong1Trieu = nhieuHon6th && chinhthuc;
console.log(thuong1Trieu);

const thuong1Trieu = nhieuHon6th || chinhthuc;
```

**condition**

```python
let loiChao = "";
const hour = 15;

if (hour < 12) {
  loiChao = "good morning";
} else {
  loiChao = "good afternoon";
}
console.log(loiChao);
```

```python
const diemSo = ;
let xepHang = "Gioi";

if (diemSo < 5) {
  xepHang = "Kem";
} else if (diemSo < 7) {
  xepHang = "TB";
} else if (diemSo < 9) {
  xepHang = "Kha";
}

console.log(xepHang);
```

```python
const thamNien = 6;
let tienThuong = "";

if (thamNien < 3 && thamNien >= 1) {
  tienThuong = 100;
} else if (thamNien < 6) {
  tienThuong = 200;
} else {
  tienThuong = 500;
}

console.log(tienThuong);
```

**loop**

```python
for (let i = 0; i < 5; i++) {
  console.log(i + 1 + "hello");
  console.log(i + 2 + "hello");
}

```

**for...in Loop**
_Dùng để duyệt qua các thuộc tính (properties) của một object._

```python
const arr = [100, 298, 4334, 954, 6656];

for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 1) {
    console.log(arr[i]);
  }
}
```

```python
const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 1; i < arr2.length; i += 2) {
  console.log(arr2[i]);
}
const arrStudents = [
  {
    name: "Annie",
    class: "K23",
  },
  {
    name: "Bob",
    class: "K23",
  },
];
```

console.log(arrStudents[0].name); // "Annie"
console.log(arrStudents[1].class); // "Bob"

**console.log**

```python
let address = "hcm";
console.log(`Toi dang o:${address}`);
```

```python
for (let i = 0; i < arrStudents.length; i++) {
  console.log(`${arrStudents[i].class} ${arrStudents[i].name}`);
}
```

**break**
_break dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức._

```python
// Thoát khi tìm thấy giá trị
for (let i = 0; i < 10; i++) {
    if (i === 5) {
    break; // Thoát vòng lặp khi i = 5
    }
console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

```python
const arr = [100, 29, 5, 344, 222];

for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item === 5) {
    break; // Dùng để "phá vỡ" (thoát khỏi) vòng lặp ngay lập tức.
}

console.log(item);
}
console.log("End!");
```

**continue**
_continue dùng để bỏ qua phần còn lại của vòng lặp hiện tại và tiếp tục với lần lặp tiếp theo._

```python
// Bỏ qua số chẵn
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
    continue; // Bỏ qua số chẵn
    }
console.log(i);
}
// Output: 1, 3, 5, 7, 9
```

```python
const arr = [100, 29, 5, 344, 222];

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  if (item === 5) {
    continue; // Dùng để bỏ qua lần lặp hiện tại
};
console.log(item);
```
