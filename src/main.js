import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const vm = createApp(App);

// TODO BaseComponents
const requireComponent = require.context(
    "./components",
    false,
    /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);

    const componentName = upperFirst(
        camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
    );

    vm.component(componentName, componentConfig.default || componentConfig);
});

vm.use(store).use(router).mount('#app')
