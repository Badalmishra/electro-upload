const { handleUpload } = require("./controller");

const router = (req) => {
  const { url } = req;
  switch (url) {
    case "/upload": {
      handleUpload(req);
    }
    break
    default:{
        handleNotFound()
    }
  }
};

module.exports = {
  router,
};
