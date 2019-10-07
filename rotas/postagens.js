const express = require('express')
const router = express.Router()

router.get('/postagens', (req, res) => {
  res.json({
    titulo: "Meu primeiro posto",
    conteudo: "Era uma vez.",
    autor: "Daniel Maciel Correa"
  })
})

module.exports = router