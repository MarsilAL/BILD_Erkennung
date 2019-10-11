const PORT = process.env.PORT || 80; //Constante PORT auf 8080 festlegen
const parser = require('body-parser');
const express = require('express');
const classifier = require('./classifier');


//konfigurieren
const webserver = express();
webserver.use(parser.urlencoded({ extended: false })); //Weisst Express an, text zu verarbeiten

webserver.post('/api/classify', classifier.handle); //Den Webserver anweisen, etwas anzunehmen (post)

webserver.use(express.static('public')); //Express anweisen, das Verzeichniss public zu benutzen

//starten
webserver.listen(PORT, function () {
    console.log('hello from listen')


})
