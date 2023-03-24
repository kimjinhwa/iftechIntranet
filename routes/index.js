var express = require('express');
var router = express.Router();

/* GET home page. */
//if(years === 2023)networkFolderPath = 'X:\\01 민수 장비 제작\\2023년 진행중 프로젝트';
//if(years === 2022)networkFolderPath = 'X:\\01 민수 장비 제작\\2022년 진행중 프로젝트';
//var networkFolderPath = 'X:\\01 민수 장비 제작\\2023년 진행중 프로젝트';
//var networkFolderPath_2022 = 
router.get('/', function (req, res, next) {
  var { years } = req.query;
  const requestYears = years || '2023';
  //if(years == null)years=2023
  console.log('years=---------------------' + requestYears)
  res.render('index', { title: 'Iftech Intranet for project Management', RequestYears: requestYears });
});

module.exports = router;
