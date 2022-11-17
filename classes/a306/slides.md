# Föreläsning A306

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/almbeu1k2ig2)

## Slide 2: Förra lektionen
* Parprogrammering och mob coding
* VSCode LiveShare
* Samarbete med Git
* GitHub Pull Requests

## Slide 3: Vad är sant om samarbete med kod?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Vid parprogrammering är det en som skriver och en som bara pratar
* En commit blir omedelbart tillgänglig för andra att titta på och arbeta vidare från
* En merge är en commit med två föräldrar och kan därför slå ihop två kedjor av förändringar
* För att skapa en pull request på GitHub måste man först skapa en branch i Git

## Slide 4: Hur går det med grupparbetet?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Jag har hämtat ut repot för projektet från GitHub till min egen dator
* Jag vet vilken del av uppgiften jag ska fokusera på
* Jag har börjat skriva javascript i projektet

## Slide 5: Aynskron programmering och fetch()
Hur hämtar man data från ett API, och vad innebär det att sådana operationer är "asynkrona"?

En bild föreställer en hund som hämtat en pinne

## Slide 6: Lektionens innehåll
* Dataöverföring via HTTP
* Webbläsarens fetch-API
* Asynkron programmering
* JSON som dataformat

## Slide 7: Varför API i ESC-projektet?
* ESC:s personal ska inte behöva redigera HTML
* Viss data är dynamisk (ex lediga tider)
* Slutsats: Data måste laddas från annan källa
* Vanlig slutsats i flera andra situationer också

## Slide 8: Lösning: Ladda via HTTP
* Webbläsaren är en klient
* På internet någonstans finns en HTTP-server
* Webbläsaren skickar en fråga (request)
* Servern skickar ett svar (response)
* Webbläsaren gör något med svaret
* Exempel: Ladda ESC-sidan och dess tillbehör

Bild: Ett diagram med två symboler. En symbol liknar en webbläsare, och den andra ett moln med texten "HTTP server". Från webbläsaren till molnet går en pil med texten "HTTP request". Tillbaka från molnet till webbläsaren en pil med texten "HTTP Response"

## Slide 9: Med javascript styr vi webbläsaren
* Kom ihåg: Vi kan påverka webbläsarens DOM
* Kom ihåg: Vi kan påverka webbläsarens console
* Vi kan också påverka webbläsarens HTTP-requests!
* Vi använder **fetch()** ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API))
* Låt oss experimentera!

## Slide 10: Sammanfattning
* Webben bygger på HTTP, med requests och responses
* Webbläsaren gör automatiskt requests för att visa en sida
* Vi vill ladda saker efter att sidan visats
* Vi kan använda webbläsarens HTTP-förmågor med **fetch()**
* **fetch()** beter sig annorlunda. Låt oss experimentera!

## Slide 11: Synkron vs asynkron programmering
Vissa saker går fort nog att vänta på. I andra fall är det klokt att arbeta vidare medan vi väntar.

Bild: Kvinna på en tågperrong tittar på telefon medan hon väntar.

## Slide 12: Synkron programmering
* Det mesta vi gjort hittills i kursen
* Datorn stannar på varje rad kod tills den är klar
* Fördelar: Enkelt att skriva och läsa
* Nackdelar: Låser programmet om det tar tid
* Används för snabba uppgifter (ex att kolla vad klockan är)

## Slide 13: Asynkron programmering
* Bland annat **fetch()**
* Datorn påbörjar en process, men stannar inte och väntar
* Programmet körs vidare
* När processen är klar säger datorn till via en "callback"
* Används för sånt som kan ta tid (ex ladda från internet)

## Slide 14: Asynkron "programmering" i vardagen
* Recept (hacka grönsaker medan vattnet kokar upp)
* Tvätta (spela TV-spel medan tvättmaskinen kör)
* Textmeddelanden (skicka en fråga till en kompis, fortsätt städa medan du väntar på svar)

## Slide 15: Asynkron programmering på tre sätt
* Callback-funktioner
* Promises (med callback-funktioner)
* Async/Await

## Slide 16: Callbacks
* Ge den asynkrona processen en funktion
* När processen är klar varskos du genom att funktionen körs
* Exempel: **EventTarget.addEventListener()**
* Exempel: **setTimeout()**

## slide 17: Promises
* Idén: Den asynkrona koden ger dig ett löfte
* Bygger också på callbacks, men snyggare API
* Använd **promise.then()** för att ge en callback för success
* Använd **promise.catch()** för att ge en callback vid failure
* Exempel: **fetch()**

## Slide 18: Async/Await
* Idén: Skriv asynkron kod så den *ser synkron ut*
* Det bästa av två världar?
* Bygger på promises
* Exempel: **await fetch()**

## Slide 19: Ladda strukturerad data med fetch()
* Att ladda text är sällan tillräckligt
* Data från API behöver ofta mer struktur
* Svaret är JSON (JavaScript Object Notation)
* Ladda med **fetch()** och **response.json()**

## Slide 20: [ESC] API
Läs dokumentationen på https://lernia-sjj-assignments.vercel.app/

Bild: Screenshot på dokumentationen

## Slide 21: Vad är sant om fetch() och asynkron programmering?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Funktionen fetch() är en del av programmeringsspråket javascript och finns i alla miljöer
* fetch() initierar en asynkron HTTP-request via webbläsaren
* När ditt program startar asynkron process (exempelvis att ladda en fil) väntar datorn innan den går vidare
* Ett promise är ett objekt med ett enhetligt sätt att hantera callbacks: metoderna then() och catch()
* Funktionen fetch() returnerar ett promise, och kan därför användas med await

## Slide 22: Kommande dagar
* Fortsätt med gruppuppgiften
* Läs mer om [fetch() på MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* Läs [dokumentationen för [ESC] API](https://lernia-sjj-assignments.vercel.app/)
* På måndag: Kodstruktur och OOP

## Slide 23: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Jag förstår mer om hur HTTP fungerar och hur det används i en webapplikation
* Liknelserna till vardagen och "leken" under lektionen hjälper mig förstå asynkron programmering
* Jag känner mig säker på hur jag ska tillämpa dagens ämnen i ESC-projektet
* Jag känner att har den kunskap jag behöver för att kunna slutföra hela projektet