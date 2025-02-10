import express from 'express'
import {pool} from './db.js'
import {PORT} from './config.js'

const app = express()

app.get('/', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json(rows)
})

app.get('/hero', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM hero')
    res.json(rows)
})

app.get('/ping', async (req, res) => {
    const [result] = await pool.query(`SELECT "hello world" as RESULT`);
    res.json(result[0])
})

app.listen(PORT, "0.0.0.0", () => {
    console.log('Server on port ', PORT)
})
