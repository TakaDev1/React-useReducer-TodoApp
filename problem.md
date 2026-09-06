## **問題1**

Todoアプリを作成しなさい。
ただし、`useReducer` と `useContext` を組み合わせ、アプリ全体でTodoの状態を共有できるようにすること。

### **条件**

(1) useReducerを使用してTodoリストを管理すること
(2) useContextを使用して、複数コンポーネント間で状態とdispatchを共有すること
(3) Todoは `{ id: string, text: string, completed: boolean }` の形にすること
(4) アクションは `'add'`, `'toggle'`, `'remove'`, `'clear'` を扱うこと
(5) TailwindCSSでUIを整えること
(6) コンポーネント名は `Problem1` にすること