const PDFMerger = require('pdf-merger-js');
const fs = require('fs');
const path = require('path');

const DEFAULT_PATH = "public"

pdfMerger = async (p1Path,p2Path,resultPath) => {
  var a = new PDFMerger()
  if (!fs.existsSync(p1Path)){
    console.log("path doesn't exists!!!",p1Path)
    return
  }
  if (!fs.existsSync(p2Path)){
    console.log("path doesn't exists!!!",p2Path)
    return
  }
  // 
  if (!fs.existsSync(path.join(__dirname,DEFAULT_PATH))){
    await fs.mkdirSync(path.join(__dirname,DEFAULT_PATH),);
  }
  
  await a.add(path.join(__dirname,p1Path))
  await a.add(path.join(__dirname,p2Path))
  await a.save(path.join(__dirname,DEFAULT_PATH,resultPath))
}

// pdfMerger('1.pdf','2.pdf','3.pdf')


module.exports =  pdfMerger