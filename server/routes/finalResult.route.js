const finalResults = require('express').Router();
var amqp = require('amqplib/callback_api');

finalResults.get('/finalResult', (req, res) => {
  console.log("inside finalrsults");

  amqp.connect('amqp://localhost', function(err, conn) {
    conn.createChannel(function(err, ch) {
      var q1 = 'finalresults7';
      ch.assertQueue(q1, {durable: true});
      ch.consume(q1, function(msg) {
       console.log("inside consume");
       console.log(msg.content.toString());
       var details=msg.content.toString()
          , detailsarray=JSON.parse(details);
      var detail = {
        deliverycost : detailsarray[0].deliverycost
      };
      // console.log(JSON.stringify(details));
      console.log('<- deliverycost sent to ui ->');
      res.send(JSON.stringify(detail));
      conn.close();

  }, {noAck: true});
  });
  });

})

module.exports = finalResults;
