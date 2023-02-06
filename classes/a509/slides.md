# Föreläsning A509

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/al8pocbkz2w9)

## Slide 2: Förra lektionen
* REST-design och modellering
* Domänobjekt och relationer
* Konventioner för resurser och metoder
* Query strings i API-design

## Slide 3: Vad är sant om REST-design?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Alla resurser har en egen URL
* Med REST skulle en lista med en enskild boks alla kapitel kunna ha URL /books/123/chapters
* Query strings används ofta vid paginering, d.v.s. att dela upp resultat i begränsade listor ("sidor")

## Slide 4: Hur går det med uppgiften?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Min grupp har träffats och kommit igång med uppgiften
* Min grupp har börjat designa API
* Min grupp har fördelat uppgifter
* Jag har börjat programmera

## Slide 5: Lektion A509 - Enhetstester och mocking på backend
Testa isolerade serverkomponenter och hantera externa behov med mocking.

En bild föreställer en fågel av typen "Mockingbird", känd för att den imiterar andra fåglar.

## Slide 6: Lektionens innehåll
* Repetition, Unit testing
* Mocking av dependencies och tid
* Test Driven Development

## Slide 7: Case: Senaste positiva recensionerna
*(OBS: Inte en del av den verkliga inlämningsuppgiften)*

Startsidan ska visa en lista på de fem senaste positiva recensionerna, oavsett film. Endast recensioner med betyg 3-5 ska inkluderas.

Max fem, minst tre recensioner ska visas och de får vara som äldst 60 dagar gamla. Om det inte finns tre positiva recensioner från den tiden, visa inget.

Logiken ska programmeras på servern och testas med enhetstest.

## Slide 8: Metod
1. Designa API
2. Bygg en väldigt enkel resurs (route utan logik)
3. Utforma teststrategi och skriv tester
4. Prova på TDD (Test Driven Development)

## Slide 9: Steg 1, Designa API
Enligt REST-principer

## Slide 10: Objekt, relationer, resurser, metoder
* Domänobjekt: Recension
* Relationer: Film (singular, kräver ingen resurs)
* Resurser: /api/recent-reviews
* Metoder: GET

## Slide 11: Steg 2, Skapa route (utan logik)
Med node, express och CMS:ets API som datakälla

## Slide 12: Systemarkitektur
* Någon annan tillhandahåller CMS
* Jag behöver bygga backend med API där logiken bor
* Enkel frontendkod för att ladda från API och visa i DOM
* Låt oss koda!

> En bild föreställer ett diagram med tre objekt i.
> Längst ned en illustration föreställande en webbläsare.
> Ovanför webbläsaren ett moln med texten "Spegeln API, localhost"
> Ovanför molnet ett till moln, med texten "CMS API, ondigitalocean.app"
> Pilar med texten "HTTP" förbinder webbläsaren med "Spegeln API" och "Spegeln API" med "CMS API"

## Slide 13: Min backend
* HTTP-server läser alla requests och formaterar responses (express)
* Routes tar emot specifika requests och hanterar dem enligt min logik
* Funktionen *getRecentReviews()* hämtar data
* Var bör jag implementera min logik (exempelvis bara positiva betyg)?

> En bild föreställer en ny variant av diagrammet från föregående sida.
> I detta diagram är molnet i mitten förstorat och innehåller flera rutor.
> Pilen från webbläsaren ansluter nu till rutan "HTTP-server, Express".
> Från "HTTP-server, express" går en streckad pil till rutan "Route, /api/recent-reviews".
> Från "Route, /api/recent-reviews" går en streckad pil till rutan "Funktion, getRecentReviews()"
> Från "Funktion, getRecentReviews()" går en pil ut ur molnet, till det andra molnet "CMS API".

## Slide 14: Steg 3: Teststrategi
Fundera över hur jag kan testa den logik jag ska skriva.

## Slide 15: Enhetstester testar isolerat
* Försöker testa en så liten del som möjligt – snabbt!
* Kan vara svårt när enheter kommunicerar mycket
* Lättare med bra separation of concerns!
* Integrations- och end-to-end-tester testar mer kod

## Slide 16: Vad ska vi testa?
* Vilka delar tillhör min backend?
* Vilka delar innehåller *min kod* (snarare än kod från externa moduler)?
* Vilka delar innehåller logik värd att testa?

> En bild föreställer samma diagram som tidigare, med två molnen där molnet "Spegeln API"
> innehåller flera rutor avseende olika delar av koden.

## Slide 17: End-to-end testning
* Testar hela systemet, från användargränssnitt till datakälla
* "Simulerar" en människa som styr webbläsaren, klickar etc
* Exempel: Cypress (Lektion A308)

> En bild föreställer samma diagram som tidigare, men med tillägget att alla delar nu är
> röda, inklusive webbläsaren, de tre boxarna i molnet "Spegeln API" samt hela molnet "CMS API".
> En ny röd cirkel bredvid webbläsaren heter "TEST". En bild med texten "styr" sammanbinder
> cirkeln "TEST" med webbläsaren.

## Slide 18: Integrationstestning
* Testar flera delar av systemet tillsammans, men inte hela
* Genomför (eller simulerar) requests till HTTP-servern
* Exempel: Supertest (Lektion A506)

> En bild föreställer samma diagram som tidigare, men denna gång är webbläsaren inte längre
> röd. Cirkeln "TEST" har flyttat upp till nästa nivå. Där sitter den bredvid boxen "HTTP-server,
> express", som är den första boxen i molnet "Spegeln API". En pil mellan cirkeln "TEST" och
> boxen "HTTP-server, express" lyder "HTTP".

## Slide 19: Enhetstestning
* Testar en enskild "enhet", exempelvis en funktion eller klass
* Kör funktionen och kontrollerar returvärdet och/eller eventuella sidoeffekter
* Låt oss experimentera!

> En bild föreställer samma diagram som tidigare, men denna gång är det enbart en av boxarna,
> samt molnet "CMS API" som är röda. Den röda cirkeln "TEST" har flyttat upp sida vid sida med
> den röda boxen "Funktion, getRecentReviews()". Pilen mellan cirkeln och boxen lyder "Kör".

## Slide 20: Vad tycker du om min enhetstestning?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Testerna är effektiva och fokuserar på en enskild enhet
* Testerna testar en så liten enhet som möjligt och rimligt
* Testerna testar alla förväntade situationer

## Slide 21: Utmaningar vid enhetstester
* Hur gör jag testerna oberoende av externa dependencies?
* Hur testar jag situationer som sällan uppstår i verkligheten (just nu)?
* Lösningen kallas "mocking"
* Låt oss experimentera

> En bild föreställer exakt samma diagram som tidigare, där ett enhetstest testar en enskild
> enhet (boxen "Funktion, getRecentReviews()") samt dess dependency i molnet "CMS API".

## Slide 22: Enhetstestning med mocks
* En *mock* är en "enhet" som imiterar en annan
* Tillhandahålls till vår "enhet under test" med *dependency injection*
* Testar enheten isolerat – inte dess dependencies
* Låter oss styra situationen (exempelvis vilken data logiken arbetar med)
* Kan också mocka globala dependencies, som Date
* Låt oss experimentera

> En bild föreställer samma diagram som tidigare, men med ändringen att "CMS API" inte längre
> är röd. Istället har en ny cirkel lagts till, med streckad röd linje och texten "Mock CMS".
> Den pil från boxen "Funktion, getRecentReviews()" som tidigare gick till molnet "CMS API"
> går nu istället till den nya cirkeln "Mock CMS".

## Slide 23: Vad tycker du om min enhetstestning nu med mocks?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Testerna är mer effektiva och fokuserar ännu tydligare på en enskild enhet
* Testerna testar en ännu mindre enhet nu, utan att det blir orimligt litet
* Testerna kan nu testa alla förväntade situationer

## Slide 24: Steg 4, Utveckla logiken med Test Driven Development
En metod för utveckling som vissa utvecklare föredrar.

## Slide 25: TDD-cykeln
* Skriv ett test för funktionalitet du inte byggt än
* Kör alla tester (som kommer misslyckas)
* Implementera funktionaliteten
* Kör alla tester (som bör lyckas, annars gå till föregående steg)
* Börja om från början, med nästa funktionalitet
* Låt oss experimentera!

## Slide 26: Vad tycker du om TDD?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Det känns svårt och onödigt
* Det verkar värdefullt, men är inget jag vill använda
* Det känns spännande och jag vill använda det

## Slide 27: Vad är sant om testning?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Ett end-to-end test testar huvudsakligen min egen kod, i alla delar av systemet
* Enhetstester ska testa så lite kod som möjligt
* "Dependency Injection" är en särskild form av mocking
* Mocking kan åstadkommas med vanliga objekt/funktioner, eller med specialbyggda verktyg

## Slide 28: Till nästa lektion
* Fortsätt arbeta med era projekt
* Imorgon: Säkerhet
* Nästa vecka: Deploy och handledning

## Slide 29: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag lärde mig mycket nytt idag
* Jag förstår testning bättre nu än när lektionen började
* Jag känner att jag har en idé om hur testning kan användas i projektet
* Jag känner mig trygg med att kunna bidra i gruppuppgiften