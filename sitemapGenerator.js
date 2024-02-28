const fs = require('fs');
const path = require('path');

const routes = [
    // { path: "/broken", changefreq: "yearly", priority: 0.1 },
    { path: "/gallery", changefreq: "monthly", priority: 0.5 },
    { path: "/quiz", changefreq: "monthly", priority: 0.9 },
    { path: "/quiz/tcp-udp-ports", changefreq: "monthly", priority: 0.8 },
    { path: "/quiz/tcp-udp-ports/50", changefreq: "monthly", priority: 0.1 },
    { path: "/quiz/tcp-udp-ports/30", changefreq: "monthly", priority: 0.1 },
    { path: "/quiz/tcp-udp-ports/10", changefreq: "monthly", priority: 0.1 },
    { path: "/quiz/http-status", changefreq: "monthly", priority: 0.8 },
    { path: "/quiz/http-status/all", changefreq: "monthly", priority: 0.1 },
    { path: "/quiz/http-status/30", changefreq: "monthly", priority: 0.1 },
    { path: "/quiz/http-status/10", changefreq: "monthly", priority: 0.1 },
    { path: "/", changefreq: "weekly", priority: 1.0 },
    { path: "/articles/hackaprompt2023", changefreq: "yearly", priority: 0.9 },
    { path: "/projects/cozybot", changefreq: "monthly", priority: 0.9 },
    { path: "/articles/minecraft-java-admin-commands", changefreq: "yearly", priority: 0.7 },
    { path: "/articles", changefreq: "monthly", priority: 0.7 },
    { path: "/contact", changefreq: "yearly", priority: 0.4 },
    { path: "/projects", changefreq: "monthly", priority: 0.7 },
    { path: "/projects/cozybot/invite", changefreq: "monthly", priority: 0.9 },
    // { path: "/pika", changefreq: "yearly", priority: 0 },
    { path: "/dihia", changefreq: "monthly", priority: 0.5 },
    // { path: "/projects/kasa", changefreq: "yearly", priority: 0 },
    // { path: "/projects/qwenta", changefreq: "yearly", priority: 0.7 },
    // { path: "/projects/sophie-bluel", changefreq: "yearly", priority: 0.7 },
    // { path: "/projects/nina-carducci", changefreq: "yearly", priority: 0.7 },
    // { path: "/loading", changefreq: "yearly", priority: 0 }
];

const createSitemap = (routes) => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
        .map(({ path, changefreq, priority }) => `
    <url>
        <loc>https://kitsuiwebster.com${path}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
    </url>`).join('')}
</urlset>
`;
    return sitemap;
};

fs.writeFileSync(path.resolve(__dirname, './public/sitemap.xml'), createSitemap(routes), 'utf8');

console.log('Sitemap generated successfully!');
