# Föreläsning B703

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/albyoi993bha)

## Slide 2: Förra veckan
* Algoritmer
* Fyrstegsmetoden
* TDD
* Inlämning: Wordle-algoritm

## Slide 3: Vad tycker du om de olika aspekterna av inlämningsuppgiften?
Interaktiv slide där deltagaren kan ange från 1-5 hur lätta/svåra följande aspekter var:

* Tänka ut en lösning (algoritm) på problemet
* Omsätta algoritmen i kod
* Tänka ut en strategi för heltäckande testning
* Skriva tester som följer den uttänkta strategin

## Slide 4: Hur angrep du problemet?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag använde fyrstegsmetoden
* Jag använde TDD
* Jag löste hela problemet i ett steg
* Jag skrev först ner en algoritm i text

## Slide 5: Lektion B703 – React
Introduktion till teorin bakom React, och vad det innebär i praktiken.

> En bild föreställer dominobrickor som faller

## Slide 6: Lektionens innehåll
* Repetition, ramverk & bibliotek
* Olika sätt att programmera
* Olika sätt att programmera
* Derived state
* ToDo-lista med React

## Slide 7: Förkunskaper, React
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag känner till React
* Jag vet hur man använder React
* Jag har använt React
* Jag vet hur React fungerar "under huven"

## Slide 8: Programkod från flera olika källor
* Programkod skriven av dig
* Programkod skriven av ert team
* Externa moduler som inkluderas i ditt program (ramverk eller bibliotek)

> Ett diagram föreställer tre boxar med etiketterna "Ditt program", "Miljön" respektive "Språket".
> "Ditt program" är ritad ovanför "Miljön" och "Språket", som ligger sida vid sida undertill.
> Boxen "Ditt program" indelad i ytterligare boxar, bestående av "Din kod", "Andras kod" och
> "Externa moduler".

## Slide 9: Varför ramverk och bibliotek?
* Skriv mindre kod (återanvänd kod som andra skrivit)
* Använd välbeprövade lösningar och strukturer
* Tala ett gemensamt språk som många förstår

## Slide 10: Vilka ramverk/bibliotek?
* Stort, ständigt växande antal
* De tre vanligaste idag är React, Vue och Angular
* React ca 62% av söktrafiken globalt, Angular ca 25%, Vue ca 13% (Google Trends)
* React ca 2600 jobbannonser i Sverige just nu, Angular ca 1900, Vue ca 1000 (LinkedIn, nov 2022)

## Slide 11: Olika programmerings-paradigm
Olika sätt att programmera och hantera "state"

> En bild föreställer en gata med mycket folk, där en häst och en spårvagn båda syns i bild.

## Slide 12: Vad är state?
* Den data som lagras i ett program
* Beskriver programmets "tillstånd" vid varje givet tillfälle
* Ex: Variabler (internt i koden)
* Ex: filer, DOM, m.m. (externt från koden)

## Slide 13: Fem kort på handen
Jag tar fem kort och visar dem för er. Sedan byter jag successivt ut kort mot nya. Er uppgift är att tala om för mig på slutet: Vad är summan av alla kort?

> En bild föreställer spelkort

## Slide 14: Vilket är det enklaste sättet att lösa kortleksfrågan?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Memorera vilka kort vi började med, vilka kort vi tog bort och vilka kort vi lade till – räkna ihop summan på slutet.
* Memorera summan av de kort vi började med och uppdatera summan när kort läggs till/tas bort.

## Slide 15: Vilket är det enklaste sättet att lösa kortleksfrågan? (ett till alterantiv)
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Memorera vilka kort vi började med, vilka kort vi tog bort och vilka kort vi lade till – räkna ihop summan på slutet.
* Memorera summan av de kort vi började med och uppdatera summan när kort läggs till/tas bort.
* Titta i slutet vilka kort som finns kvar och räkna ihop deras summa

## Slide 16: Olika tillvägagångssätt, för- och nackdelar
* **Memorera summan**:  💪 Lätt att minnas ⚠️ Tappar info ⚠️ "Derived state"
* **Memorera korten**: 💪 All info finns kvar ⚠️ "Derived state"
* **Kolla i slutet**: 💪 Går till källan (inget "derived state")

## Slide 17: "Derived state"
* State som kan räknas ut baserat på annat state
* Ditt ansvar som programmerare att uppdatera
* Kan leda till buggar när state hamnar ur synk

## Slide 18: Exempel: Derived state i chatt-app
* Vad är appens "huvud"-state?
* Vad är exempel på derived state?

> En bild föreställer två vyer i en chatt-app. Dels en lista på pågående konversationer.
> Dels en konversation med fem meddelanden i.

# Slide 19: Ett motgift mot derived state
* Spara bara en version av state
* Så fort state ändras, "reagera" överallt
* Exempel: Spreadsheets
* Programmeringsparadigmet "Reactive"

## Slide 20: Vad är sant om derived state?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* "State" är en term som används för att beskriva vad ett program "minns" just nu, exempelvis variabelvärden
* "Derived state" är state som skulle kunna räknas ut från annat state
* Komplexa applikationer måste ha derived state och det är inget problem

## Slide 21: Fem korthögar
* Fem högar: 6, 6, 7, 6, 6 st kort
* I slutet ska varje hög vara dubbelt så stor som föregående
* Hur kan ni flytta runt kort för att uppnå det?

## Slide 22: Imperativ programmering
* Från grammatikens "imperativ" (uppmana)
* Instruera, steg för steg hur datorn ska nå resultat
* All JS vi använt hittills
* (Såhär fungerar datorn i grunden)

## Slide 23: "Deklarativ programmering"
* Beskriv resultatet direkt
* Någon annan ansvarar för att ta de steg som behövs
* Imperativ kod döljs bakom omgivningen

## Slide 24: Hur går man härifrån…
> En bild föreställer ToDo-appen från kurs A3, med fem todo items, inga överstrukna.

## Slide 25: …till hit?
> En bild föreställer ToDo-appen med fyra överstrukna items.

## Slide 26: Mestadels imperativt, eller mestadels deklarativt?
Interaktiv slide där deltagaren kan ange på skala 1-5 ifall något är mestadels imperativt (1) eller mestadels deklarativt (5)

* HTML
* CSS
* Javascript DOM API
* Jest
* Express routes
* fetch()

## Slide 27: Imperativt eller deklarativt?
> En bild föreställer en skala från vänster (imperativt) till höger (deklarativt).
> På skalan är följande koncept utplacerade:
> * fetch() – till vänster om mitten
> * jest – långt till vänster
> * express routes – till vänster om mitten
> * JS DOM API – långt till vänster
> * Algoritmuppgiften – långt till vänster
> * HTML/CSS – långt till höger
> * React – från straxt till vänster om mitten till höger

## Slide 28: Tänk tillbaka till ToDo-projektet. I vilken utsträckning använde du dig av?
Interaktiv slide där deltagaren kan ange 1-5 i vilken utsträckning följande koncept användes i ToDo-uppgiften.

* Imperative programming
* Declarative programming
* Derived state
* Reactive UI

## Slide 29: Vilket paradigm tänker du är…
Interaktiv slide där deltagaren kan ange 1-5 huruvida påståendena stämmer bäst in på imperativ programmering (1) eller deklarativ programmering (5)

* lättast att förstå?
* mest flexibelt och mångsidigt?
* bäst för att skapa buggfri kod?
* mest effektivt, d.v.s. kräver minst av datorn?

## Slide 30: React
Ett bibliotek för att bygga reaktiva gränssnitt som uppdateras imperativt, men med deklarativ kod.

## Slide 31: Intro till React
* Reaktivt – lätt att undvika derived state
* Deklarativt – lätt att förstå
* Imperativt "under huven" – snabbt!
* Demo

## Slide 32: Vad är React?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Ett ramverk för att bygga full-stack appar
* Ett SSR-bibliotek
* Ett bibliotek för att manipulera DOM

## Slide 33: Vad är JSX?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Ett separat programmeringsspråk
* En alternativ syntax för vissa JS-funktioner
* Ett sätt att skriva HTML

## Slide 34: Hur underlättar React webbutveckling?
Interaktiv slide där deltagare kan ange på en skala från 1-5 hur mycket följande moment underlättas av React:

* Att hålla hela gränssnittet "i synk"
* Att manipulera DOM
* Att skriva algoritmer
* Att skriva webbappar utan buggar

## Slide 35: Till nästa gång
* Slutför Wordle-algoritmer
* Påbörja inlämningsuppgift: Wordle-klon (deadline om 4v)
* Experimentera med React
* Nästa lektion (onsdag): React-komponenter

## Slide 36: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag lärde mig mycket idag
* Jag förstår mer om React nu än jag kunde när lektionen började
* Jag ser fram emot Wordle-projektet