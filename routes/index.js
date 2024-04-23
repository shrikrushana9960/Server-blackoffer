import express from 'express';
import { filteredByAny, filteredByCountry, filteredByIntensity, filteredByLikelihood, filteredByPestle, filteredByRegion, filteredBySector, filteredBySource, filteredByTitle, filteredByTopic, filteredByYear, getAllData } from '../controllers/index.js';

const router = express.Router();

router.get('/all', getAllData);

router.get("/year/:year", filteredByYear)

router.get("/topic/:topic", filteredByTopic)

router.get("/title/:title", filteredByTitle)

router.get("/sector/:sector", filteredBySector)

router.get("/region/:region", filteredByRegion)

router.get("/country/:country", filteredByCountry)

router.get("/pestle/:pestle", filteredByPestle)

router.get("/source/:source", filteredBySource)

router.get("/intensity/:intensity", filteredByIntensity)

router.get("/likelihood/:likelihood", filteredByLikelihood)

router.get("/any/:search", filteredByAny)


export default router;