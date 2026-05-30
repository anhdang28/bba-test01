# Lesson 2: Getting Familiar with Git & JavaScript 🟨

_In Lesson 2, I explored Git commands and JavaScript fundamentals. With my mentor’s patient and detailed guidance, I discovered that JavaScript operators are actually much more interesting than I expected. Learning them felt like solving fun little logic puzzles!🔢_

## ➡️ Git - Version Control System

- hệ thống quản lý phiên bản, giúp theo dõi lịch sử thay đổi của code
- có thể quay lại phiên bản trước đó nếu cần
- cha đẻ là **Linux Torvalds** (cha đẻ của hệ điều hành Linux)
- free, open-source, phổ biến, dễ dùng

## What are the differences between Git and GitHub🐙?

### Git

- là 1 phần mềm cài trên máy cá nhân
- Git là công cụ quản lý phiên bản code, giúp theo dõi lịch sử thay đổi của code
- là 1 command line tool, có thể sử dụng qua terminal
- có tính năng của Version Control System

### GitHub

- là 1 dịch vụ web, có giao diện đồ họa để quản lý code online như tạo repo, quản lý pull request, issue, v.v
- GitHub là nền tảng lưu trữ code online, sử dụng Git để quản lý
- có tính năng của Version Control System và các tính năng khác như Github Actions, Github Copilot
- GitHub sử dụng Git để quản lý code, nhưng Git có thể sử dụng mà không cần GitHub

### Git - three states

- 🔴 **working directory**: nơi chứa các file code mới, hoặc file có thay đổi trên máy cá nhân
- 🟢 **staging area**: nơi chứa các file đã chuẩn bị để commit
- ⚪ **repository**: nơi chứa các commit đã được lưu trữ để chuẩn bị đẩy lên GitHub

## Basic Git Workflow 🔀

### 1. Khởi tạo repo mới:

_(làm 1 lần duy nhất cho project)_

`git init`.

_→tạo một repository Git mới trong thư mục hiện tại_

### 2. Tạo repo Github và liên kết mới repo local với remote:

_(làm 1 lần duy nhất cho project)_

`git remote add origin <git@github.com:anhdang28/bba-test01.git>`

_→liên kết repo local với repo remote trên GitHub, chỉ làm 1 lần để thiết lập kết nối giữa repo local và repo remote trên GitHub._

_→Sau đó, có thể sử dụng `git push` để đẩy code lên GitHub mà không cần phải thiết lập lại kết nối mỗi lần._

### 3. Thêm file vào staging:

_(làm mỗi khi có thay đổi cần commit)_

`git add <file1>` _→thêm file1 vào staging area để chuẩn bị commit_

`git add <file1> <file2>` _→thêm nhiều file vào staging area cùng lúc_

`git add .` _→thêm tất cả các file đã thay đổi vào staging area để chuẩn bị commit_

### 4. Commit file vào Repository area:

_(làm mỗi khi có thay đổi cần commit)_

`git commit -m "init project"`

_→message là "init project" mô tả commit khởi tạo dự án, có thể thay đổi message tùy ý_

### 5. Push code lên remote GitHub:

`git push origin main`

_→đẩy các commit đã tạo lên nhánh main của repo remote trên GitHub, làm mỗi khi có thay đổi cần commit_

_→nếu nhìn thấy `... main -> main` là push thành công và code đã được đẩy lên GitHub._

## Git commands for Automation Tester✅

#### Git Basic

`git init` Khởi tạo repo mới cho test project

`git add <file>` Thêm test files vào commit

`git commit -m "message"` Lưu lại thay đổi test

`git status` Check trạng thái trước khi commit _> file màu đỏ 🔴 vùng working directory, màu xanh 🟢 đã staged_

`git clone <url>` Clone test repository từ remote

`git push` / `git pull` Đồng bộ code với team

`git checkout <branch>` Chuyển branch để test feature mới

#### Git History & Branching

`git log` Xem lịch sử thay đổi test

`git branch` Tạo branch riêng cho test case mới

`git merge` Gộp test code sau khi hoàn thành

#### Git - commit

`git revert` Dùng khi cần undo commit cụ thể

`git reset --hard` Nguy hiểm, dễ mất data - tránh dùng

#### Git config

`git config --global user.name "phuonganh"` _Thiết lập tên người dùng cho commit toàn hệ thống_

`git config --global user.email "phuonganh"` _Thiết lập email cho commit toàn hệ thống_

`git config user.name "phuonganh"` _Thiết lập tên người dùng cho commit trong repo hiện tại_

_⚠️ hạn chế sử dụng `--global` nếu làm việc trên nhiều dự án yêu cầu thông tin commit khác nhau, có thể sử dụng `git config user.name "phuonganh"` và `git config user.email "abc@gmail.com"`_

### Git -commit convention <type>: <subject>

- Sử dụng convention giúp team hiểu nhanh mục đích commit
- Phân loại commit rõ ràng giúp quản lý code hiệu quả hơn
- Giúp team nhanh chóng nắm được nội dung thay đổi mà không cần đọc chi tiết code

`feat` Thêm feature mới feat: add login functionality

`fix` Sửa bug fix: resolve login error

`docs` Thêm/sửa tài liệu docs: update README

`refactor` Viết lại code, ko đổi chức năng refactor: clean up utils

`test` Thêm test test: add unit tests for login

`chore` Công việc lặt vặt (config, build) chore: update dependencies

**Examples**

```python
git commit -m "feat: add login test case"
git commit -m "fix: update test data for registration"
git commit -m "docs: update README with test instructions"
```

# JavaScript - Part 1

## What is JavaScript?

- ngôn ngữ lập trình phổ biến nhất thế giới, được sử dụng rộng rãi để phát triển web, mobile, desktop, game, v.v
- ra đời 1995, bởi Brendan Eich
- giúp cho browser hoạt động được
- khi chạy trên máy cá nhân, cần môi trường Node.js để chạy code JavaScript

## Play with basic JavaScript operators

- Cú pháp chạy trên terminal: `node <file.js>` để chạy file JavaScript
- Fist JavaScript code:

```python
`console.log("Hello, Playwright!");`
// output: Hello, Playwright!
```

### Comment code //

Cú pháp comment code

- comment 1 dòng: `// comment`
- comment nhiều dòng: `/* comment */`
- Comment giúp giải thích ý nghĩa của code, hoặc tạm thời vô hiệu hóa code mà không xóa nó đi

```python
   console.log(1 + 2);

// output: 3
/*
đoạn code nằm trong comment,
máy sẽ bỏ qua khi chạy code
*/
```

### Variables 🔤

- Biến là khái niệm cơ bản nhất trong lập trình. Từ biến trong “biến thiên”, có nghĩa là thay đổi được.
- Cú pháp khai báo biến: `let`, `const`, `var`
- `let`: ko cho phép khai báo lại,ra đời sau, hiện đại, an toàn, phạm vi block scope
- `var`: cho phép khai báo lại, ra đời trước, cũ, ít dùng, có thể gây nhầm lẫn, phạm vi global -`const`: biến hằng số, không thể thay đổi giá trị sau khi đã gán, phạm vi block scope

```python
let name = "Phuong Anh"; // biến có thể thay đổi giá trị
const PI = 3.14; // biến hằng số, không thể thay đổi giá trị
var age = 30; // cách khai báo cũ, không khuyến khích dùng
```

### JS - Data Types

- Kiểu nguyên thủy **_Primitive types_**:  
  string, number, boolean, null, undefined, symbol, BigInt
- Kiểu tham chiếu **_Reference types_**: object

#### Number

```python
const age = 25; // Số nguyên
const price = 19.99; // Số thực
const infinity = Infinity; // Vô hạn
const notANumber = NaN; // Không phải là số
```

#### String

```python
const name = "Phuong Anh"; // Dùng nháy kép
const greeting = `Hello, ${name}!`; // Dùng Template literal
const message = 'Hello'; // Dùng nháy đơn
const template = `Age: 10`; // Dùng “backtick” (dấu huyền cạnh số 1)
```

#### Boolean

```python
Boolean: Giá trị logic
const isActive = true; // Giá trị đúng
const isComplete = false; // Giá trị sai
```

#### Null và Undefined

```python
const emptyValue = null; // Biến có giá trị null, không có giá trị nào
let uninitialized; // Biến chưa được khởi tạo, có giá trị undefined
```

#### Type of operator

- `typeof` giúp kiểm tra kiểu dữ liệu

```python
console.log(typeof name); // output: string
console.log(typeof age); // output: number
console.log(typeof isCorrect); // output: boolean
```

### Toán tử số học 🔢 ➗

**Toán tử số học**: +, -, \*, /, %, ++, --

Toán hạng có thể là số hoặc chuỗi (trong trường hợp +)

```python
Ví dụ:
const x = 5 + 3;
// 5, 3 là toán hạng
// + toán tử 2 ngôi


const x = 5 + 3; // Cộng
const y = 10 - 4; // Trừ
const a = 6 * 7; // Nhân
const b = 20 / 5; // Chia
const c = 10 % 3; // Lấy phần dư
```

#### Toán tử so sánh

```python
const isEqual = 5 == '5';
// true
// So sánh giá trị

const isStrictEqual = 5 === '5';
// false
// So sánh bằng tuyệt đối, cả giá trị và kiểu dữ liệu

const isNotEqual = 5 != '5';
// false
// So sánh giá trị

const isGreater = 10 > 5;
// true
// So sánh lớn hơn

const isLess = 3 < 7;
// true
// So sánh nhỏ hơn
```

#### Toán tử `&&`, `||`, `!`

```python
const isTrue = true && true; // AND, output: true
const isFalse = true && false; // AND, output: false
const isEither = true || false; // OR, output: true
const isNotTrue = !true; // NOT, output: false
```

#### Prefix and Postfix

- `++` và `--` có thể dùng ở dạng prefix hoặc postfix
- Postfix (hậu tố): `a++` (tăng sau - trả về (giá trị) trước)
- Prefix (tiền tố): `++a` (tăng trước - trả về (giá trị) sau)

```python
let a = 5;
console.log(a++); // 5 (postfix, trả về giá trị trước rồi tăng sau)
console.log(++a); // 7 (prefix, tăng trước rồi trả về giá trị)
```
