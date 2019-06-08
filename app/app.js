'use strict';

import Header from "./views/components/header.js";
import Home from "./views/pages/home.js";
import About from './views/pages/about.js';

import Utils from './services/utils.js';

const routes = {
    '/': Home,
    '/about': About
};

const router = async () => {
    
    const header = null || document.getElementById("app-header");
    const content = null || document.getElementById("app-content");
    
    header.innerHTML = await Header.reader();
    await Header.after_render();

    let request = await Utils.parseRequestURL();
    
    let parseURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
     let page = routes[parseURL] ? routes[parseURL] : Home;
     content.innerHTML = await page.render();
     await page.after_render();    

}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);