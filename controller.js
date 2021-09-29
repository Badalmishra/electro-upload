const fs = require("fs");
const handleUpload = (req, res) => {
  try {
    const directoryName = 'uploads'
    if(!fs.existsSync(directoryName)){
      fs.mkdirSync(directoryName);
    }
    const fileName = req.headers["file-name"];
    req.on("data", (chunk) => {
      fs.appendFileSync(directoryName+'/'+fileName, chunk);
      console.log(`received chunk! ${chunk.length}`);
    });
    res.end("uploaded!");
  } catch (error) {
    console.error("error in handleUpload", error);
  }
};

const handleNotFound =(req,res)=>{
    res.end({status:404});
}
module.exports = {
  handleUpload,
  handleNotFound
};
