import express from 'express'
import { Operations } from '../operations/operations'

const router = express.Router()

router.post('/v1/sum', (req, res) => {
  let firstNumber = req.body.firstNumber
  let secondNumber = req.body.secondNumber
  if (!firstNumber || !secondNumber) {
    res.status(400).send("Erro no formato da requisição. Checar os parâmetros de entrada.")
    return
  }

  const operation = new Operations()
  let sumResult = operation.sum(firstNumber, secondNumber)
  res.status(200).json(sumResult)
})

router.post('/v1/subtract', (req, res) => {
  let firstNumber = req.body.firstNumber
  let secondNumber = req.body.secondNumber
  if (!firstNumber || !secondNumber) {
    res.status(400).send("Erro no formato da requisição. Checar os parâmetros de entrada.")
    return
  } 

  const operation = new Operations()
  let subtractionResult = operation.subtraction(firstNumber, secondNumber)
  res.status(200).json(subtractionResult)
})

router.post('/v1/multiplication', (req, res) => {
  let firstNumber = req.body.firstNumber
  let secondNumber = req.body.secondNumber
  if (!firstNumber || !secondNumber) {
    res.status(400).send("Erro no formato da requisição. Checar os parâmetros de entrada.")
    return
  } 

  const operation = new Operations()
  let multResult = operation.multiplication(firstNumber, secondNumber) 
  res.status(200).json(multResult)
})

router.post('/v1/division', (req, res) => {
  let firstNumber = req.body.firstNumber
  let secondNumber = req.body.secondNumber
  if (!firstNumber || !secondNumber) {
    res.status(400).send("Erro no formato da requisição. Checar os parâmetros de entrada.")
    return
  } 

  const operation = new Operations()
  let divResult = operation.division(firstNumber, secondNumber)
  res.status(200).json(divResult)
})


export default router