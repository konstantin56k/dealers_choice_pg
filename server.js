const path = require('path');
const express = require('express');
const app = express();
app.use(require('morgan')('dev'));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.send(
    `<html>
        <head>
        <title>Li-Ion batteries</title>
        <link rel='stylesheet' href='/public/style.css'/>
        </head>
        <body>
            <h1>Li-Ion batteries size</h1>
            <ul>
                <li><a href='batteries_size/18650'>18650</a></li>
                <li><a href='batteries_size/AA'>AA</a></li>
                <li><a href='batteries_size/AAA'>AAA</a></li>
            </ul>
        </body>
    </html>
    `)
})

app.get('/batteries_size/18650', (req, res, next) => {
    res.send(
    `<html>
        <head>
        <title>Li-Ion batteries</title>
        <link rel='stylesheet' href='/public/style.css'/>
        </head>
        <body>
            <h1>Li-Ion batteries size</h1>
            <h3>18650 batteries</h3>
            <p>The 18650 battery is a lithium-ion cell classified by its 18mm x 65mm size, which is slightly larger than a AA battery. They’re often used in flashlights, laptops, and high-drain devices due to their superior capacity and discharge rates. 18650s come in both flat and button top styles, and usually boast 300-500 charge cycles.</p>
            <h5><a href='/'>go to main page</a></h5>
        </body>
    </html>
    `)
})

app.get('/batteries_size/AA', (req, res, next) => {
    res.send(
    `<html>
        <head>
        <title>Li-Ion batteries</title>
        <link rel='stylesheet' href='/public/style.css'/>
        </head>
        <body>
            <h1>Li-Ion batteries size</h1>
            <h3>AA batteries</h3>
            <p>The AA (double-A) battery is a dry cylindrical cell defined by its roughly 49.2mm length and 13.5mm diameter. The AA has been the most common household battery for decades and fits a wide array of devices. While most batteries in the grocery store are alkaline with a 1.5V voltage, double-A batteries are available in many voltages, chemistries, and terminals (and are even rechargeable).</p>
            <h5><a href='/'>go to main page</a></h5>
        </body>
    </html>
    `)
})

app.get('/batteries_size/AAA', (req, res, next) => {
    res.send(
    `<html>
        <head>
        <title>Li-Ion batteries</title>
        <link rel='stylesheet' href='/public/style.css'/>
        </head>
        <body>
            <h1>Li-Ion batteries size</h1>
            <h3>AAA batteries</h3>
            <p>The AAA (triple-A) battery is a dry cylindrical cell defined by its roughly 44.5mm length and 10.5mm diameter. The AAA is commonly used in smaller home devices such as remotes and electronic toys. Triple-A batteries are typically button tops with either a 1.2 or 1.5 voltage, and come with an array of chemistries such as aklaline, NiMH, and lithium.</p>
            <h5><a href='/'>go to main page</a></h5>
        </body>
    </html>
    `)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
