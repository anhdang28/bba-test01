# Lesson 3: JavaScript & Git Part 2

As I dive deeper into JavaScript, more challenges are coming my way. There are many new syntaxes, operators, and concepts to remember, which can be a bit overwhelming at times. Still, I’m enjoying the learning process and growing a little with every challenge. 🧮💃✨

## 1. Git (Part 2)

○ Undo action
○ Branching
○ .gitignore

```python
git branch <tên-nhánh>
// Tạo nhánh mới

git restore --staged <tên-file>
// Un-stage một file cụ thể từ staging về working directory

git restore --staged .
// Un-stage tất cả file từ staging về working directory

git branch
// Xem đang ở nhánh nào

git checkout <tên-nhánh>
// Chuyển sang nhánh mới

git branch -D <tên-nhánh>
// Xóa nhánh - ko thể xóa nhánh nếu đang ở nhánh đó; ko xóa nhánh chính

git push -D origin <tên-nhánh>
// Xóa nhánh trên remote online

git switch <tên-nhánh>
// Chuyển sang nhánh mới (thay thế cho checkout)

git reset --soft HEAD~1
// Hoàn tác commit nhưng giữ lại thay đổi trong staging area

git commit --amend -m "new commit message"
// Sửa lại msg của commit cuối cùng

git ignore <tên-file>
// Thêm file vào .gitignore để git bỏ qua

rm <tên-file>
// Xóa nhanh file khỏi thư mục làm việc

```

## 2. JavaScript (Part2)

## 🟨 Conditions

Câu điều kiện dùng để kiểm tra một đoạn logic trước khi chạy

Nếu điều kiện đúng thì mới chạy

Trong JavaScript, có các loại câu điều kiện sau:

### if

```python
if (<điều kiện>) {
    // code...
    }
```

### if...else

```python
if (<điều kiện>) {
    // code nếu đúng...
    } else {
    // code nếu sai...
    }
```

### if...else if...else

```python
if (<điều kiện 1>) {
    // code nếu điều kiện 1 đúng...
} else if (<điều kiện 2>) {
    // code nếu điều kiện 2 đúng...
} else {
    // code nếu tất cả điều kiện đều sai...
}
```

### switch...case

```python
switch (<biểu thức>) {
    case <giá trị 1>:
        // code nếu biểu thức bằng giá trị 1
        break;
    case <giá trị 2>:
        // code nếu biểu thức bằng giá trị 2
        break;
    default:
        // code nếu biểu thức không khớp với giá trị nào
}
```

## 🔁 Loops

Vòng lặp dùng để thực hiện một đoạn code nhiều lần dựa trên một điều kiện nào đó.

### Cấu trúc for

`for (<điều kiện khởi tạo>; <điều kiện lặp>; <điều kiện thay đổi>) {// code thực thi}`

```python
for (let i = 0; i < 5; i++) {
    console.log(i); // In ra các số từ 0 đến 4
    }
```

### Console log (advanced)

```python
console.log(‘Toi la Linh’); // Sử dụng với nháy đơn
console.log(“Toi la Phong”); // Sử dụng với nháy kép

let name = “Linh”;
console.log(`Toi la ${name}`); // Sử dụng với dấu backticks và template literals
console.log(“Toi ten la” + name + “”) // Sử dụng cộng chuỗi
```

# Bonus: Cú pháp Markdown cơ bản

# Tiêu đề H1

## Tiêu đề H2

### Tiêu đề H3

#### Tiêu đề H4

##### Tiêu đề H5

// cmd shift v để chuyển mark down

**Chữ in đậm**

_Chữ in nghiêng_

**_Chữ đậm và nghiêng_**

~~Gạch ngang~~

`Đoạn code inline`

```python
# Đoạn code block
def hello_world():
    print("Hello, World!")
```

#### Danh sách gạch đầu dòng

- Mục 1
- Mục 2
- Mục 3

#### Danh sách có thứ tự

1. Mục 1
2. Mục 2
3. Mục 3

#### Link

[PlaywrightVN](https://www.playwrightvn.com)

#### Hình ảnh

![Hình ảnh khóa học từ folder image](./images/api-testing-course.png)

![Hình ảnh khóa học từ url](https://www.playwrightvn.com/images/api-testing-course.png)

#### Blockquote

> Đây là một blockquote - được dùng để trích dẫn hoặc nhấn mạnh một đoạn văn bản.  
> Có thể viết nhiều dòng
>
> > Nested blockquote: Đây là một blockquote lồng nhau.

---

kẻ ngang

| column1 | column2 |
| ------- | ------- |
| Data 1  | Data 2  |
