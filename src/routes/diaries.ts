import express from 'express'

const diariesRouter = express.Router()

diariesRouter.get('/', (_req, res) => {
  res.send('fetching all entry diaries')
})

diariesRouter.post('/', (_req, res) => {
  res.send('Saving a diary')
})

export default diariesRouter
