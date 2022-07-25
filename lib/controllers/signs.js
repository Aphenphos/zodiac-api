const { Router } = require('express');
const { signs } = require('../../data/signs');
const router = Router();

router
  .get('/:id', (req, res) => {
    const sign = sign.find((sign) => sign.id === req.params.id);
    res.json(sign);
  })
  .get('/', (req, res) => {
    const allSigns = signs.map((sign) => ({ id: sign.id, name: sign.name }));
    res.json(allSigns);
  });
module.exports = router;
