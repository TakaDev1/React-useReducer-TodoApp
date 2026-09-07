# React-useReducer-TodoApp

React の `useReducer` と `useContext` を使って Todo アプリを実装した練習用アプリです。

## 📌 概要

Todo の追加・完了状態の切り替え・削除・全削除を実装しています。

`useReducer` で Todo の状態変更を管理し、`useContext` を使って `state` と `dispatch` をコンポーネント間で共有しています。

## 🛠 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS
* useReducer
* useContext
* UUID

## 📂 ディレクトリ構成

```text
src/
├── features/
│   └── todo/
│       ├── components/
│       │   ├── TodoInput.tsx
│       │   └── TodoList.tsx
│       │
│       ├── contexts/
│       │   └── TodoContext.tsx
│       │
│       ├── reducers/
│       │   └── todoReducer.ts
│       │
│       └── types/
│           └── Todo.ts
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## ✨ 機能

* Todo の追加
* Todo の完了状態の切り替え
* Todo の削除
* Todo の全削除
* 完了した Todo への取り消し線表示

## 🧠 状態管理

### useReducer

`todoReducer` に Todo の状態変更処理を集約しています。

| Action   | 処理             |
| -------- | -------------- |
| `add`    | Todoを追加        |
| `toggle` | Todoの完了状態を切り替え |
| `remove` | Todoを削除        |
| `clear`  | Todoを全削除       |

### useContext

`TodoContext` を使用して、Todo の `state` と `dispatch` をコンポーネント間で共有しています。

```text
TodoProvider
    │
    ├── TodoList
    │
    └── TodoInput
```

## 🎨 UI

Tailwind CSS を使用してスタイリングしています。

完了した Todo には `line-through` を適用し、取り消し線を表示します。

## 🚀 起動方法

```bash
npm install
npm run dev
```

## 📚 学習目的

このアプリでは、以下の内容を実践しています。

* `useReducer` による状態管理
* `useContext` による状態共有
* Context と Reducer の組み合わせ
* TypeScript による型定義
* コンポーネントの責務分離
* Feature ベースのディレクトリ構成
* Tailwind CSS による UI スタイリング
* Git / GitHub を使用した Issue・Branch・Pull Request の運用
