import AppHome from "./packs/components/AppHome.vue";
import AppStock from "./packs/components/Stock.vue";
import AppPortfolio from "./packs/components/Portfolio.vue";

export const routes = [
  { path: "/", component: AppHome },
  { path: "/portfolio", component: AppPortfolio },
  { path: "/stocks", component: AppStock }
];
