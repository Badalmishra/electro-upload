const { handleUpload, handleNotFound } = require("./controller");

const router = (req, res) => {
  const { url } = req;
  switch (url) {
    case "/upload":
      {
        handleUpload(req, res);
      }
      break;
    default: {
      handleNotFound(req, res);
    }
  }
};

module.exports = {
  router,
};
