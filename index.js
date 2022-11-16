const express = require('express');
const validator = require('validator');
const cors = require('cors');
const app = express();

/* some legacy browsers choke on 204 */
app.use(cors({optionsSuccessStatus: 200}));  
app.use(express.static('public'));

app.get("/api/:date", function(req, res) {
  let dateParamString = req.params.date;

  if (validator.isNumeric(dateParamString)) {
    let dateInMS = parseInt(dateParamString);
    res.json({unix: dateInMS, utc: new Date(dateInMS).toUTCString()});
    return;
  } 
  else if (validator.isDate(new Date(dateParamString))) {
    let dateString = new Date(dateParamString).toUTCString();
    res.json({unix: Date.parse(dateString), utc: dateString});
    return;
  } 
  
  res.json({ error : "Invalid Date" });
});

app.get("/api/", function(req, res) {
  let dateObject = new Date();
  let dateinMS = Date.parse(dateObject);
  res.json({unix: dateinMS, utc: dateObject.toUTCString()});
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/* listen for requests :) */
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
