const { Router } = require("express");

const router = new  Router()

router.get('/', (req, res) => {
    res.send("Hello world 1")
})
module.export = router