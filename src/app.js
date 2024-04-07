const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url ==='/') {
    const chunks = [];

    req.on('data', chunk => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks)
      const value1 = obj.num1;
      const value2 = obj.num2;

      // Write code here to calculate power of a number
      // let result = Math.pow(value1, value2);
      if(value1>1 && value2>0){
        let result=Math.pow(value1, value2);
        console.log(result);
        res.status(200).JSON(result);
      }else{
        res.status(400).JSON("The operation cannot be performed");
      }
      
    });
    }
});

module.exports = server;
      
