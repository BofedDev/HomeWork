'use strict';
import Controller from "./controller.js";
import View from "./view.js";
import Model from "./model.js";

document.addEventListener('DOMContentLoaded', () => {
    const model = new Model();
    const view = new View();
    const controller = new Controller(model, view);

    controller.init();
});