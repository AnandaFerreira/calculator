import express from 'express'
import { Operations } from '../operations/operations'

const router = express.Router()

router.post('/sum', (req, res) => {
  let firstNumber = req.body.firstNumber
  let secondNumber = req.body.secondNumber

  const operation = new Operations()
  let result = operation.sum(firstNumber, secondNumber)
  res.json(result)
})

router.post('/subtract', (req, res) => {
  let firstNumber = req.body.firstNumber
  let secondNumber = req.body.secondNumber

  const operation = new Operations()
  let subtractionResult = operation.subtraction(firstNumber, secondNumber)
  res.json(subtractionResult)
})

router.post('/multiplication', (req, res) => {
  let firstNumber = req.body.firstNumber
  let secondNumber = req.body.secondNumber

  const operation = new Operations()
  let multResult = operation.multiplication(firstNumber, secondNumber) 
  res.json(multResult)
})

router.post('/division', (req, res) => {
  let firstNumber = req.body.firstNumber
  let secondNumber = req.body.secondNumber

  const operation = new Operations()
  let divResult = operation.division(firstNumber, secondNumber)
  res.json(divResult)
})


export default router