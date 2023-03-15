# Föreläsning A702

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/algi2roqqgvt)

## Slide 2: Förra lektionen
* Återblick på vad vi lärt oss
* Fyrstegsmetoden
* Algoritmer

## Slide 3: Vad är sant om fyrstegsmetoden och algoritmer?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Andra steget i fyrstegsmetoden handlar om att bryta isär ett problem i mindre delar
* Ett problem måste vara tydligt beskrivet av "beställaren" innan man kan applicera fyrstegsmetoden
* Ett problem kan lösas med flera olika algoritmer
* Samma algoritm kan gå olika snabbt i olika situationer

## Slide 4: Lektion B702 - Fyrstegsmetoden och TDD för algoritmer
Förhållandet mellan olika typer av tester och fyrstegsmetoden, och hur vi kan använda tester när vi utvecklar algoritmer.

En bild föreställer en hand som spelar schack.

## Slide 5: Lektionens innehåll
* Repetition, testning
* Testning och fyrstegsmetoden
* Algoritmer med TDD

## Slide 6: I vilka sammanhang används olika typer av tester?
Interaktiv slide där deltagaren kan ange från 1-5 var följande typer av tester passar
in på en skala mellan "Mer isolerad funktionalitet" (1) och "Mer sammansatt funktionalitet" (5)

* Integration tests
* Unit tests
* End-to-end (e2e) tests

## Slide 7: Olika tester har olika styrkor
* Skillnaden är mängden kod/komponenter under test
* Enhetstester testar lite kod åt gången, integrationstester testar mer, E2E-testar testar "all" kod
* Mängden kod avgör hur snabbt testen kan köras
* Gränserna är flytande – vad är egentligen en "enhet"? Vad är "hela systemet"?
* Bra med kombination – många enhetstest och några få viktiga e2e-/integrationstester

> En illustration föreställer en "tratt" där toppen är bredare och botten är smalare. Vid toppen står det
> "Stort, komplext system" och vid botten står det "Liten enhet". Längsmed trattens vänstersida finns tre
> texter, från längst upp till längst ned: "End2end-test", "Integrationstest", "Enhetstest"

## Slide 8: Lös komplexa problem med fyrstegsmetoden
* **Definiera** problemet tydligt
* **Separera** i mindre moment
* **Experimentera** med lösningar på varje moment
* **Kombinera** lösningarna
* Använd på olika nivåer i systemet efter behov

> En illustration föreställer en röd rektangel och en grön rektangel. Den röda har texten "Problem" och
> den gröna har texten "Lösning". Från den röda till den gröna går tre pilar i en omväg nedåt, höger och
> sedan uppåt igen till lösningen: "Separera", "Experimentera", "Kombinera"

## Slide 9: Vilket steg i fyrstegsmetoden tänker du vore bäst att utgå ifrån när man utformar tester?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Steg 1: Definiera
* Steg 2: Separera
* Steg 3: Experimentera
* Steg 4: Kombinera

## Slide 10: Fyrstegsmetoden på olika nivåer
* Fyrstegsmetoden tar dig från problem till lösning
* Vägen dit kan passera flera nivåer
* Påverkar inte valet av teststrategin

> En illustration föreställer tratten från tidigare, tillsammans med illustrationen av fyrstegsmetoden.
> Fyrstegsmetoden upprepas två gånger på två olika nivåer i tratten.

## Slide 11: Testa rätt sak
* Testa **att** algoritmen löser problemet
* Testa inte **hur** algoritmen löser problemet
* Utgå från **definitionen** (4SM steg 1)

> Illustrationen föreställer illustrationen av fyrstegsmetoden med en röd och en grön rektangel. Men
> denna gång med en extra pil direkt från lösning till problem och ett litet mikroskop illustrerat vid pilen.

## Slide 12: Vilken testform tycker du lämpar sig bäst för att testa algoritmer?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Unit tests
* Integration tests
* End to end tests

## Slide 13: Algoritmer är ofta "enheter"
* Implementeras som en funktion/metod eller klass
* Ordet "algoritm" är dock flytande
* Kan även avse något som sträcker sig över större system

## Slide 14: Utforma en teststrategi
* Vilken testtyp ska vi använda? (e2e, integration, enhet etc)
* Hur ska vi isolera, d.v.s. vad testas och vad mockas bort?
* Vilka tester krävs för att täcka hela **definitionen**?

## Slide 15: Testdriven utveckling
* Skriv ett test för funktionalitet du inte byggt än
* Kör alla tester (som kommer misslyckas)
* Implementera funktionaliteten
* Kör alla tester (som bör lyckas, annars gå till steg 3)
* Börja om från början, med nästa funktionalitet

## Slide 16: Algoritm med fyrstegsmetoden och TDD
* **Definiera** problemet (för att kunna skriva test)
* **Separera** problemet
* Skriv ett test åt gången
* **Experimentera** fram lösningar som passerar testet
* Upprepa tills allt är **kombinerat**
* Demo: Title Case

## Slide 17: Vad är sant om fyrstegsmetoden, algoritmer och TDD?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Algoritmer bör alltid testas genom enhetstestning
* Tester bör utgå ifrån vilka lösningar man experimenterat fram i fyrstegsmetodens steg 3
* Huvudfokus för TDD är att skriva tester först, sedan implementation
* Ett test ska verifiera hur en viss lösning är implementerad

## Slide 18: Till nästa gång
* Inlämningsuppgift, Wordle-algoritmer
* Nästa lektion (måndag): UI-biblioteket React

## Slide 19: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag lärde mig mycket nytt idag
* Jag känner att jag förstod det vi gick igenom idag
* Jag kommer att använda fyrstegsmetoden framöver
* Jag vill använda TDD i inlämningsuppgiften