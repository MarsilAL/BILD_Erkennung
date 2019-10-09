function handle(request, response) {
    console.log('classify');

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

// We stopped @ "Now ask it to categorize a document for you"

    console.log(request.body);
    response.end();    
}


this.handle = handle;
