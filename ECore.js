// Written By Shubham Kumar( Git:shubhamk1998)
let http = require('http');
let Ecore = function (s, t) {

  let servers = s;
  let timeout = t;
  return {

    // Generates the Promise Array for Each Server Array
    generatePromiseArray: function (servers, arr) {
       // Iterates the Servers and get response
      servers.forEach(onbj => {
        var promise = new Promise((resolve, reject) => {
          var options = {
            url: onbj.url,
            port: onbj.port,
          };
          //Sending HTTP Request
          var req = http.get(options, function (res) {
            res.on('data', function (chunk) { });
            res.on('end', function () {
              if (res.statusCode >= 200 && res.statusCode <= 299) { resolve(onbj); }
              else { reject("Error"); }
            });
          });

          // Aborts the request incase of Any Error
          req.on('error', function (err) { reject("Error"); });

          // Aborts the request incase of Timeout
          req.setTimeout(timeout, function () {
            reject("Error");
            req.abort();
          });

        })
        //Push promise to array
        arr.push(promise);
      })
      return arr;
    },

    setTimeout: function (timeout) {
      timeout = timeout;
    },

    setServers: function (servers) {
      servers = servers;
    },

    findServer: async function () {
      return new Promise(async (resolve, reject) => {
        if (!servers || servers.length == 0) reject("No Servers are Online");
        let arr = []
        // generate Promise for each request
        arr = this.generatePromiseArray(servers, arr);
        // Wait for all server to settle
        let results = await Promise.allSettled(arr);
        //Filter Resolved Results
        results = results.filter(e => e.status === 'fulfilled')
        // Check if there are any results else throw Error
        if (results.length === 0) reject("No Servers are Online");
        // Sort depending on priority
        results = results.sort((a, b) => {
          return a.value.priority - b.value.priority;
        });
        // Resolve with lowest priorty number
        resolve(results[0]);
      })
    }


  }
};


module.exports = Ecore;