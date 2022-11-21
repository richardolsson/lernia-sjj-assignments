# Föreläsning A307

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/alu5ohhi3pci)

## Slide 2: Förra veckan
* Events i DOM
* Samarbete med Git & GitHub
* Asynkron programmering och fetch()

## Slide 3: Hur går det med uppgiften?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Jag har börjat programmera javascript i projektet
* Jag har slutfört någon deluppgift (såsom vi delade upp dem under förra veckan)
* Jag har använt mig av pull requests i projektet

## Slide 4: Hur många javascript-filer har ni i ert projekt?
Interaktiv slide där deltagaren kan svara 1-10

## Slide 5: Lektion A307 - Strukturera kod för samarbete
Undvik vanliga problem genom att skriva kod som håller över tid

Bild på garnnystan

## Slide 6: Lektionens innehåll
* "Separation of concerns"
* Separata filer, namespaces och moduler
* Objektorienterad programmering

## Slide 7: Vilka problem har ni stött på när ni samarbetat med kod?
Interaktiv slide där deltagaren kan svara i fritext

## Slide 8: "Separation of concerns"
* Kod som rör olika delar av systemet ska ligga på olika platser
* Olika delar kommunicerar via gränssnitt som ändras sällan
* "Olika platser" kan vara olika funktioner, filer, "namespaces"
* Minimera mängden globala variabler
* "Pure functions" – funktioner som inte ändrar något utanför

## Slide 9: Jobba med separata filer
* Lägg kod för olika delar av systemet i olika filer
* Personer som jobbar på olika delar, jobbar troligtvis i olika filer
* Låt oss experimentera

## Slide 10: Vad tycker vi om separata filer för att strukturera kod?
Interaktiv slide där deltagaren kan ange ett av följande alternativ:

* Dålig lösning
* Helt ok lösning
* Bra lösning

## Slide 11: "Namespacing"
* Ett utrymme ("space") där namn måste vara unika
* Samma namn får förekomma i olika namespaces
* Andra programmeringsspråk har funktionalitet för detta
* I javascript använder vi objekt
* Låt oss experimentera!

## Slide 12: Vad tycker vi om namespacing för att strukturera kod?
Interaktiv slide där deltagaren kan ange ett av följande alternativ:

* Dålig lösning
* Helt ok lösning
* Bra lösning

## Slide 13: Moduler (och bundling)
* Moduler är separata filer som "importeras" i varandra
* Scopet är per modul, inte globalt
* Programmeraren anger vad som ska exporteras
* En "bundler" låter oss slå ihop moduler till en enda fil
* Låt oss experimentera!

## Slide 14: Vad tycker vi om moduler?
Interaktiv slide där deltagaren kan ange ett av följande alternativ:

* Dålig lösning
* Helt ok lösning
* Bra lösning

## Slide 15: Sammanfattning
* "Separation of concerns" handlar om att separera kod
* Med namespaces blir globala scopet mindre rörigt
* Med moduler hålls globala scopet helt rent

## Slide 16: Objektorienterad Programmering
Ett annat sätt att strukturera sin kod och uppnå "separation of concerns"

## Slide 17: Filosofin bakom "objektorienterat"
* Aktörer (**objekt**) som **skickar meddelanden** till varandra
* Objekt spelar olika **roller** i systemet
* Objekt av olika **typer** kan spela samma roll
* Hur objekt reagerar kan variera från typ till typ

## Slide 18: Exempel: Fruktståndet
* Alla frukter spelar **rollen** "frukt"
* Man kan skicka **meddelandet** "är du mogen?" till vilken frukt som helst
* Olika **typer** av frukter kommer lista ut svaret på olika sätt (konsistens, färg, etc)
* Olika **objekt** av samma typ, exempelvis alla päron, kommer ge olika svar

## Slide 19: Objektorienterad programmering
* Ser olika ut i olika programmeringsspråk
* Modern javascript är "klassbaserat"
* Typer av objekt = klasser
* Roller = klasser med identiska gränssnitt
* Objekt = instanser av klasser
* Meddelanden = metoder på objekt

## Slide 20: Vårt system ur OOP-perspektiv
* Vilka roller finns?
* Vilka meddelanden behöver de kunna hantera?
* Vilka typer av objekt spelar de här rollerna?
* Låt oss experimentera!

## Slide 21: Vad tycker vi om objektorienterad programmering (för separation of concerns)?
Interaktiv slide där deltagaren kan ange ett av följande alternativ:

* Dålig lösning
* Helt ok lösning
* Bra lösning

## Slide 22: Sammanfattning
* Objektorienterad programmering är en filosofi
* Syftet är "separation of concerns" och hållbar kod
* Filosofin kan tillämpas på olika sätt

## Slide 23: Vad är sant om att kodstruktur och samarbete?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Det är viktigt med "separation of concerns", oavsett hur man uppnår det
* Genom att strukturera vår kod på rätt sätt kan vi helt slippa merge-konflikter
* Moduler i javascript kräver bundling för att fungera
* Att använda klasser innebär att man ägnar sig åt objektorienterad programmering

## Slide 24: Kommande veckor
* Fortsätt med gruppuppgiften
* Automatiserad testning (onsdag)
* Javascript-ramverk (torsdag)
* Nästa vecka muntlig examination och handledning
* Hemtenta delas ut på torsdag

## Slide 25: Hur känner du efter föreläsningen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Jag fick nya idéer om hur man kan strukturera kod
* Jag tror att dagens föreläsning hjälper oss i gruppen samarbeta med vår kod
* Dagens ämne var intressant, men det känns för omfattande för att introducera i det här projektet