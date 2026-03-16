Home Work 43 -------


Реалізуйте компонент <PostCatalog />, який відображає статті, отримані із зовнішнього сервера.

Список постів можна отримати, зробивши запит на сервер
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
console.log(res.data);

Структура, яку ви повинні отримати в результаті —

<div class="posts">
    <ul class="posts__list">
        <li class="posts_single-post" data-post-id="Id поста">
            <h3 class="posts__post-title">Заголовок поста</h3>
            <p class="posts__post-description">Контент поста</p>
        </li>
        <li class="posts_single-post" data-post-id="Id следующего поста">
            <h3 class="posts__post-title">Заголовок поста</h3>
            <p class="posts__post-description">Контент поста</p>
        </li>
    </ul>
</div>

Кожен наступний li — це окремий пост.

Підказки:

fetch — https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch