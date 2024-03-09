import { Router } from "express";
import { getAllNfts } from "../controllers/nftController/getAllNfts.controller.js";

const nftRouter = Router();

nftRouter.get("/all-nfts", getAllNfts);

export { nftRouter };