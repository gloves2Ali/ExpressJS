var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  var mold = '酒店';
  var sortitem ={
    "errorcode":"201",
    "data":[
        {
          "title":"酒店标题1",
          "subtitle":"酒店副标题1",
          "mark":["酒店标签1","酒店标签2"],
          "price":2108,
          "location":["100","100"],
          "introduce":"no1.景区",
          "notice":"这是第一条数据结尾"
        },
        {
          "title":"酒店标题2",
          "subtitle":"酒店副标题2",
          "mark":["酒店标签a","酒店标签b"],
          "price":2108-2,
          "location":["100","100"],
          "introduce":"第二个景区",
          "notice":"这是第二条数据"
        }
    ]
};
  var filteritem = {
    "offset":0,
    "data":[
      {
        "productCode":"dsfedfae21",
        "productName":"酒店测试2",
        "mainUrl":"http://luofc.sendinfo.com.cn",
        "tags":[
          "酒店标签1"
        ],
        "startingPrice":23,
        "desc":"<p>1222<br/></p>",
        "levelName":"六星级",
        "saleNum":2,
        "id":5,
        "addr":"122",
        "location":"[120.210636,30.343395]",
        "attr":{
        }
      },
      {
        "productCode":"hotel001",
        "productName":"酒店测试1",
        "mainUrl":"http://luofc.sendinfo.com.cn/uploadFolder//2016-03-05/cc3522b5-79e4-4621-b4c3-c91354420fe9.jpg",
        "tags":[
          "酒店标签1"
        ],
        "startingPrice":0.35,
        "desc":"<p>hotel001hotel001hotel001hotel001hotel001</p>",
        "levelName":"五星级",
        "saleNum":22,
        "id":1,
        "addr":"hotel001",
        "location":"[120.481989,30.260503]",
        "attr":{
        }
      }
    ],
    "limit":20,
    "count":2,
    "totalCount":2
  };
  //console.log("sortitem:",sortitem);
  res.render('index', { mold: mold, sortitem:sortitem, filteritem:filteritem });
});

router.get('/tasks',function(req, res, next){
  res.render('task', { mark: 'aaa',username:'jack',age:'25',ip:req.ip });
});


module.exports = router;
