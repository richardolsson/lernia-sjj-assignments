# Föreläsning B706

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/al5yubikmvco)

## Slide 2: Förra veckan
* Intro till React
* Komponenter
* Props och callbacks
* Upplägg på uppgiften

## Slide 3: Vad är sant om React?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* React är ett sätt att skriva HTML i Javascript
* React är ett bibliotek för att bygga gränssnitt med komponenter
* När man bygger med React får man bra separation of concerns
* React genererar HTML som skickas från server till webbläsaren

## Slide 4: Hur går det med uppgiften?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag har gjort en plan
* Jag har börjat utformat mitt API
* Jag har börjat programmera på backend
* Jag har börjat programmera på frontend

## Slide 5: Lektion B706 – Kombinera frontend och backend
Att använda de kunskaper vi har, för att bygga en fullstack-app med både frontend och backend

## Slide 6: Lektionens innehåll
* Repetition: Vad gör backend?
* Repetition: REST-design
* Hur kombinerar vi backend med React?

## Slide 7: Vad gör en server?
Interaktiv slide där deltagaren kan svara fritt.

## Slide 8: Vad gör en server? (exempel)
* "Serverar" "resurser"
* Hittar rätt data, exempelvis i en databas eller en mapp
* Kontrollerar in-data, och säkerställer rätt till åtkomst
* Gör beräkningar
* Sätter ihop HTML som kan skickas till webbläsaren (klienten)
* …och mycket mer

## Slide 9: Skillnader frontend/backend
* Olika miljöer (node resp. webbläsare), med olika funktionalitet
* Olika bibliotek finns tillgängliga
* Frontend är HTTP-klient, backend är HTTP-server
* Backendkod läses direkt från filsystemet, men frontendkod måste levereras via HTTP

> En bild föreställer en screenshot av det spreadsheet vi tillsammans skapade i backend-kursen:
> https://docs.google.com/spreadsheets/d/1K6sTa_BllcVdthmXXCMxo88mcefOhMgvlBtoYuf55CI

## Slide 10: REST
* **RE**presentational **S**tate **T**ransfer, stateless typ av API
* Försöker använda HTTP fullt ut (mer än exempelvis RPC)
* Modellerar "resurser" som man kan agera på med "verb"
* Resurser identifieras genom *URL*, handlingar genom *method*
* Vanligt mönster: Collections (plural) och items med ID (singular)

## Slide 11: Vad är en resurs?
* En “sak” snarare än en handling
* Kan vara nästan vad som helst
* Identifieras genom URI, Uniform Resource Identifier
* Beskrivs genom body (ofta JSON)

## Slide 12: Modellera "domänobjekt"
* Sök efter "substantiv", alltså saker, inom den domän du modellerar
* Fundera över relevans (exempelvis "Song" vs "Lyric")
* Fundera över dignitet (exempelvis "Artist" vs "Songwriter")

> En bild föreställer de fyra boxarna "Artist", "Låt", "Album" och "Låtskrivare"

## Slide 13: Modellera relationer
* Fundera över vilka saker som hör ihop, och hur
* Fundera över relevans (ex Songwriter och Artist)
* Fundera över indirekt/direkt (ex Songwriter och Album)

> Bilden från föregående slide har kompletterats med pilar med text på.
> En pil från Artist till Album lyder "spelar in"
> En pil från Artist till Låt lyder "spelar"
> En pil från Album till Låt lyder "innehåller"
> En pil från Låt till Låtskrivare lyder "skriver"

## Slide 14: Utforma REST-resurser
* En resurs kan vara en "collection" (många saker, plural) eller en "item" (enskild sak, identifierad med ID)
* Exempel: **/artists** (collection, alla artister) och **/artists/14** (item, artist med ID 14)
* Alla domänobjekt måste inte motsvaras av en resurs
* Relationer utgår oftast ifrån enskilda ("items")
* Utöka URL med plural-referens till relaterad samling
* Skilj på **/songs** (alla låtar) och **/artists/ID/songs** (artistens låtar)
* Vissa relationer förtjänar ingen egen resurs

> Föregående bild har kompletterats genom att tre av boxarna har fått URL:er och med pilar mellan boxarna.
> Boxen Artist har fått URL:erna /artists och /artists/id
> Boxen Låt har fått URL:erna /songs/ och /songs/ID
> Boxen Album har fått URL:erna /albums och /albums/ID
> Boxen Låtskrivare är utsuddad.
> Pilen från Artist till Album lyder: /artists/ID/albums
> Pilen från Artist till Låt lyder: /artists/ID/songs
> Pilen från Album till Låt lyder /albums/ID/songs
> Pilen från Låt till Låtskrivare är streckad och lyder "inkludera i låtobjektet"

## Slide 15: Till vad behöver vi API i Wordle-projektet?
Interaktiv slide där deltagaren kan svara fritt.

## Slide 16: Kombinera React med backend
* Servern skickar HTML med JS
* JS startar React på frontend
* Vårt React-gränssnitt gör requests till API
* Servern svarar
* Demo: ToDo-app med backend

## Slide 17: Vad är sant om fullstack?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* React är ett fullstack-bibliotek
* En app är "fullstack" när kod körs på både backend och frontend
* "Frontend" betyder "kod som körs i webbläsaren" och "Backend" betyder "kod som körs på servern"
* HTTP och REST är två olika sätt att kommunicera i en fullstack-app

## Slide 18: Vilka skillnader finns mellan frontend/backend?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Backend är säkrare för där kan man lagra data som inte alla kommer åt
* Fullstack-appar är långsammare än rena frontend-appar eftersom man måste vänta på servern
* Inom frontend använder vi bara ett programmeringspråk, men på backend använder vi flera olika
* På frontend gör vi "requests", men på backend gör vi bara "response"

## Slide 19: Till nästa gång
* Förslag: Implementera DELETE eller PATCH i ToDo-exemplet
* Förslag: Justera ditt projekt med proxy och bekräfta att det fungerar
* Nästa lektion: Onsdag, databaser

## Slide 20: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag lärde mig mycket nytt idag
* Jag har en idé om hur jag ska använda det vi gått igenom idag i Wordle-projektet
* Jag känner mig trygg med att bli klar med projektet