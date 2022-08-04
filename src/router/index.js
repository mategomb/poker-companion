import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView
		},
		{
			path: "/projects",
			name: "projects",
			component: () => import("../views/ProjectsView.vue")
		},
		{
			path: "/add",
			name: "add",
			component: () => import("../views/AddView.vue")
		},
		{
			path: "/stats",
			name: "stats",
			component: () => import("../views/StatsView.vue")
		},
		{
			path: "/charts",
			name: "charts",
			component: () => import("../views/ChartsView.vue")
		},
		{
			path: "/notes",
			name: "notes",
			component: () => import("../views/NotesView.vue")
		},
		{
			path: "/settings",
			name: "settings",
			// route level code-splitting
			// this generates a separate chunk (Settings.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/SettingsView.vue")
		}
	]
});

export default router;
