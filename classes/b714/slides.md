# Föreläsning B714

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/alqotbjmrzbc)

## Slide 2: Tidigare i kursen
* Algoritmer och programmeringsmetodik
* React
* Databaser
* Samspel mellan frontend och backend

## Slide 3: Vad är sant om React?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* React är ett sätt att skriva HTML i Javascript
* React är ett bibliotek för att bygga gränssnitt med komponenter
* När man bygger med React får man bra separation of concerns
* React är ett nytt sätt att använda funktioner i javascript

## Slide 4: Hur har det gått med uppgiften?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Jag är klar med uppgiften
* Jag är nästan klar med uppgiften
* Jag har mycket kvar

## Slide 5: Vad var svårast i det här projektet?
Interaktiv slide där deltagaren kan rangordna följande alternativ.

* Att bygga en React-app
* SSR
* Att bygga ett API för spelet
* Databaskopplingen till MongoDB
* Att kombinera de olika delarna

## Slide 6: Har du använt fyrstegsmetoden i den här projektet?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Ja, systematiskt genom hela projektet
* Ja, men bara ibland
* Nej, inte direkt

## Slide 7: NEXT.js
Underlätta utveckling av fullstack-appar genom ett ramverk för React

## Slide 8: Dagens lektion
* Repetition, vad är React?
* Tillbakablick på vad vi lärt oss
* Introduktion till NEXT.js
* Todo-listan med NEXT.js
* Nästa uppgift

## Slide 9: Vad är React?
* Ett bibliotek för dynamiska gränssnitt (manipulera DOM)
* Gränssnitt beskrivs deklarativt, som "element"
* Element kan uttryckas med `React.createElement('h1')` eller `<h1>`
* Den sista formen kallas JSX och är vanligast
* Renderas (vanligtvis) på frontend, kräver javascript
* Events hanteras genom "on"-funktioner (ex: onSubmit, onClick)
* Demo: Todo-appen

## Slide 10: Kombinera React med backend
* Servern skickar HTML med JS
* JS startar React på frontend
* Vårt React-gränssnitt gör requests till API
* Servern svarar
* Demo: ToDo-app med backend

## Slide 11: Tillbakablick på gångna projekt
* Vilka tekniker har vi använt, och till vad?
* Vilka verktyg har vi använt?
* Låt oss sammanställa en matris!

Matrisen finns som ett Google Spreadsheet, här:
https://docs.google.com/spreadsheets/d/1UddEsAMUm8BW0WaxUPtt55mT6flpN5LnjWwYC9XJ8d8/edit#gid=0

## Slide 12: Tre aspekter av fullstackutveckling
* Frontend, kod som ska köras i webbläsaren
* Backend, kod som ska köras på servern
* Utveckling, verktyg som tar dig från kod till leverans

## Slide 13: Frontend
* HTML-dokument
* JS-dokument (inklusive React-komponenter när vi använder React)
* CSS-dokument

> En bild föreställer en illustration där ovanstående tre punkter placerats i en rektangel.

## Slide 14: Backend
* HTTP-kommunikation kräver en HTTP-server
* "Routing" styr vilka svar som ges på olika requests
* Svar kan sorteras in i sidor (SSR/statiskt), statiska filer (ex CSS) eller API
* Databas och andra datakällor finns också här

> En bild föreställer en illustration där ovanstående fyra punkter placerats i en rektangel.
> I bilden finns också frontend-rektangeln från föregående slide, och en dubbelriktad pil mellan
> de båda rektanglarna med texten "HTTP"

## Slide 15: Verktyg
* Vi skriver (ofta) koden i VSCode
* Koden görs om på olika sätt
* Transpilering (exempelvis TS → JS, eller SASS → CSS)
* Bundling, där många moduler slås samman till en JS-fil
* Code splitting, där koden delas upp i olika filer som behövs vid olika tillfällen
* Bygge för produktion, där koden optimeras för storlek

> En bild föreställer de två rektanglarna för frontend respektive backend från föregående slide,
> samt en stor VSCode-logo. Mellan VSCode och de båda rektanglarna går pilar med texterna
> "Transpilering", "Bundling", "Code splitging" och "Bygg för production"

## Slide 16: Intro till NEXT.js
* Open-sourceprojekt som drivs av hosting-företaget Vercel
* Ett full-stackramverk för React
* Använder React för UI, men adderar stöd för mycket annat
* Fungerar med både JS och TS

## Slide 17: Vad gör NEXT för oss?
* Alla verktyg sköts av NEXT
* Bygger och levererar HTML och JS
* HTTP-server och routing, inklusive statiska filer
* Ramverk för att skriva React som renderas på frontend och backend (istället för templating)
* Ramverk för API
* Dock inte CSS eller Databas, som behöver hanteras separat

> En bild föreställer hela diagrammet från tidigare, med frontend, backend, VSCode och pilarna.
> I diagrammet har allt som NEXT sköter markerats med grönt, det som vi själva skriver med hjälp
> av NEXT är gult, och det vi hanterar separat markerats med rött, i enlighet med ovanstående
> listpunkter.

## Slide 18: Kom igång med NEXT.js
* Använd `create-next-app` (snarlikt `create-react-app`)
* Bygg komponenter i moduler som motsvarar routes
* Bra guide på https://nextjs.org/learn
* Låt oss experimentera!

## Slide 19: Vad är sant om NEXT.js?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* NEXT.js är ett ramverk som ersätter React
* NEXT.js låter dig använda React för SSR
* Med NEXT.js kan man bygga webbplatser som inte kräver någon backendkod
* Om man vill ladda data från API måste man använda getServerSideProps()

## Slide 20: Till nästa gång
* Följ guiden på [nextjs.org/learn](https://nextjs.org/learn)
* Sammankalla er grupp och påbörja nästa gruppuppgift
* Lämna in projektplan senast på måndag
* Nästa lektion, imorgon: Repetition, Cypress

## Slide 21: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag har lärt mig mycket nytt idag
* Jag tror att NEXT.js gör det lättare för mig att förstå hur frontend och backend kan kombineras
* Jag vet vad jag ska göra i eftermiddag och imorgon
* Jag ser fram emot att använda NEXT i nästa projekt