const fs = require('fs');

module.exports.getFileData = (req, res) => {
    var value = [];
    
    if(req.query.filename){
        console.log(req.query.filename)
        var datas = fs.readFile(__dirname + '/../' + req.query.filename, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(data);
        })
    }
    else if(req.query.folder) {
        console.log(req.query.folder)
        var datas = fs.readdirSync(__dirname + '/../' + req.query.folder);
        for(var i = 0; i < datas.length; i++) {
            value.push(req.query.folder+'/'+datas[i]);
        }
            
        res.send({
            data: value
        });
        console.log(value)
    }
    else {
        var datas = fs.readdirSync(__dirname + "/..");
        for(var i = 0; i < datas.length; i++) {
            value.push(req.query.folder+'/'+datas[i]);
        }
        res.send({
            data: datas
        });
        console.log(datas)
    }
}