# Föreläsning A506

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/al2wre9i7hvw)

## Slide 2: Förra lektionen
* Datakällor – varifrån kommer data?
* CMS och databaser
* Case study med komplext system

## Slide 3: Vad är sant om datakällor och webbapplikationer?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* En webbapplikation kan använda sig av många olika datakällor samtidigt
* När ett system består av flera olika komponenter blir det mer sårbart
* En webbapplikation som jag byggt kan vara (indirekt) beroende av en databas som jag inte kontrollerar
* Om min kod ändå är indirekt beroende av en datakälla, hade det varit bättre att kommunicera direkt med den

## Slide 4: Hur går det med uppgiften?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Jag har börjat programmera på veckans inlämningsuppgift
* Jag har återanvänt kod jag skrev förra veckan
* Jag vet hur jag ska lösa alla delar av uppgiften

## Slide 5: A506 - Intro till testning med integrationstester
Automatiserad testning av komplexa system

En bild föreställer ett kretskort, där flera olika komponenter är interagerade på kortet.

## Slide 6: Dagens lektion
* Hur uppstår buggar och hur undviker vi dem?
* Olika typer av automatiserad testning
* Integrationstest med supertest

## Slide 7: Exempel: Richards filmsite
* Exempel från förra lektionen
* Filmlista och detaljsidor
* Låt oss förenkla koden!

## Slide 8: Citat
> Man blir orolig för att skriva sönder nån annan del i koden, att ens kod kan komma förstöra andras

Svar från lektion A307 angående samarbete i kod

## Slide 9: Hur uppstår buggar?
* Komplex och komplicerad logik (ovanligt)
* Kod tar inte hänsyn till ovanliga omständigheter
* Kod tar inte hänsyn till att omständigheter förändras
* Slarv och misstag, som i det här fallet
* Vi kan inte förhindra buggar, men vi kan upptäcka dem!

## Slide 10: Vad vet vi om automatiserad testning?
Interaktiv slide där deltagaren kan svara fritt

## Slide 11: Automatiserad testning
* Syftar till att undvika att kod "går sönder" ("regression")
* Finns etablerade ramverk, bibliotek och "test runners"
* Testa isolerat (lite kod åt gången) eller integrerat (mycket kod samtidigt)
* Kör tester blixtsnabbt efter varje ändring

## Slide 12: Hur mycket vill vi testa?
* Vilka delar hänger ihop med vilka?
* Kan vi testa bara vår egen kod?
* Olika typer av tester (unit, integration, end-to-end)

En bild föreställer diagrammet som ritades på förra lektionen

## Slide 13: Enhetstester
* Man försöker testa en så liten del som möjligt – snabbt!
* Kan vara svårt när enheter kommunicerar mycket
* Lättare med bra separation of concerns!

En bild föreställer en hög med röda legobitar

## Slide 14: Integrationstester och End-to-endtester
* Integrationstester testar flera enheter **i integration**
* Storleken på "integrationen" varierar
* E2E-tester testar hela systemet
* Mer realistiskt, men långsamt!

En bild föreställer ett verklighetstroget rött hus byggt med lego

## Slide 15: Olika tester har olika styrkor
* Skillnaden är mängden kod/komponenter under test
* Enhetstester testar lite kod åt gången, integrationstester testar mer, E2E-testar testar "all" kod
* Mängden kod avgör hur snabbt testen kan köras
* Gränserna är flytande – vad är egentligen en "enhet"? Vad är "hela systemet"?
* Bra med kombination – många enhetstest och några få viktiga e2e-/integrationstester

Ett diagram föreställer en skala från "Lite kod under test (snabbt)" till "Mycket kod under test (långsamt)".
Enhetstester är placerade på början av skalan. Integrationstester täcker en stor del av skalan
förutom precis i början och slutet. E2E-tester är placerade i slutet av skalan.

## Slide 16: Vi ska skriva ett integrationstest
* Testa att / svarar med HTML innehållandes filmer från API:et
* Testa att /movie/ID svarar med HTML innehållandes rätt titel
* Testar vår server och alla enheter "bakåt"
* Låt oss experimentera!

## Slide 17: Vad tycker du om integrationstestning som kvalitetskontroll i det här projektet?
Interaktiv slide där deltagaren kan välja ett av följande alternativ

* Dåligt, Gör ingen nytta
* Gör viss nytta, men har också viktiga brister
* Jättebra, gör stor nytta

## Slide 18: Vad är sant om testning?
* Integrationtester testar mer av programkoden än vad enhetstester gör
* E2E-tester går långsammare att köra än enhetstester gör, men är mer heltäckande
* Enhetstester är snabbare att skriva än integrationstester
* Integrationstestning av filmsiten är en kompromiss, men E2E-tester hade varit bättre

## Slide 19: Till nästa lektion
* Fortsätt med inlämningsprojektet
* Implementera integrationstester på din sida
* Nästa lektion: SSR i tre programmeringsspråk

## Slide 20: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Jag lärde mig något nytt idag
* Jag tror att jag förstår skillnaden mellan olika typer av automatiserad testning
* Jag förstår hur jag ska använda integrationstestning i veckans inlämningsuppgift
* Jag känner mig trygg med att hinna klart till på lördag