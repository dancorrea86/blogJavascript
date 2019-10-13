const express = require('express')
const router = express.Router()
const ibmdb = require('ibm_db')


router.get('/postagens', (req, res) => {

  ibmdb.open('DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;UID=dwv03703;PWD=jqp@z8xv9l4v8hrx;PORT=50000;PROTOCOL=TCPIP', (err, conn) => {
    if(err) {
      return console.log(err)
    }
    
    conn.query('select * from DWV03703.POSTAGENS', (err, data) => {
      if(err) {
        console.log({erro: err}) 
      } else {
        res.send(data)
        console.log(data)
      } 
    })
    conn.close(() => {
      console.log('Conexão encerrada')
    })
  })
})

router.get('/postagens/nova', (req, res) => {
  ibmdb.open('DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;UID=dwv03703;PWD=jqp@z8xv9l4v8hrx;PORT=50000;PROTOCOL=TCPIP', (err, conn) => {
    if(err) {
      return console.log({erro: err, mensagem: 'conexão falhou'})
    } 
    conn.query(`INSERT INTO DWV03703.POSTAGENS (TITULO, CONTEUDO, AUTOR) values('${req.query.titulo}', '${req.query.conteudo}', '${req.query.autor}')`, (err, data) => {
      if(err) {
        console.log({erro: err, mensagem: 'Query Insert Falhou'})
      } else {
        console.log(data)
        res.send('Mensagem inserida com sucesso')
      }

      conn.close(() => {
        console.log('conexão encerrada')
      })
    })
  })
})


module.exports = router