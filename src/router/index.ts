import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

const routerHash = createWebHashHistory()

const router = createRouter({
  history: routerHash,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router