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
import Gallery from './pages/Gallery';
import HttpStatus62 from './pages/quiz/HttpStatus62';
import HttpStatus10 from './pages/quiz/HttpStatus10';
import HttpStatusQuiz from './pages/quiz/HttpStatusQuiz';
import HttpStatus30 from './pages/quiz/HttpStatus30';
import Quizzes from './pages/Quizzes';
import PortsQuiz from './pages/quiz/PortsQuiz';
import Ports10 from './pages/quiz/Ports10';
import Ports50 from './pages/quiz/Ports50';
import Ports30 from './pages/quiz/Ports30';
import PikaLayout from './layouts/PikaLayout';
import AllCards from './pages/AllCards';
import HBImène from './pages/HBImène';

const AppRouter = createBrowserRouter([
    {
        path: "/broken",
        element: <Layout><UnderConstruction /></Layout>
    },
    {
        path: "/gallery",
        element: <Layout><Gallery /></Layout>
    },
    {
        path: "/quiz",
        element: <Layout><Quizzes /></Layout>
    },
    {
        path: "/quiz/tcp-udp-ports",
        element: <Layout><PortsQuiz /></Layout>
    },
    {
        path: "/quiz/tcp-udp-ports/50",
        element: <Layout><Ports50 /></Layout>
    },
    {
        path: "/quiz/tcp-udp-ports/30",
        element: <Layout><Ports30 /></Layout>
    },
    {
        path: "/quiz/tcp-udp-ports/10",
        element: <Layout><Ports10 /></Layout>
    },
    {
        path: "/quiz/http-status",
        element: <Layout><HttpStatusQuiz /></Layout>
    },
    {
        path: "/quiz/http-status/all",
        element: <Layout><HttpStatus62 /></Layout>
    },
    {
        path: "/quiz/http-status/30",
        element: <Layout><HttpStatus30 /></Layout>
    },
    {
        path: "/quiz/http-status/10",
        element: <Layout><HttpStatus10 /></Layout>
    },
    {
        path: "/",
        element: <Layout><Home /></Layout>
    },
    {
        path: "/cards",
        element: <AllCards />
    },
    {
        path: "/hbimène",
        element: <HBImène />
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
        element: <PikaLayout><Pika /></PikaLayout>
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
