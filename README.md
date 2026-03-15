Home Work 42 -------


Реалізуйте компонент, який складається з двох кнопок і логу подій:
Лог — це список значень, кожне з яких з’являється після натискання однієї з двох кнопок. Унизу знаходяться старіші події, зверху — новіші.
Ліва кнопка + додає в лог рядок із новим значенням, що дорівнює: значення «найновішого наявного запису логу» + 1
Права кнопка - додає в лог рядок із новим значенням, що дорівнює: значення «найновішого наявного запису логу» — 1
При кліку на запис у лозі він видаляється.


Початковий HTML —

<div>
  <div class="btn-group font-monospace" role="group">
    <button type="button" class="btn btn-outline-success">+</button>
    <button type="button" class="btn btn-outline-danger">-</button>
  </div>
</div>

Після натискання послідовності +, +, -, +:

<div>
  <div class="btn-group font-monospace" role="group">
    <button type="button" class="btn btn-outline-success">+</button>
    <button type="button" class="btn btn-outline-danger">-</button>
  </div>
  <div class="list-group">
    <button type="button" class="list-group-item list-group-item-action">2</button>
    <button type="button" class="list-group-item list-group-item-action">1</button>
    <button type="button" class="list-group-item list-group-item-action">2</button>
    <button type="button" class="list-group-item list-group-item-action">1</button>
  </div>
</div>

Кожне натискання кнопки додає в лог новий рядок зверху.