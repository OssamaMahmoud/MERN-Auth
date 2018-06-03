const express = require('express');


const router = new express.Router();

//these routes are only accessoble froom the authenticated user
//assign user an 
router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message.",
    user: req.user
  });
});



module.exports = router;
