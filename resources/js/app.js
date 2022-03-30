require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import 'mdb-vue-ui-kit/css/mdb.min.css';

import    {
    MDBBtn,
    MDBModal,
    MDBModalBody,

} from 'mdb-vue-ui-kit';
createInertiaApp({
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .component("MDBBtn", MDBBtn)
            .component("MDBModal", MDBModal)
            .component("MDBModalBody", MDBModalBody)
            .mount(el);
    },
});
