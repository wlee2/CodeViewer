const express = require('express');

const sampleRouter = require('./routers/sample');

const app = express();
app.use(express.static(__dirname));

const data = [{
    fileName: "asd"
},
{
    fileName: "1234"
}]

// const my_middleware = (req, res, next) => {
//     console.log(stop);
//     if(isAuthrized()) {
//         next()
//     } else {
//         res.redirect("/login");
//     }
// }

//Middlewares
app.use('/sample', sampleRouter);
app.use('/error', () => {
    console.log('Page Not Found!!!!');
})

var server = app.listen(4300, () => {
    var host = server.address().address
 	var port = server.address().port

 	console.log('Example app listening at http://%s:%s', host, port)
});