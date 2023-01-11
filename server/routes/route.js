import express,{ Router } from 'express';
import { addUser, getUsers, getSingleUser,updateUser,removeUser} from '../controllers/userController.js';

const router = express.Router();

router.post('/add', addUser);
router.get('/users', getUsers);
router.get('/:id', getSingleUser);
router.put('/:id', updateUser);
router.delete('/:id', removeUser);

export default router;