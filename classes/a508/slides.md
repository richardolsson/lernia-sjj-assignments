# Föreläsning A508

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/al2ecqvzyb9p)

## Slide 2: Förra veckan
* Datakällor, API, CMS, databaser
* Integrationstestning av HTTP-server
* SSR i tre språk (Typescript, Python, PHP)

## Slide 3: Vad är sant om förra veckans ämnen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Syftet med databaser är att lagra data beständigt, alltså i flera år
* CMS låter redaktörer hantera innehåll, och renderar sedan fin HTML för användaren
* När ett system består av flera olika komponenter blir det mer sårbart
* Med TypeScript minskar riskerna för vissa typer av fel, och därför behovet av tester
* Integrationstestning av filmsiten är en kompromiss, men E2E-tester hade varit bättre

## Slide 4: Hur känner du kring förra veckans inlämning?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Inlämningen var en utmaning med många nya ämnen
* Jag känner mig nöjd med det jag lyckats med
* Jag hade velat ha mer tid till uppgiften

## Slide 5: Ett vanligt misstag: Backend vs frontend
* I HTTP är klient och server åtskilda
* Viktig säkerhets- och ansvarsprincip
* Förvirrande: Båda med samma programmeringsspråk (JS)
* Förvirrande: Båda i samma projekt på servern
* Vanligt misstag: Blandar frontend- och backendkod på servern
* Minnesregel: Fundera på vad som är "src"

## Slide 6: Lektion A508 - REST-design
Att utforma ett API enligt REST-principer. Hur kan man tänka?

## Slide 7: Dagens lektion
* Repetition, REST-principer
* Vad är en resurs?
* Relationer med resurser
* Övning i REST-design
* Genomgång, nästa inlämningsuppgift

## Slide 8: Vad vet vi om REST?
Interaktiv slide där deltagaren kan svara fritt

## Slide 9: REST
* **RE**presentational **S**tate **T**ransfer, stateless typ av API
* Försöker använda HTTP fullt ut (mer än exempelvis RPC)
* Modellerar "resurser" som man kan agera på med "verb"
* Resurser identifieras genom *URL*, handlingar genom *method*
* Vanligt mönster: Collections (plural) och items med ID (singular)

## Slide 10: Vad är en resurs?
* En “sak” snarare än en handling
* Kan vara nästan vad som helst
* Identifieras genom URI, Uniform Resource Identifier
* Beskrivs genom body (ofta JSON)
* **createPerson** är en handling, vad heter resursen?
* **sendEmail** är en handling, vad heter resursen?

## Slide 11: Relationer mellan resurser
* Resurser kan höra ihop, d.v.s. ha relationer
* Ex: En **artist** framför **låtar** skrivna av olika **låtskrivare**
* Hur kan vi uttrycka relationer med REST?

## Slide 12: Modellera "domänobjekt"
* Sök efter "substantiv", alltså saker, inom den domän du modellerar
* Fundera över relevans (exempelvis "Låt" vs "Lyric")
* Fundera över dignitet (exempelvis "Artist" vs "Låtskrivare")

En bild föreställer de fyra boxarna "Artist", "Låt", "Album" och "Låtskrivare"

## Slide 13: Modellera relationer
* Fundera över vilka saker som hör ihop, och hur
* Fundera över relevans (ex Låtskrivare och Artist)
* Fundera över indirekt/direkt (ex Låtskrivare och Album)

Bilden från föregående slide har kompletterats med pilar med text på.
En pil från Artist till Album lyder "spelar in"
En pil från Artist till Låt lyder "spelar"
En pil från Album till Låt lyder "innehåller"
En pil från Låt till Låtskrivare lyder "skriver"

## Slide 14: Relationer kan beskrivas åt olika håll (och båda kan vara rätt)
Föregående bild sida vid sida med en likartat bild med omvända pilar

En pil från Album till Artist lyder "spelades in av"
En pil från Låt till Artist lyder "spelades av"
En pil från Låt till Album lyder "finns på"
En pil från Låt till Låtskrivare lyder "skrevs av"

## Slide 15: Utforma REST-resurser
* En plural-resurs avser samlingen ("collection")
* En singular-resurs avser enskild ("item") ur samlingen
* Alla objekt måste inte motsvaras av resurser i ett REST API

Föregående bild har kompletterats genom att tre av boxarna har fått URL:er

Boxen Artist har fått URL:erna /artists och /artists/id
Boxen Låt har fått URL:erna /songs/ och /songs/ID
Boxen Album har fått URL:erna /albums och /albums/ID
Boxen Låtskrivare är utsuddad.

## Slide 16: Utforma REST-relationer
* Utgå ifrån enskild ("item")
* Utöka URL med plural-referens till relaterad samling
* Skilj på **/songs** (alla låtar) och **/artists/ID/songs** (artistens låtar)
* Vissa relationer förtjänar ingen egen resurs

Föregående bild har kompletterats med text på pilarna.

Pilen från Artist till Album lyder: /artists/ID/albums
Pilen från Artist till Låt lyder: /artists/ID/songs
Pilen från Album till Låt lyder /albums/ID/songs
Pilen från Låt till Låtskrivare är streckad och lyder "inkludera i låtobjektet"

## Slide 17: Dubbelriktade relationer i REST
* Relationer kan beskrivas åt olika håll
* Båda kan vara rätt och relevanta
* Använd samma mönster åt båda hållen

En pil från Album till Låt lyder: /albums/ID/songs
En pil från Låt till Album lyder: /songs/ID/albums

## Slide 18: Hur uttrycks relationen bäst?
* Alla relationer behöver inte egna resurser
* Generell regel: Vill du uttrycka relationen i singular? Avstå!
* Enskilda objekt kan inkluderas i svaret från den relaterade resursen

En pil från Artist till Album lyder: /artists/ID/albums
En pil från Album till Artist lyder: /albums/ID/artist
Den sista pilen är streckad och grå. Bredvid den finns varningstexten:

> Enskilt objekt, bättre att inkludera i Album-objektet

## Slide 19: Hur använder vi olika inputs/outputs?
* URI: Vilken resurs är vi intresserad av?
* Method: Vad vill vi göra?
* Body: Överföring av resursens innehåll (input/output)

## Slide 20: Relationer på andra sätt
* Query String används ofta vid GET
* Ex: Filtrera på relation eller annat (ett eller flera filter)
* Ex: Sortera resultat i viss ordning
* Ex: Paginera (begränsa antal resultat åt gången)
* Body används för vissa relationer (se även songwriter)

En bild föreställer boxarna Låt och Genre.
En pil från Genre till Låt med texten: /songs?genre=ID
En streckad och grå pil från Låt till Genre med texten: Inkludera i låtobjektets body

## Slide 21: Interagera med collections
* Ex: /albums eller /artists
* **GET** för att hämta lista
* **POST** för att skapa objekt

## Slide 22: Interagera med items
* Ex: /albums/ID eller /artists/ID
* **GET** för att hämta objekt
* **PATCH** för att redigera objekt
* **PUT** för att skapa/ersätta objekt
* **DELETE** för att radera objekt

## Slide 23: Vilka resurser behöver vilka metoder?
* Följ reglerna för collections/items
* Undvik dubbletter, d.v.s. samma effekt på två URL:er
* Ex: /artists (GET, POST)
* Ex: /artists/ID (GET, PATCH, DELETE)
* Ex: /artists/ID/songs (GET)

## slide 24: Hur dokumenterar man ett API?
* Lista resurser
* Lista metoder för varje resurs
* Beskriv inputs och outputs
* Ex: [GitHub](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28), [Mailgun](https://documentation.mailgun.com/en/latest/api-sending.html), [Strapi](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#endpoints), [Vårt CMS (Swagger)](https://plankton-app-xhkom.ondigitalocean.app/documentation/v1.0.0)

## Slide 25: Övning: Kom på egna exempel
* Hitta på ett sammanhang med 3-4 resurser och designa ett API
* Ex: Butik (produkter, kategorier, kunder, beställningar etc)
* Ex: Skola (studenter, lärare, kurser, program)
* Ex: Hyreshus (lägenheter, hyresgäster, hyresinbetalningar, kontrakt)
* Ex: Recept (ingredienser, recept, kategorier)
* Ex: Kalender (händelser, dagar, månader)
* Samarbeta i **Google Docs** eller **VSCode LiveShare**

## Slide 26: Vad är sant om REST-design?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Med REST ska alla domänobjekt ha en egen URL
* När vi använder REST innebär det att body innehåller JSON
* Med REST skulle en lista med en enskild författares alla böcker kunna ha URL /author/ID/books
* Vissa resurser svarar med en array i body (exempelvis JSON), medan andra svarar med enskilda objekt
* Collections brukar implementera POST och GET
* Query Strings används när vi vill kunna filtrera på flera olika relationer samtidigt

## Slide 27: Till nästa gång
* Börja arbeta med nästa inlämningsuppgift
* Börja planera ert arbete och fundera över ert API
* Inlämning finns på ItsLearning

## Slide 28: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag lärde mig något nytt idag
* Jag förstår REST bättre nu än jag gjorde när vi jobbat med det tidigare under kursen
* Jag tycker det är bra att lektionerna varvar mellan föreläsning, mentimeter och gruppdiskussion
* Jag känner mig trygg med att kunna bidra i gruppuppgiften