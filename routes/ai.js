const express = require('express')
const router = express.Router()

const {
  createChat,
  getAllProducts,
  getAllProductsStatic,
} = require('../controllers/ai')

// router.route('/').post(createJob).get(getAllJobs)

router.route('/').post(createChat).get(getAllProducts)
router.route('/static').get(getAllProductsStatic)

module.exports = router
