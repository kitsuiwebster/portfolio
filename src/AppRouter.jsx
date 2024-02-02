// AppRouter.jsx
import React from 'react';
import Articles from './pages/Articles';
import HackAPrompt from './pages/articles/HackAPrompt';
import CozyBot from './pages/projects/CozyBot'; 
import McJavaCmds from './pages/articles/McJavaCmds'; 
import Layout from './layouts/Layout';
import NotFound from './pages/NotFound';
import { createBrowserRouter } from "react-router-dom";
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CozyBotInvite from './pages/CozyBotInvite';
import Pika from './pages/Pika';
import UnderConstruction from './pages/UnderConstruction';
import Home from './pages/Home';
import Dihia from './pages/Dihia';
import Kasa from './pages/projects/Kasa';
import Qwenta from './pages/projects/Qwenta';
import SophieBluel from './pages/projects/SophieBluel';
import NinaCarducci from './pages/projects/NinaCarducci';
import Loading from './pages/Loading';

const AppRouter = createBrowserRouter([
    {
        path: "/broken",
        element: <Layout><UnderConstruction /></Layout>
    },
    {
        path: "/",
        element: <Layout><Home /></Layout>
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
        path: "/articles",
        element: <Layout><Articles /></Layout>
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
        path: "/projects/cozybot/invite",
        element: <Layout><CozyBotInvite/></Layout>
    },
    {
        path: "/pika",
        element: <Layout><Pika /></Layout>
    },
    {
        path: "/dihia",
        element: <Layout><Dihia /></Layout>
    },
    {
        path: "/projects/kasa",
        element: <Layout><Kasa /></Layout>
    },
    {
        path: "/projects/qwenta",
        element: <Layout><Qwenta /></Layout>
    },
    {
        path: "/projects/sophie-bluel",
        element: <Layout><SophieBluel /></Layout>
    },
    {
        path: "/projects/nina-carducci",
        element: <Layout><NinaCarducci /></Layout>
    },
    {
        path: "/loading",
        element: <Loading />
    },
    {
        path: "*",
        element: <Layout><NotFound /></Layout>
    }
]);

export default AppRouter;
