let staticserver=[{"url":"http://localhost","priority":1,"port":3000},{"url":"http://localhost","priority":7,"port":3001},{"url":"http://localhost","priority":2,"port":3002},{"url":"http://localhost","priority":4,"port":3003}];

const Ecore= require('./ECore');

const core = Ecore(staticserver,5000);
core.findServer().then(output=>{
    console.log(output);
})