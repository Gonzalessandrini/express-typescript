import express from 'express'
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/yin', (_req, res) => {
    res.send('yang')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
  });