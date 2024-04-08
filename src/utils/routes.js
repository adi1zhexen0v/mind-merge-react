import FormPage from "../pages/FormPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";
import PostsPage from "../pages/PostsPage";
import RegisterPage from "../pages/RegisterPage";
import {
  FORM_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  POSTS_PAGE_ROUTE,
  POST_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
} from "./consts";

export const routes = [
  {
    path: HOME_PAGE_ROUTE,
    element: <HomePage />,
  },
  {
    path: LOGIN_PAGE_ROUTE,
    element: <LoginPage />,
  },
  {
    path: REGISTER_PAGE_ROUTE,
    element: <RegisterPage />,
  },
  {
    path: POSTS_PAGE_ROUTE,
    element: <PostsPage />,
  },
  {
    path: POST_PAGE_ROUTE,
    element: <PostPage />,
  },
  {
    path: FORM_PAGE_ROUTE,
    element: <FormPage />,
  },
];
