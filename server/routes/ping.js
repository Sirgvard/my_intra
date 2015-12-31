var express = require('express');
var router = express.Router();

// router.route('/:ticketId')
// .get(function(req, res){
//   return {
//     ping: function(req, callback) {
//       var responseTime = 0;
//       var start = (new Date()).getTime();
//       $http.get(req.address + '?rnd=' + (new Date().getTime()))
//       .success(function() {
//         responseTime = (new Date().getTime()) - start;
//         return res.status(200).json({response: Math.round(responseTime / 10) / 100});
//       })
//       .error(function() {
//         return res.status(400).json({error: "Server seems offline"});
//       })
//     }
//   }
// })

module.exports = router;
