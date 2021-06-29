const { Router } = require('express');
const timestampRouter = Router();

timestampRouter.get('/:date', (req, res,) => {
  const { date } = req.params;
  if(isNaN(date)) {
    var valid = (new Date(date)).getTime() > 0;
    if (valid) {
      const unixTime = new Date(date)
      const utcTime = new Date(date);
      res.json({unix: unixTime.getTime(), utc: utcTime.toUTCString()})
    } else {
      res.json({error: "Invalid Date"})
    }
  } else {
    const unixTime = new Date(Number(date))
    res.json({unix : date, utc: unixTime.toUTCString()})
  }
});

module.exports = timestampRouter