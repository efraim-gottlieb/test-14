import express from "express";
import * as moviesControllers from "../controllers/moviesControllers.js";


const router = express.Router();
router.route("/")
  .get(moviesControllers.getMovies)


export default router;