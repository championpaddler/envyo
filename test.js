let staticserver=[{"url":"http://localhost","priority":1,"port":3000},{"url":"http://localhost","priority":7,"port":3001},{"url":"http://localhost","priority":2,"port":3002},{"url":"http://localhost","priority":4,"port":3003}]; 
let Ecore= require('./ECore');

let core = Ecore(staticserver,5000);

test('Testing with Standard Timeout', () => {
    return  core.findServer().then(output=>{
        expect(output.status).toBe('fulfilled');
    }).catch(output=>{
        expect(output).toBe("No Servers are Online");
    })
});


test('Testing with Low Timeout', () => {
    core.setTimeout(10);
    return  core.findServer().catch(output=>{
        expect(output).toBe("No Servers are Online");
    })
});


test('Testing with 1000 Timeout', () => {
    core.setTimeout(1000);
    return  core.findServer().catch(output=>{
        expect(output).toBe("No Servers are Online");
    })
});