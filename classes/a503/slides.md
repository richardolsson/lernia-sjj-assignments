# Föreläsning A503

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/algrde545ypb)

## Slide 2: Förra veckan
* Introduktion till HTTP
* Olika HTTP-klienter
* Intro till REST (vs RPC)
* Fem frågor om HTTP

## Slide 3: Vad är sant om HTTP?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* HTTP är ett protokoll för kommunikation mellan användare och server
* De nio HTTP-metoderna hänger ihop med olika statuskoder
* En server som får en request efter resursen /api/users/1 kommer ska svara med en fil från mappen /api/users
* REST är en API-arkitektur som försöker följa grundläggande HTTP-principer

## Slide 4: Lektion A503 - Webbserver med Node.js
Vi startar vårt första Node-projekt och bygger en enkel webbserver i stil med GitHub pages

## Slide 5: Lektionens innehåll
* Node som utvecklingsmiljö
* Pakethantering
* HTTP med Node
* Serva statiska filer
* Ändra på filer "på vägen"

## Slide 6: Repetition
* Kod från olika källor
* Ramverk och bibliotek
* Vad gör en server?

## Slide 7: Kod kan komma från olika källor
* Kod som är del av ditt program
* Kod som är del av programmeringsspråket
* Kod som tillhör miljön

Ett diagram föreställer tre boxar med etiketterna "Ditt program", "Miljön" respektive "Språket".
"Ditt program" är ritad ovanför "Miljön" och "Språket", som ligger sida vid sida undertill.

## Slide 8: Programkod från flera olika källor
* Programkod skriven av dig
* Programkod skriven av ert team
* Externa moduler som inkluderas i ditt program (ramverk eller bibliotek)

Samma diagram diagram som tidigare, med boxarna "Ditt program", "Miljön" respektive "Språket".
Boxen "Ditt program" indelad i ytterligare boxar, bestående av "Din kod", "Andras kod" och
"Externa moduler".

## Slide 9: Vad gör en server? (exempel)
* "Serverar" "resurser"
* Hittar rätt data, exempelvis i en databas eller en mapp
* Kontrollerar in-data, och säkerställer rätt till åtkomst
* Gör beräkningar
* Sätter ihop HTML som kan skickas till webbläsaren (klienten)
* …och mycket mer

## Slide 10: Vilka API:er känner vi till från språket Javascript och miljön webbläsare?
Interaktiv slide där deltagaren kan skriva fritt.

## Slide 11: Vilka ramverk och bibliotek känner vi till?
Interaktiv slide där deltagaren kan skriva fritt.

## Slide 12: Skriva och köra kod i Node.js (jämfört med webbläsaren)
* Hur skriver man kod för webbläsaren?
* Hur får webbläsaren tag på koden?
* Hur skriver man kod för Node?
* Hur for Node tag på koden?

## Slide 13: Vi sammanställer allt i en tabell
En bild på ett spreadsheet där vi ska mata in allt vi lärt oss om miljöerna.

Se [separat spreadsheet](https://docs.google.com/spreadsheets/d/1K6sTa_BllcVdthmXXCMxo88mcefOhMgvlBtoYuf55CI/edit#gid=0)

## Slide 14: Fyra exempel med Node
* "Hello, world!"
* "Hello, world!" via HTTP
* "Hello, world!" via HTTP med ramverk
* Enkel filserver

## Slide 15: Har du några reflektioner om dagens kodexempel?
Interaktiv slide där deltagaren kan skriva fritt.

## Slide 16: Vad är sant om Node som utvecklingsmiljö?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påstående är:

* Node är en Javascript-miljö som är till för att bygga servermjukvara
* Miljön Node är annorlunda från webbläsaren. Därför finns inte Array, Date etc i Node
* Med npm kan jag installera och använda samma bibliotek för Node på servern som i webbläsaren
* Express är ett ramverk för att bygga HTTP-servrar

## Slide 17: Vad är sant om att bygga en HTTP-server?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påstående är:

* En HTTP-server lyssnar efter requests från klienter och bestämmer själv hur den ska svara
* app.get(…) är sättet man hämtar data via HTTP i Express
* En server som får en request efter resursen /api/users/1 kommer ska svara med en fil från mappen /api/users
* "Statiska filer" är en vanlig term som avser filer som levereras via HTTP så som de såg ut hos utvecklaren

## Slide 18: Till nästa gång: Börja bygga "statisk" HTTP-server
* Ska kunna serva alla filer för ert Kino-projekt
* Klona ert gemensamma repo och arbeta individuellt
* Behöver ej redovisas
* Ovanstående är en förberedelse för nästa veckas inlämningsuppgift

## Slide 19: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påstående är:

* Jag lärde mig något nytt idag
* Jag känner mig trygg med att kunna komma igång med Node på min dator
* Jag tror mig förstå hur man börjar bygga en HTTP-server med Node och express
* Jag tror mig veta hur jag ska göra för att kunna serva hela bio-projektet via egen serverkod