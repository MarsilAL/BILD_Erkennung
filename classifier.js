var bayes = require('bayes')

var classifier = bayes()
classifier.learn('Killer wollte Türen von Synagoge aufschießen', 'BILD')
classifier.learn('AKK stinksauer nach Truppenbesuch in Mali', 'BILD')
classifier.learn('Erdogan beginnt Offensive in Nordsyrien', 'BILD')
classifier.learn('Torwart Florian beschützte Nadine vor ihrem Ex', 'BILD')
classifier.learn('Schuh-Ärger für Neuer', 'BILD')
// WELT
classifier.learn('Täter versuchten, in Synagoge einzudringen – dann schossen sie auf Passanten', 'WELT')
classifier.learn('Türkei startet Offensive in Nordsyrien', 'WELT')
classifier.learn('Kramp-Karrenbauers gefährlichste Reise', 'WELT')
classifier.learn('Thomas Müller nährt Spekulationen über einen Wechsel', 'WELT')
classifier.learn('Thomas Müller will den FC Bayern angeblich schnell verlassen', 'WELT')

var A=1;
var B=2;

function handle(request, response) {
    // 1 get text
    var text = request.body.input;
    
    // use the classifier to categorize the text
    var category = classifier.categorize(text)
    
    
    // return the category

    response.send(category);
}


this.handle = handle;
