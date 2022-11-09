# Föreläsning A302

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/al7z71ieatjx)

## Slide 2: Förra lektionen
* Att läsa och förstå programmeringskod
* Programmeringsspråket javascript
* Språkets byggstenar: variabler, funktioner, objekt etc

## Slide 3: Hur har det gått med övningarna?
Interaktiv slide där deltagaren kan välja mellan följande alternativ:

* Jag har inte börjat
* Jag har tittat på vissa men inte alla
* Jag har tittat på (men inte klarat) alla
* Jag har klarat alla övningar

## Slide 4: Vad är sant om programmeringsspråket javascript?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Mellanslag (" ") spelar aldrig någon roll i javascriptkod
* Ett expression är kod (mer eller mindre komplex) som kan utvärderas till ett enskilt värde
* flagItem(getItemId(item), isValid && isActive) är ett expression som består av flera andra expressions och kör två funktioner
* Ord i javascript (kombinationer av bokstäver och siffror) är antingen keywords eller namn
* Ett namn i javascript refererar till en variabel eller funktion som du skrivit någon annanstans i koden

## Slide 5: Lektion A302 - Kod från olika källor
Din kod, andras kod, miljön och programmeringsspråket

## Slide 6: Föreläsningens innehåll
* Intro till kod från olika källor
* Programkod, språkbibliotek och miljö
* Hur identifierar man källan?
* DOM API

## Slide 7: Vad kan javascript göra?
* Programmeringsspråket kan ganska lite, ex:
* Matematik (numeriska beräkningar)
* Bearbeta datastrukturer
* Hantera textsträngar
* Övningarna fångar upp det mesta
* Vi behöver mer än detta!

## Slide 8: Kod kan komma från olika källor
* Kod som är del av ditt program
* Kod som är del av programmeringsspråket
* Kod som tillhör miljön

Ett diagram föreställer tre boxar med etiketterna "Ditt program", "Miljön" respektive "Språket".
"Ditt program" är ritad ovanför "Miljön" och "Språket", som ligger sida vid sida undertill.

## Slide 9: Språkets standardbibliotek
* Kod som hör till programmeringsspråket
* Du kan skriva egna versioner om du vill, men slipper
* Ex: Object.assign(), array.map(), Math.random(), setTimeout()

## Slide 10: Miljön (där programmet körs)
* Det sammanhang där din kod körs (ex webbläsaren, node)
* Innehåller kod specifikt för den miljön
* Låter dig göra något verkligt användbart
* Ex (webbläsaren): DOM, fetch(), LocalStorage
* Ex (node): fs, http, crypto

## Slide 11: Programkod (din kod)
* Kod du kan redigera
* Ligger i filer i din projektmapp
* Använder miljöns och språkets kod

## Slide 12: Programkod från flera olika källor
* Programkod skriven av dig
* Programkod skriven av ert team
* Externa moduler som inkluderas i ditt program (ex från npm)
* Kombinerat med miljön och språket finns många olika källor

Ett diagram föreställer samma tre boxar som tidigare, men nu är boxen "Ditt program" indelad i
ytterligare boxar, bestående av "Din kod", "Andras kod" och "Externa moduler".

## Slide 13: Kodexempel
```js
document.querySelector('form').addEventListener('submit', handleSubmit);

function handleSubmit(ev) {
    document.querySelector('.error').classList.remove('active');
    ev.preventDefault();

    const text = document.querySelector('input').value;
    if (text.length == 0) {
        // Wait 20ms before adding the class, to be sure
        // that it was first remove (above).
        setTimeout(() => {
            document.querySelector('.error').classList.add('active');
        }, 20)
        return;
    }
```

## Slide 14: Vad är sant om kod från olika källor?
Interaktiv slid där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Programkoden är den kod jag skrivit själv
* Samma javascriptkod kan köras i flera olika miljöer
* Kod som skrivits för en miljö kan alltid köras i en annan miljö
* Programmeringsspråket Javascript innehåller funktionalitet för att skapa en div
* Ett namn i javascript refererar till en variabel eller funktion som står någon annanstans i programkoden

## Slide 15: Gränssnitt
Diagrammet från tidigare slides återkommer med "Ditt program" (uppdelad i "Din kod", "Andras kod",
och "externa moduler") samt "Miljön" och "Språket".

* Mellan delarna finns gränssnitt
* API – Application Programming Interface
* Ex: Gränssnitt mellan din kod och någon annans
* Ex: Ett visst objekts gränssnitt, ex Array
* Ex: Gränssnitt mellan din kod och miljön, ex document (DOM API)
* Ex: Nätverks-API för kommunikation över internet

## Slide 16: Hur vet man varifrån koden kommer?
* Hur vet man att något tillhör programkoden?
* Hur vet man att något tillhör miljön?
* Hur vet man att något tillhör programmeringsspråket?
* Lär känna globala objekt och använd editorn

## Slide 17: API:er i webbläsaren (exempel)
* Console API (som vi använt en hel del)
* History API (för att gå framåt/bakåt i historiken)
* Sensor API (för att läsa av sensorerna på en device)
* Fetch API (för att ladda data över HTTP, nästa vecka)
* DOM API (fördjupning idag)
* [Hela listan på MDN "Web APIs"](https://developer.mozilla.org/en-US/docs/Web/API )

## Slide 18: Vad minns ni om DOM? Skriv fritt!
Interaktiv slide där deltagaren kan svara i fritext

## Slide 19: DOM-trädet
* Document Object Model
* HTML bygger, CSS stylar
* Barn, föräldrar, syskon i en trädstruktur

Bild föreställer ett DOM-träd med följande noder:
* Body
    * div (container)
        * h1 (title)
        * p
        * form
        * small
        * ul

## Slide 20: DOM API
* HTML bygger, SCS stylar, JS modifierar (via DOM API)
* Bara tillgänglig i miljön webbläsare
* Åtkomst via globala objektet "document"
* Event-hantering via addEventListener()
* Låt oss experimentera!

## Slide 21: Vad är sant om DOM API?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Programmeringsspråket Javascript innehåller funktionalitet för att skapa en div
* DOM API är en del av miljön webbläsare och exponeras via globala objektet document
* Alla DOM-element har properties som heter firstChild, secondChild, thirdChild etc
* Med javascript och DOM API kan man åstadkomma allt som HTML och CSS kan åstadkomma

## Slide 22: Till nästa gång
* Läs mer om DOM API på MDN
* Uppgift: Mobil meny på ESC-sidan

## Slide 23: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Jag har fått en fördjupad förståelse av javascripts roll i webbläsaren
* Jag känner mig trygg med hur jag kan experimentera med javascript i webbläsaren
* Jag förstår mer än tidigare om vad ett API är
* Jag känner mig trygg med hur jag ska lösa uppgiften