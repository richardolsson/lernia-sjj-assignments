# Föreläsning A504

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/alsxq66es6o6)

## Slide 2: Förra lektionen
* Repetition
* Node som utvecklingsmiljö, pakethantering etc
* HTTP med Node
* Serva filer från filsystemet (eventuellt med ändringar)

## Slide 3: Vad är sant om att bygga en HTTP-server?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* En HTTP-server lyssnar efter requests från klienter och bestämmer själv hur den ska svara
* Med server-ramverket express kan programmeraren skicka data till en annan server med hjälp av app.post(…)
* En server som får en request efter resursen /pages/info.html ska svara med innehållet i filen info.html från mappen /pages
* När en server svarar med innehåll måste headern Content-Type vara korrekt för att klienten ska kunna hantera svaret

## Slide 4: Lektion A504 - Server-Side Rendering
Generera HTML på servern baserat på logik

En bild på en robot som sätter ihop paket.

## Slide 5: Lektionens innehåll
* Intro till SSR
* Utveckla måndagens exempel
* När använder man SSR?
* Mallar och templating-språk

## Slide 6: Intro till SSR
* Server-Side Rendering – att rendera (HTML) på servern
* Alternativ till statisk HTML (skriven av utvecklaren)
* Alternativ till frontend-rendering (d.v.s. DOM-manipulation)
* Låt oss experimentera!

## Slide 7: Vad är din spontana känsla för SSR?
Interaktiv slide där deltagaren kan välja ett av följande alternativ:

* Det känns meningslöst
* Spännande, men osäker på hur det ska användas
* Det känns väldigt användbart

## Slide 8: Vad är ett verkligt use case för SSR?
* Egentligen två frågor:
* När är **dynamiskt** innehåll bättre än **statiskt**?
* När är det bättre att rendera på **servern** än i **webbläsaren**?

## Slide 9: När kan det vara användbart att generera innehåll DYNAMISKT (istället för statiskt)?
Interaktiv slide där deltagaren kan skriva fritt

## Slide 10: Varför dynamiskt innehåll? (exempel)
* Användaranpassning (ex användarens namn i hörnet)
* Återanvända HTML på flera sidor
* Innehåll som uppdateras över tid (ex blogg, nyheter etc)
* Innehåll som genereras (ex tågtidtabeller, väderprognoser)

## Slide 11: När kan det vara användbart att generera innehåll DYNAMISKT (istället för statiskt)?
Interaktiv slide där deltagaren kan skriva fritt

## Slide 12: Varför dynamiskt på SERVERN? (exempel)
* Säkerhet (skicka inget till webbläsaren som användaren inte får se)
* Prestanda (en request efter HTML, istället för flera: HTML+JS+API)
* Fungerar utan JS i klienten (ex SEO, sociala medier-badges etc)

## Slide 13: Låt oss experimentera!
* Återanvända HTML (samma header på flera sidor)
* Innehåll som kan uppdateras (meny från javascript)

## Slide 14: Vad tycker du om resultatet?
Interaktiv slide där deltagaren kan ange 1-5 hur mycket hen håller med om följande påståenden:

* Jag förstår vad som händer
* Jag tycker det känns som en bra lösning
* Jag tycker att koden är lätt att läsa
* Jag tycker koden har bra "separation of concerns"

## Slide 15: Dålig separation of concerns
* HTML i strängar i javascript
* Svårt att läsa
* Svårt att redigera HTML

## Slide 16: Templating
* Att skapa mallar där innehåll byts ut dynamiskt
* Det finns hela språk för templating
* *Ex: Pug, Jinja2, Jade, Moustache, Handlebars*
* Kan mer än bara byta ut placeholders
* *Ex: Loopar, conditionals, localization, formatering, etc*

## Slide 17: Handlebars
* Ett av många template-språk (eller "motor", template engine)
* Populär, men val av motor är en smaksak
* Integrerar på ett bra sätt med express
* Läs mer på [handlebarsjs.com](https://handlebarsjs.com)

## Slide 18: Vad är din spontana känsla för templating?
Interaktiv slide där deltagaren kan välja ett av följande alternativ:

* Det känns sämre än att modifiera HTML i JS
* Spännande, men osäker på för- och nackdelar
* Det känns bättre än att modifiera HTML i JS

## Slide 19: Vad är sant om Server-Side Rendering
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* SSR betyder att man genererar HTML från scratch, istället för att använda filer
* SSR är nödvändigt för att bygga en säker webbapplikation
* SSR är ett bättre sätt att hantera dynamiskt innehåll en den DOM-lösning vi använde i ESC-projektet
* Templates är ett sätt att separera ansvaret för logik (javascript) och innehåll (HTML)

## Slide 20: Till nästa gång: Använd SSR på Kino-sidan
* Fortsätt bygga en egen server för Kino-sidan
* Använd SSR för att rendera meny från array
* Använd SSR för att återanvända layout
* Ovan förbereder er för nästa vecka (behöver ej redovisas)

## Slide 21: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag lärde mig något nytt idag
* Allt det nya gjorde det svårare för mig att förstå hur allt hänger ihop
* Jag känner mig trygg med hur jag kan använda SSR i Kino-projektet
* Jag känner mig trygg med att jag kommer kunna använda templating (exempelvis handlebars)