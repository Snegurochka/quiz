import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VeeValidatePlugin from './plugins/validation';
import { auth } from './plugins/firebase';

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

let vm;

auth.onAuthStateChanged(() => {
    if (!vm) {
        vm = createApp(App);

        // BaseComponents
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

        vm.use(store);
        vm.use(router);
        vm.use(VeeValidatePlugin);
        vm.mount('#app');
    }
})

