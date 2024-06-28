/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import ContactAdd from "../pages/ContactAdd.vue";
import contactsManager from "../pages/contactsManager.vue";
import ContactsEdit from "../pages/contactsEdit.vue";
import ContactsView from "../pages/ContactsView.vue";
import notFound from "../pages/notFound.vue";
const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/add",
    name: "ContactAdd",
    component: ContactAdd,
  },
  {
    path: "/contactsManager",
    name: "contactsManager",
    component: contactsManager,
  },
  {
    path: "/ContactsEdit/:contactId",
    name: "ContactsEdit",
    component: ContactsEdit,
  },
  {
    path: "/ContactsView/:contactId",
    name: "ContactsView",
    component: ContactsView,
  },
  {
    path: "/:pathMacth(.*)*",
    name: "notFound",
    component: notFound,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
