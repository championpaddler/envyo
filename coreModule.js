
var http = require('http');

let staticserver=[
    {
      "url": "http://localhost",
      "priority": 1,
      "port":3000
    },
    {
      "url": "http://localhost",
      "priority": 7,
      "port":3001
    },
    {
      "url": "http://localhost",
      "priority": 2,
      "port":3002
    },
    {
      "url": "http://localhost",
      "priority": 4,
      "port":3003
    }
  ];
    

module.exports.Ecore = new Promise((resolve,reject)=>{
        let arr=[]
        staticserver.forEach(onbj=>{
            var promise = new Promise((resolve,reject)=>{
                var options = {
                    url:onbj.url,
                    port:onbj.port,
                    timeout: 3000,
                    method:'GET'
                };
                var req = http.get(options, function (res) {                                                                                                             
                    var data = '';                                                                                                                                             
                
                    res.on('data', function (chunk) { data += chunk; });                                                                                                                                                                
                    res.on('end', function () {
                        if (res.statusCode === 200) { /* do stuff with your data */}
                        else { /* Do other codes */}
                    });
                });       
                req.on('error', function (err) {console.log(err); reject("Error"); }); 
                
                // TIMEOUT PART
                req.setTimeout(1000, function() {                                                                                                                              
                    console.log("Server connection timeout (after 1 second)");                                                                                                                  
                    req.abort();                                                                                                                                               
                });
                
            })
            arr.push(promise);
        })
        Promise.allSettled(arr).then(results=>{
            console.log(results);
            resolve("Processde");
        });
        
})
        