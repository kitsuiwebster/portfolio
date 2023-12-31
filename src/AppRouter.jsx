// AppRouter.jsx
import React from 'react';
import Main from './pages/Main';
import Articles from './pages/Articles';
import HackAPrompt from './pages/articles/HackAPrompt';
import CozyBot from './pages/projects/CozyBot'; 
import McJavaCmds from './pages/articles/McJavaCmds'; 
import Layout from './layouts/Layout';
import NotFound from './pages/NotFound';
import { createBrowserRouter } from "react-router-dom";
import Projects from './pages/Projects';
import Contact from './pages/Contact';

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
        path: "/projects/cozybot",
        element: <Layout><CozyBot /></Layout>
    },
    {
        path: "/articles/minecraft-java-admin-commands",
        element: <Layout><McJavaCmds/></Layout>
    },
    {
        path: "/contact",
        element: <Layout><Contact/></Layout>
    },
    {
        path: "/projects",
        element: <Layout><Projects/></Layout>
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default AppRouter;
