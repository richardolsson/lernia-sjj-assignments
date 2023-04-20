# Föreläsning B715

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/alzsjt6231vt)

## Slide 2: Förra lektionen
* Uppsamling, Wordle-projektet
* Tekniker för frontend och backend
* Introduktion till NEXT.js

## Slide 3: Vad är sant om NEXT.js?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* NEXT är ett ramverk för att använda React på både backend och frontend
* När man klickar på en länk så laddar NEXT  hem all HTML så att webbläsaren slipper
* Med NEXT kan du använda React istället för templating-motorer för SSR
* Med NEXT.js kan man bygga webbplatser som inte kräver någon backendkod

## Slide 4: Har ni kommit igång med uppgiften?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag har läst uppgiften
* Jag har bestämt träff med min grupp
* Min grupp har haft ett första möte för att börja planera

## Slide 5: NEXT.js och Cypress
Testa NEXT.js med Cypress och utforma testningsstrategier

## Slide 6: Lektionens innehåll
* Repetition, automatiserad testning
* Repetition, teststrategier
* Demo, Cypress och NEXT.js

## Slide 7: Men först! Låt oss reda ut gårdagens strul
* Skillnader mellan "nya" och "gamla" routern i NEXT
* Rendering på klient och servern
* Hämta data på servern
* Exportera statiska sidor med NEXT
* API routes
* Låt oss experimentera

## Slide 8: Man blir orolig för att skriva sönder nån annan del i koden, att ens kod kan komma förstöra andras
Citat från backendkursen vid fråga om problem vid samarbete

## Slide 9: Mjukvarutestning
* Syftar till att undvika att kod "går sönder" ("regression")
* Hjälper också till att i förväg definiera ett problem
* Standardiseras så att inget missas
* Kan vara manuell eller automatiserad

## Slide 10: Automatiserad testning
* Repetetiva uppgifter? Det löser vi med kod!
* Kan skrivas från scratch, men använd hellre etablerade testramverk
* Testa isolerat (lite kod åt gången) eller integrerat (mycket kod samtidigt)
* Kör tester blixtsnabbt efter varje ändring

## Slide 11: Olika tester har olika styrkor
* Skillnaden är mängden kod/komponenter under test
* Enhetstester testar lite kod åt gången, integrationstester testar mer, E2E-testar testar "all" kod
* Mängden kod avgör hur snabbt testen kan köras
* Gränserna är flytande – vad är egentligen en "enhet"? Vad är "hela systemet"?
* Bra med kombination – många enhetstest och några få viktiga e2e-/integrationstester

> En bild föreställer ett diagram i form av en tratt.
> Längst upp i tratten står det "Stort, komplext problem".
> Längst ned i tratten står det "Liten enhet".
> I övre delen finns "End2End-test", i mitten "Integrationstest" och i botten "Enhetstest"

## Slide 12: Testa rätt sak
* Testa **att** applikationen löser problemet
* Testa inte **hur** applikationen löser problemet
* Utgå från **definitionen** (4SM steg 1)

> En bild föreställer ett diagram från lektion B702 om att testa med fyrstegsmetoden.
> Till vänster en röd rektangel med texten "Problem", till höger en grön med texten "Lösning".
> Under rektanglarna går streckade pilar i tre steg – separera, experimentera och kombinera.
> Över rektanglarna går en pil med ett mikroskop som illustrerar testning.

## Slide 13: Utforma en teststrategi
* Vilken testtyp ska vi använda? (e2e, integration, enhet etc)
* Hur ska vi isolera, d.v.s. vad testas och vad mockas bort?
* Vilka tester krävs för att täcka hela **definitionen**?

## Slide 14: För vilken funktionalitet skulle det lämpa sig att använda E2E-tester?
Interaktiv slide där deltagaren kan svara fritt.

Använd exempel från Spegeln-projektet, Wordle-projektet eller fritt

## Slide 15: E2E-testning med Cypress
* Cypress kör tester i en webbläsare
* Simulerar en användare
* Kan testa vad som helst, oavsett ramverk

## Slide 16: Att tänka på när du E2E-testar
* Testa användarupplevelsen, inte koden
* Skriv tester som håller även om koden ändras
* Håll isär tester, de ska kunna köras individuellt
* Låt oss experimentera!

## Slide 17: Vad är sant om testningsstrategier, Cypress och NEXT.js?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* E2E-tester ger större säkerhet att allt fungerar, eftersom det testar mer kod
* Cypress testar webbappar i webbläsaren och därför spelar det ingen roll hur de är byggda
* E2E-tester är det bästa för NEXT.js eftersom det är ett fullstackramverk
* Med E2E-tester bör man testa användarupplevelsen och därför testa baserat på klassnamn
* En heltäckande teststrategi innehåller oftast flera olika typer av tester

## Slide 18: Till nästa gång
* Fortsätt planera Spegeln-projektet
* Fortsätt guiden på https://nextjs.org/learn
* Nästa lektion: Live-kodning, måndag

## Slide 19: Hur känner du efter lektionen?
* Jag lärde mig mycket nytt idag
* Jag känner att jag förstår NEXT bättre nu
* Jag förstår hur vi kan använda NEXT i Spegeln-projektet
* Jag vet vad nästa steg i projektet är