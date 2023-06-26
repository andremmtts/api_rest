import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import fotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', loginRequired, fotoController.store);

// router.post('/', (req, res) => {
//   console.log(req);
//   return res.send('teste');
// });

export default router;
