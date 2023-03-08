# ProjectWeb

#sourcecode

# RN26-thucntd

RN26

# Cài đặt: Visual Studio Code

### Download:

> https://code.visualstudio.com/

### Cài đặt các extensions:

- Auto Close Tag
- Auto Rename Tag
- HTML CSS Support
- HTML Snippets
- Live Server
- Prettier - Code formatter
- Visual Studio IntelliCode
- Bracket Pair Colorizer 2
- Color Highlight
- Dracula Official (theme)

## Một số công cụ vẽ Wireframe + Mockup

- https://moqups.com/
- ADOBE XD (https://www.adobe.com/sea/products/xd.html)
- FIGMA (https://www.figma.com/downloads)

## Một số công cụ về màu

- https://colorhunt.co/
- https://coolors.co/
- https://colors.eva.design/
- https://mycolor.space/
- https://material.io/resources/color/#!/?view.left=0&view.right=0
- https://flatuicolors.com/
- https://color.adobe.com/create/color-wheel
- https://colorpalettes.net/
- https://www.materialpalette.com/

## Một số Website về thiết kế:

-https://collectui.com/

## Một số website cung cấp ảnh chất lượng cao miễn phí

- https://pixabay.com/
- https://unsplash.com/

# GIT

## Install

https://git-scm.com/downloads

- Check cài đăt thành công:

* Window: open cmd -> git -v

MAC:

- open terminal
- Install brew: https://docs.brew.sh/Installation
- Install git: brew install git
- Check git: git -v

## Create repository github

- Login: https://github.com/
- Tạo 1 repository

## Clone repository

- Open VScode
- Open folder code
- Open terminal vscode tại folder code
- Nhập: git clone <HTTPS của repository>

* Lưu ý: Cần phải kiểm soát chặt chẽ cấu trúc folder code.

- Repo bản thân tự tạo: dùng để code (code nhớ FORMAT)
- Repo document: Yêu cầu không thay đổi code. Chỉ dùng git pull để lấy tài liệu.

## Step git push code

- Lần đầu:

* Khởi tạo git: git init
* Config email : git config --global user.email '<email>'
* Config username : git config --global user.name '<name>'
* Add toàn bộ file change: git add .
* Tạo commit mô tả: git commit -m 'homework1'
* git push

- Những lần sau:

* Add toàn bộ file change: git add .
* Tạo commit mô tả: git commit -m 'homework1'
* git push

## Run HTML file:

- MAC: open index.html
- Window: start index.html

* NOTE:

- Có thể chọn RUN -> START (F5)
- Open folder -> click double vào tên file html.

#ICON

- Chèn link source: <script src="https://kit.fontawesome.com/042e59ddf7.js" crossorigin="anonymous"></script>
- Web: fontawesome.com

#ANIMATION

- C1: CHÈN LINK TRỰC TIẾP VÀO <HEAD>: https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css
- C2: Mở link đã chèn trong C1 --> copy path --> tạo file ANIMATION.MIN.CSS --> dán path vào và link với file HTML

---

# Getting Started with Create React App (https://create-react-app.dev/docs/adding-typescript/)

npx create-react-app my-app --template typescript

# Install

**Language**
I18n (https://react.i18next.com/guides/quick-start) npm install react-i18next i18next --save

**Framework**
Bootstrap (https://getbootstrap.com/docs/5.0/getting-started/introduction/) npm install bootstrap
React_Bootstrap (https://react-bootstrap.netlify.app/getting-started/introduction/) npm install react-bootstrap bootstrap

**Package**
React Router (https://reactrouter.com/en/main) npm install react-router-dom

**Redux**
(https://redux.js.org/introduction/getting-started)

**Redux toolkit**
(https://redux-toolkit.js.org/usage/usage-with-typescript)
npm install redux react-redux @reduxjs/toolkit @types/redux-logger

Note: Toolkit useAppDispatch & useAppSelector
Declare export type RootState = ReturnType; export type AppDispatch = typeof store.dispatch; type TypedDispatch = ThunkDispatch<T, any, AnyAction>; export const useAppDispatch = () => useDispatch<TypedDispatch>(); export const useAppSelector: TypedUseSelectorHook = useSelector;
Usage const dispatch = useAppDispatch(); const state = useAppSelector((state: AppState) => state.xxx);
