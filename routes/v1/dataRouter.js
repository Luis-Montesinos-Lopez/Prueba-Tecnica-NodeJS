const express = require("express");
const datasRouter = express.Router();
const pc = require("picocolors");
const { getData } = require("../../controllers/v1/datasControllers");
const verifyTokenMiddleware = require("../../utils/verifyTokenMiddleware");



datasRouter.use("/", (req, res, next) => {
    console.log(pc.magenta("Using datas Router..."))
    next();
})

datasRouter.get("/", verifyTokenMiddleware, getData);

module.exports = datasRouter;