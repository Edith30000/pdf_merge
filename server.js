const express = require('express')
const path = require('path')
const app = express()
const multer  = require('multer')

const pdfMerger  = require('./testpdf')

const upload = multer({ dest: 'uploads/' })
app.use('/static', express.static('public'))
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"))
})
// app.post('/merge',upload.array('pdfs', 2), function (req, res, next) {
//   console.log(req.files)
//   res.send({data:req.files})
// })


app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
  req.files.map((file)=>{
    console.log(file.path)
  })
    
  
  let d = "test.pdf"
  await pdfMerger(req.files[0].path,req.files[1].path,d)
  // let d = await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
  // res.redirect(`http://localhost:3000} )
  res.redirect(`http://localhost:3000/static/${d}` )
  // res.send({data: req.files})
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})