import About from "../pages/About";
import Posts from "../pages/Posts";
import PostSingle from "../pages/PostSingle";
import NotFound from "../pages/NotFound";

export const routes = [
  {path: '/about', component: About, exact: true},
  {path: '/posts', component: Posts, exact: true},
  {path: '/posts/:id', component: PostSingle, exact: true},
  {path: '/not-found', component: NotFound, exact: true},
];
