const handleUpload = (req, res) => {
  try {
    const fileName = req.headers["file-name"];
    req.on("data", (chunk) => {
      fs.appendFileSync(fileName, chunk);
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
