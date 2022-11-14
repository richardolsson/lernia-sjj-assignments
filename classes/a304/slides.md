# Föreläsning A304

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/al8b6spcudnv)

## Slide 2: Förra veckan
* Kursstart
* Programmeringsspråket JS
* Gränssnitt mellan din och andras kod
* Inlämningsuppgift mobilmeny

## Slide 3: Vad är sant om javascript?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Ett expression är kod (mer eller mindre komplex) som kan utvärderas till ett enskilt värde
* Programmeringsspråket Javascript innehåller funktionalitet för att skapa en div
* Ett namn i javascript refererar till en variabel eller funktion som existerar någonstans i koden, miljön eller språket
* DOM API är en del av miljön webbläsare och exponeras via globala objektet document
* Med javascript och DOM API kan man åstadkomma allt som HTML och CSS kan åstadkomma

## Slide 4: Vad är sant om inlämningsuppgiften (mobilmenyn)?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Jag har löst inlämningsuppgiften
* Jag hade de verktyg jag behövde för att lösa den
* Min lösning bestod av fler ändringar/tillägg i HTML och CSS än i javascript

## Slide 5: Live-kodning av mobilmeny
Bild på mobilmenyn.

## Slide 6: Lektion A304 - DOM-events (och gruppuppgift)
Program som reagerar, inte bara agerar

Bild på knappar

## Slide 7: Föreläsningens innehåll
* Event-hantering (i DOM)
* Nästa inlämningsuppgift

## Slide 8: Vad är syftet med events i javascript?
Interaktiv slide där deltagaren kan svara i fritext

## Slide 9: DOM-eventens evolution
* Event-attribut (HTML)
* Event-properties (JS)
* EventTarget (JS)

## Slide 10: Event-attribut i HTML
* Attribut som börjar med on*
* Attributens värde ska vara javascript
* Låt oss experimentera!

## Slide 11: Vad tycker du om event-attribut i HTML?
Interaktiv slide där deltagaren kan välja mellan följande alternativ:

* Dåligt
* Varken eller
* Bra

## Slide 12: Event-properties i JS
* Properties som börjar med on*
* Dess värde ska vara en funktion som kan köras
* Låt oss experimentera!

## Slide 13: Vad tycker du om event-properties i JS?
Interaktiv slide där deltagaren kan välja mellan följande alternativ:

* Dåligt
* Varken eller
* Bra

## Slide 14: EventTarget-gränssnittet i JS
* Ett interface som olika objekt kan ha
* Funktionen addEventListener() börjar "lyssna" efter ett event
* Funktionen removeEventListener() slutar lyssna
* Låt oss experimentera!

## Slide 15: Vad tycker du om event-attribut i HTML?
Interaktiv slide där deltagaren kan välja mellan följande alternativ:

* Dåligt
* Varken eller
* Bra

## Slide 16: Bonus: Event-faser
Diagram över en trädstruktur. Högst upp (roten) är en div, med två barn: en ul och en a. Barnet ul har två barn i sin tur, båda benämnda li.

* Events rör sig uppåt och nedåt i trädet
* I "capture-fasen" rör sig eventet nedåt
* I "bubble-fasen" rör sig eventet uppåt
* Låt oss experimentera!

## Slide 17: Vad är sant om events i DOM?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Program utan event-hantering körs och avslutas omedelbart när de laddats
* I modern webbutveckling används alltid EventTarget-gränssnittets funktioner
* Både event-properties och EventTarget kräver ett uttryck som utvärderas till en funktion
* En fördel med EventTarget är att man kan lyssna på samma event med flera funktioner

## Slide 18: Bokningssystem på ESC-sidan
Bild på nya features på ESC-sidan

Gruppuppgift, tre veckor

## Slide 19: Moment
* Ladda challenges-data från API
* Filtrera challenges
* Boka challenges mot API
* Låt oss gå igenom i detalj

## Slide 20: Grupparbete
* Arbeta tillsammans och individuellt
* Tillämpa parprogrammering/mobkodning om ni vill
* Planera noga, ha återkommande möten och för anteckningar
* Mötesanteckningar är en del av inlämningen

## Slide 21: Första steget: Planering (senast fredag)
* Hur planerar ni att dela upp arbetet?
* När ska ni ha gruppmöten? Bestäm alla datum redan nu
* Hur sköter ni kommunikationen mellan möten?
* Vems befintliga kod ska ni utgå ifrån?

## Slide 22: Till nästa gång (onsdag)
* Planera och organisera gruppen
* Börja experimentera med lösningar

## Slide 23: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Jag har fått en fördjupad förståelse om events i DOM
* Jag vet vad jag ska göra härnäst
* Jag känner mig peppad på att komma igång med grupparbetet