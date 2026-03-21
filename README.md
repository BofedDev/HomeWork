Home Work 44 -------

Реалізуйте компонент <MarkdownEditor />, який є React-обгорткою для плагіна @toast-ui/editor. Цей плагін дозволяє вбудувати на сторінку Markdown-редактор
https://ui.toast.com/tui-editor
Використання — script.js
Компонент приймає функцію через властивість onContentChange, яка викликається при кожній зміні в редакторі. Функція приймає вхідний вміст редактора. Приклад використання можна побачити у файлі src/index.jsx.

import '@toast-ui/editor/dist/toastui-editor.css';
import ReactDOM from 'react-dom';
import React from 'react';
import MarkdownEditor from './MarkdownEditor.jsx';
ReactDOM.render(
<MarkdownEditor onContentChange={console.log} />,
document.getElementById('container'),
);

Приклад роботи редактора можна переглянути на сторінці документації.
Обов’язково реалізуйте все на функціональних компонентах.