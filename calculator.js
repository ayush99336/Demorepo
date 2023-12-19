const express = require('express');
const bodyParser= require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html")
});

app.post("/",(req,res) => {
    
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2) ;
    var sum= num1+num2;
    res.send("Thanks for posting that "+sum);

});
 
app.listen(3000, () => console.log('Example app is listening on port 3000.'));