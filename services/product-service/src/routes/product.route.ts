import { Router } from 'express';
import * as controller from '../controllers/product.controller';

const router = Router();

router.get('/:id', controller.get);
router.post('/', controller.create);

export default router;
