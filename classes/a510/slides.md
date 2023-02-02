# Föreläsning A201

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/alo97nf1jwp8)

## Slide 2: Förra lektionen
* Komponenterna i en fullstack-app
* Enhetstester, integrationstester och end2end-tester
* Dependency injection och mocking

## Slide 3: Vad är sant om testning?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Enhetstester ska testa så lite kod som möjligt
* Med "dependency injection" kan man uppnå bättre separation of concerns, vilket underlättar testning
* Mocking kan åstadkommas med vanliga objekt/funktioner, eller med specialbyggda verktyg
* Testning är ett bra sätt att upptäcka säkerhetsbrister

## Slide 4: Hur går det med uppgiften?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Min grupp har fördelat uppgifter
* Jag vet vad jag ska göra i projektet
* Jag har en god idé om vad som ska ske på frontend respektive backend i projektet
* Jag har börjat programmera

## Slide 5: Lektion A510 - Fem aspekter av webbsäkerhet
Några utvalda aspekter av säkerhet vid webbutveckling

> En bild föreställer en kedja med två hänglås.

## Slide 6: Lektionens innehåll
* XSS
* CSRF
* Cookies
* Authentication
* TLS

## Slide 7: Cross-Site Scripting (XSS)
* En server tar emot data, sparar det och servar det okritiskt
* En attacker skickar HTML som innehåll, med **script**
* Offer besöker sidan och får **script**, som körs av deras webbläsare
* Scriptet kan nu agera genom offrets webbläsare
* Låt oss experimentera!

> En bild föreställer ett diagram som visualiserar flödet som beskrivs ovan.

## Slide 8: Lösningar, XSS
* Lita aldrig på innehåll från användaren
* Använd ramverkets metoder mot XSS
* "Input sanitization"

## Slide 9: Cross-Site Request Forgery (CSRF)
* En attacker lurar offret att använda sin egen sida
* Kod på sidan initierar request från offrets webbläsare till annan sida
* Offret har agerat utan att först att de gjort något
* Låt oss experimentera

> En bild föreställer ett diagram som visualiserar flödet som beskrivs ovan.

## Slide 10: Lösningar, CSRF
* Kan inte motverkas 100%
* Kräv en **GET** innan användaren får göra en **POST**
* Å andra sidan inte särskilt skadligt, i sig självt

## Slide 11: Cookies
* Lösning för att identifiera användare mellan requests, trots att HTTP är stateless
* Användare besöker sida, vars server ber att få lagra en "cookie" hos webbläsaren
* Webbläsaren lovar att alltid inkludera cookien i efterföljande requests
* Servern känner igen cookien
* Olika användare (med olika cookies) får olika svar
* Låt oss experimentera

> En bild föreställer ett diagram som visualiserar flödet som beskrivs ovan.

## Slide 12: Cookies, CSRF och XSS i livsfarlig kombo
* Offret luras in på attackerns sida
* Med CSRF görs en request till den välvilliga servern, inklusive **script**
* Den välvilliga servern känner igen offrets cookie, och sparar hens innehåll (inklusive **script**)
* En annan användare besöker sidan och varpå scriptet körs
* Låt oss experimentera!

> En bild föreställer ett diagram som visualiserar flödet som beskrivs ovan.

## Slide 13: Lösningar, CSRF med cookies
* Använd bara cookies när det är nödvändigt
* Använd cookie policy SameSite=strict

## Slide 14: Authentication
* Åtkomstkontroll på servern
* Många olika lösningar, med olika för- och nackdelar
* Låt oss experimentera!

> En bild föreställer nycklar i en dörr

## Slide 15: Traffic Layer Security (TLS)
* Krypterad HTTP (även känt som HTTPS)
* All nätverkstrafik passerar många routers på vägen
* Kryptering gör att innehåll i HTTP inte kan läsas
* En attacker som tagit kontroll över en router kan ändå inte läsa det som passerar den
* Gör cookies, lösenord och tokens säkrare
* Kräver avancerad konfiguration, ej viktigt vid utveckling

> En bild föreställer ett diagram där trafik från webbläsare till server passerar tre
> routers, varav en har tagits över av en hacker. Ett förseglat kuvert skickas längs
> anslutningen, som visualiseras genom två pilar (request och response).

## Slide 16: Vad är sant om säkerhet på webben?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* XSS kan bara uppstå när man använder SSR
* CSRF är ett stort problem och måste till varje pris motverkas
* Man ska alltid använda HTTPS för webbapplikationer som är tillgängliga på internet
* Cookies är förknippat med många risker och bör därför aldrig användas
* Tokens är ett sätt att slippa skicka lösenord fram och tillbaka i varje request

## Slide 17: Till nästa lektion
* Fortsätt med uppgiften
* Ta hjälp via Slack vid behov
* På måndag: Deploy (att publicera backendkod)

## Slide 18: Hur känner du efter lektionen
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag lärde mig mycket nytt idag
* Jag känner mig nervös över hur jag ska upprätthålla säkerhet i mina webbapplikationer
* Jag har en idé om hur jag vill använda dagens ämnen i den uppgift vi jobbar med