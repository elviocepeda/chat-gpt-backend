import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const { fieldname } = file;
    callback(null, `./src/db/${fieldname}`);
  },
  filename: (req, file, callback) => {
    const { uuid } = req.params;
    const { originalname } = file;
    const extension = originalname.split(".").pop();
    callback(null, `${uuid}.${extension}`);
  },
});

const multerUploadSettings = () => {
  const uploadSettings = multer({
    storage,
    limits: {
      fieldSize: 1024 * 1024 * 5,
    },
    fileFilter: (req, file, callback) => {
      verifyFileType(file, callback);
    },
  }).single("avatar");

  const verifyFileType = (file, callback) => {
    const filetypes = /jpeg|jpg|png/;
    const { originalname } = file;
    const extension = originalname.split(".").pop();
    const isValid = filetypes.test(extension);

    if (isValid) {
      return callback(null, true);
    } else {
      callback("Solo imagenes en formato jpeg, jpg, png!");
    }
  };
  return uploadSettings;
};

export { multerUploadSettings };
