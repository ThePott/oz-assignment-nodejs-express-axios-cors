// server.js
const express = require("express")
const app = express()

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:5500',
  methods: ['OPTIONS', 'POST', 'GET', 'PUT', 'DELETE'],
  allowedHeaders: ["Content-Type"]
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.text())

let data = { message: '여러분 화이팅!' }

app.get("/", (req, res) => {
  try {
    console.log("-----data:", data)
    res.status(200).json(data)
  } catch (error) {

  }
})
app.post("/", (req, res) => {
  try {
    data.message = req.body
    res.status(200).send(`받은 POST 데이터: ${body}`)
  } catch (error) {

  }
})
app.put("/", (req, res) => {
  try {
    data.message = req.body
    console.log("---- req.body:", req.body)
    res.status(200).send(`업데이트된 데이터: ${req.body}`)
  } catch (error) {
    console.error("put error:", error)
  }
})
app.delete("/", (req, res) => {
  try {
    data = {}
    res.status(200).send("데이터가 삭제되었습니다")
  } catch (error) {

  }
})

app.listen(3000, () => {
  console.log('서버가 http://localhost:3000/ 에서 실행 중입니다.');
});
