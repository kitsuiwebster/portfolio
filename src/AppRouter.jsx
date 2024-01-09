// AppRouter.jsx
import React from 'react';
import Main from './pages/Main';
import Articles from './pages/Articles';
import HackAPrompt from './pages/articles/HackAPrompt';
import CozyBot from './pages/articles/CozyBot'; // Import CozyBot
import Layout from './layouts/Layout';
import NotFound from './pages/NotFound';
import { createBrowserRouter } from "react-router-dom";

const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout><Main /></Layout>
    },
    {
      path: "/articles",
      element: <Layout><Articles /></Layout>
    },
    {
      path: "/articles/hackaprompt2023",
      element: <Layout><HackAPrompt /></Layout>
    },
    {
      path: "/articles/cozybot",
      element: <Layout><CozyBot /></Layout>
    },
    {
      path: "*",
      element: <NotFound />
    }
]);

export default AppRouter;
