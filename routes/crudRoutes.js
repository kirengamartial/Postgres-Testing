const { Router } = require('express')
const queriesController = require('../controller/queriesController')

const router = Router()

router.get('/', queriesController.getUsers)
router.get('/:id', queriesController.getSingleUser)
router.post('/', queriesController.createUser)
router.put('/put/:id', queriesController.editUser)
router.delete('/delete/:id', queriesController.deleteUser)

module.exports = router