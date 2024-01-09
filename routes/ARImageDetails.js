const router = require("express").Router();
let ARImageDetails = require("../models/ARImageDetails");

router.route("/add").post((req, res) => {
  const VuforiaImageName = req.body.VuforiaImageName;
  const ImageName = req.body.ImageName;
  const Year = req.body.Year;
  const Artist = req.body.Artist;
  const Description = req.body.Description;
  const newARImageDetails = new ARImageDetails({
    VuforiaImageName,
    ImageName,
    Year,
    Artist,
    Description,
  });
  newARImageDetails
    .save()
    .then(() => {
      res.json("ARImageDetails Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  ARImageDetails.find()
    .then((ARImageDetailss) => {
      res.json(ARImageDetailss);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.route("/update/:id").put((req, res, next) => {
  ARImageDetails.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("ARImageDetails updated successfully !");
      }
    }
  );
});

router.route("/delete/:id").delete(async (req, res) => {
  let accId = req.params.id;

  await ARImageDetails.findByIdAndDelete(accId)
    .then(() => {
      res.status(200).send({ status: " ARImageDetails deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error with delete", error: err.message });
    });
});

router.route("/get/:id").get((req, res) => {
  ARImageDetails.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
module.exports = router;
