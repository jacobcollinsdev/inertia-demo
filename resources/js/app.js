// require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Layout from './Shared/Layout';

createInertiaApp({
  resolve: name => {
    let page = require(`./Pages/${name}`).default;

    // Some pages may have their own layout component. In that case,
    // check if the page has a layout - if it doesnt, assign
    // the default as the Layout component.
    page.layout ??= Layout;

    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component("Link", Link)
      .mount(el)
  },
})

//Inertia page loading progress bar
InertiaProgress.init({
    //Customise here
})
