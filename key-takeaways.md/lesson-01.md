# Lesson 1: Hello Playwright 🎭

_In this lesson, I started my journey with Playwright, a modern web automation framework. I also took my first steps with Git, learning how to manage code and push it to GitHub.💃✨_

## 🎭 What is playwright?

- Play wright is an automation framework for web applications
- Originally inspired by Puppeteer and developed by Microsoft.
- Official website: https://playwright.dev/
- Released on January 31, 2020.

## 🌟 Why is playwright?

- Hỗ trợ đa trình duyệt: Chromium, Firefox, WebKit
- Hỗ trợ đa ngôn ngữ: JavaScript, TypeScript, Python, C#, Java
- Hỗ trợ đa nền tảng: Windows, macOS, Linux
- Hỗ trợ đa mục đích: E2E testing, automation
- Tích hợp CI/CD dễ dàng
- Framework trending, nhiều cơ hội việc làm, cộng đồng phát triển mạnh mẽ
- Report đầy đủ thông tin
- Cú pháp đơn giản, dễ học

## ⚙️ Set up NVM

- Node.js: môi trường để chạy code JavaScript trên máy tính
- playwright chạy trên Node.js, nên cần cài đặt Node.js để sử dụng Playwright
- NVM = Node Version Manager: công cụ để quản lý nhiều phiên bản Node.js trên cùng một máy tính
- Lí do: để chuyển đổi giữa các phiên bản Node.js khi làm việc trên nhiều dự án yêu cầu phiên bản Node.js khác nhau

## Git and Git Hub 🚀

- Git: công cụ quản lý phiên bản code, giúp theo dõi lịch sử thay đổi của code
- GitHub: nền tảng lưu trữ code online
- GitHub sử dụng Git để quản lý code, nhưng Git có thể sử dụng mà không cần GitHub

## 🖥️ Terminal

- Terminal: 1 chương trình giao tiếp với máy tính bằng lệnh text thay vì bấm chuột
- giao diện dòng lệnh để tương tác với hệ điều hành
- các lệnh cơ bản với terminal:
  - `ls` (list): liệt kê các file và thư mục trong thư mục hiện tại
  - `touch`: tạo file mới
  - `rm` (remove): xóa file hoặc thư mục

## /: and \:

- /: dùng trong đường dẫn trên hệ điều hành Unix (Linux, macOS)
- \: dùng trong đường dẫn trên hệ điều hành Windows
- Ví dụ:
  - MacOS /home/user/project
  - Windows: C:\Users\user\project

## SSH 🔐

- SSH (Secure Shell): giao thức mạng để kết nối an toàn giữa máy tính và máy chủ từ xa
  Ví dụ : máy tính cá nhân (local) kết nối đến máy chủ (remote server (eg: Git Hub)) để quản lý hoặc truyền dữ liệu
- SSH sử dụng cặp khóa (key pair) để xác thực
- .id_rsa chứa private key,
- .id_rsa.pub chứa public key

## 🚀 How to push code manually to GitHub using SSH

1. Create repo on GitHub > Copy Link SSH <git@github.com:anhdang28/bba-test01.git>
2. In repo > Open terminal

```python
> git init
> git remote add origin <git@github.com:anhdang28/bba-test01.git>
> git add .
> git commit -m "init project"
> git push -u origin main
 // note: nếu nhìn thấy `show new branch main -> main thì push thành công
```
