import Model from './notes/Model.js';
import View from './notes/View.js';
import Controller from './notes/Controller.js';

const model = new Model();
const view = new View();
const controller = new Controller(model, view);

controller.init();