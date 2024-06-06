// server.js
const express = require('express');
const { chromium } = require('playwright');

const app = express();
app.use(express.json());

app.post('/fetch', async (req, res) => {
    const { url, proxy } = req.body;
    if (!url) {
        return res.status(400).send({ error: 'URL is required' });
    }

    try {
        const options = proxy ? { proxy: { server: proxy } } : {};
        const browser = await chromium.launch();
        const context = await browser.newContext(options);
        const page = await context.newPage();
        await page.goto(url, { waitUntil: 'networkidle' });
        const content = await page.content();
        await browser.close();
        res.send({ content });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
