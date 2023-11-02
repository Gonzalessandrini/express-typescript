import express from 'express'
import diariesRouter from './routes/diaries'
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/yin', (_req, res) => {
  res.send('yang')
})

app.use('/api/diaries', diariesRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`)
})
