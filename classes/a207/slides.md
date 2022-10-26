# Föreläsning A201

## Slide 1: Delta i föreläsningen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/alqunuehaib9)

## Slide 2: Förra lektionen
* Layout med CSS
* Dåliga/gamla metoder: Tabeller, Floats, Absolute
* Aktuella metoder: Flexbox, Grid

## Slide 3: Vad är sant om layout med CSS?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Grid och Flexbox är de enda varianter man ska använda för layout idag
* Med Grid och Flexbox blir kopplingen mellan HTML/DOM och design mindre stark
* När man ska implementera en design måste man välja antingen Grid eller Flexbox
* Jag har experimenterat med layout i CSS sedan förra lektionen

## Slide 4: Lektion A207 - Responsiv CSS & SASS
Designa för mobiler, och skriv CSS mer effektivt.

Bild från Googles dokumentation om mobildesign, med två designer varav en är mobilanpassad.

## Slide 5: Föreläsningens innehåll
* Varför designa för olika skärmar?
* Responsiv design med CSS
* SASS för responsiv design (och annat)

## Slide 6: Vilken typ av enhet använder du mest för att surfa på internet?
Interaktiv slide där deltagaren kan rangordna följande alternativ:

* Desktop-dator
* Laptop-dator
* Läsplatta/tablet
* Smartphone

## Slide 7: Olika skärmar
* Vi webbutvecklare använder ofta stora skärmar
* De flesta andra använder webben på sin mobil
* Webbplatser behöver fungera bra på alla enheter
* Vad är "bra"?

## Slide 8: Vad är bra på desktop?
Bilden föreställer sydsvenskan.se i desktop-läge.

* Använd utrymmet för att ge överblickbarhet
* Inte för breda textkolumner (svårt att läsa)
* Muspekare är väldigt exakta

## Slide 9: Vad är bra på mobilskärm?
Bilden föreställer sydsvenskan.se i mobil-läge.

* Fyll hela bredden med en enda kolumn
* Större text för bättre läsbarhet, ex om skärmen rör sig
* Större knappar etc, för tjocka tummar

## Slide 10: Mobile first
* Bygg en design som funkar bra på mobil
* Lägg sedan till CSS för större skärmar
* Villkora CSS:en för stora skärmar

## Slide 11: Låt oss experimentera
Bild föreställande den layout vi ska implementera, snarlik den från föregående föreläsning.

## Slide 12: Sammanfattning
* "Responsiv design" är design som anpassar sig till skärmens storlek
* Använd media queries för att ange olika CSS för olika skärmar
* Använd SASS för att underlätta skrivandet av koden

## Slide 13: Vad är sant om responsiv CSS och SASS?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* "Mobile first" betyder att man först skriver CSS för mobil, sedan en helt annan CSS för desktop
* Enheterna rem, vh och px har det gemensamt att deras betydelse är konsekvent i ett helt dokument
* SASS fungerar bara i moderna webbläsare
* Med SASS mixins blir det mindre CSS för webbläsaren att ladda hem och läsa