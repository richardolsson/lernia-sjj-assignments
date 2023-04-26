# Föreläsning B717

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/albo8unhcv78)

## Slide 2: Förra lektionen
* Automatiserad testning
* Teststrategier
* Cypress och NEXT.js

## Slide 3: Vad är sant om NEXT.js?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* NEXT är ett ramverk för SSR, API-routes och statiskt innehåll
* Med NEXT kan du använda React istället för templating-motorer för SSR
* Med NEXT.js kan man bygga webbplatser som inte kräver någon backendkod
* När jag bygger en app med NEXT.js skriver jag kod som kan komma att köras på både server och klient

## Slide 4: Hur går det med uppgiften?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Vi har gjort en plan för vad vi ska bygga
* Vi har fördelat arbetet inom gruppen och jag vet vad jag ska jobba med
* Jag vet hur jag ska komma igång med mina uppgifter

## Slide 5: Säkerhet med NEXT.js
Vad innebär "auth" och hur hanterar man inloggning i en app byggd med NEXT.js?

> En bild föreställer ett fingeravtryck på en lysande yta

## Slide 6: Lektionens innehåll
* Principer för "auth"
* Sessioner
* Cookies
* Kryptering och JWT

## Slide 7: Vad betyder "Auth"?
* "Authentication" – att identifiera en användare
* "Authorization" – att begränsa innehåll utifrån behörighet
* I vardagstermer: Inloggning

## Slide 8: Vilka delar är betrodda i en webbapp?
* Auth (liksom all säkerhet) handlar om tillit
* Många aktörer är involverade i en fullstack-app
* Ex: Serverkoden som vi skriver
* Ex: Webbläsaren och den kod som körs där
* Ex: Användaren
* Ex: Externa API:er

## Slide 9: Litar vi på användaren?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Nej, inte alls
* Till viss del
* Ja, helt och hållet

## Slide 10: Litar vi på webbläsaren?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Nej, inte alls
* Till viss del
* Ja, helt och hållet

## Slide 11: Litar vi på servern?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Nej, inte alls
* Till viss del
* Ja, helt och hållet

## Slide 12: Litar vi på externa API:er?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Nej, inte alls
* Till viss del
* Ja, helt och hållet

## Slide 13: Auth är en backendfråga
* Endast servern går att lita på
* Användaren kan vara en attacker
* Webbläsaren kan ersättas med andra verktyg
* Endast på servern har vi full kontroll

## Slide 14: Problem: HTTP är stateless
* Servern minns inget mellan två requests
* Två olika requests kan komma från två olika användare
* Varje request är "atomisk" (innehåller allt som behövs)
* Varje request måste innehålla någon identifikation
* En lösning: Session cookies

## Slide 15: "Sessioner"
* Varje sidvisning är atomisk, som om den kom från en ny användare
* Användaren tänker annorlunda: "Jag surfade 30 minuter på Facebook"
* "Session" avser den tid som användaren interagerar med webbplatsen
* Tekniskt innebär "sessioner" att vi behåller state om användaren

## Slide 16: Cookies
* Lösning för att identifiera användare mellan requests, trots att HTTP är stateless
* Användare besöker sida, vars server ber att få lagra en "cookie" hos webbläsaren
* Webbläsaren lovar att alltid inkludera cookien i efterföljande requests
* Servern känner igen cookien
* Olika användare (med olika cookies) får olika svar

> En bild föreställer ett diagram som visualiserar flödet som beskrivs ovan.

## Slide 17: Auth med cookies i NEXT.js
* Endast den kod som körs på backend är säker
* SSR (server-komponenter eller `getServerSideProps()`)
* API routes (`app/api` eller `pages/api`)
* **Inte** statiska sidor (körs på klienten) eller klientkomponenter
* Låt oss experimentera!

## Slide 18: Nackdelar med cookies
* Tillgängliga för klienten (och eventuellt kod på klienten)
* Lagras i plaintext (kan läsas av användaren)
* En hacker kan hitta på en egen
* Lösning A: kryptering
* Lösning B: JWT

## Slide 19: Krypterade cookies
* Spara cookies som vanligt, men oläsbart
* Kryptera data och skicka som cookies i HTTP-svar
* Läs cookie från HTTP-requests och dekryptera
* Fördel: Säkert
* Men: Kan ej läsas på klienten (ibland användbart)
* Låt oss experimentera!

## Slide 20: JSON Web Tokens (JWT)
* JSON-strängar som "signeras" kryptografiskt
* Signaturen gäller en viss sessionsdata
* En hacker kan ändra datan, men inte signera den
* Fördel: Säkert
* Men: All data tillgänglig hos klienten
* Låt oss experimentera!

## Slide 21: Vad är sant om säkerhet i NEXT.js?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Auth kan bara hanteras på servern, d.v.s. bara i API-routes och vid SSR
* JWT är ett sätt att lagra sessionsdata så att användaren inte kan se det
* För att undvika att en hacker ändrar sessionsdata måste den krypteras
* Cookies är nödvändiga eftersom HTTP är stateless, medan användare inte är det

## Slide 22: Till nästa gång
* Fortsätt med gruppuppgiften
* Förbered redovisning till på tisdag
* Nästa lektion (imorgon): Kryptering och lösenordshantering

## Slide 23: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag lärde mig mycket nytt idag
* Jag känner att jag förstår hur cookies fungerar
* Jag känner att jag förstår hur jag kan använda det vi gått igenom idag i den uppgift vi just nu jobbar med