# Föreläsning A301

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/al9qkesvmvtd)

## Slide 2: Nu kurs! Hur känner du efter förra?
Interaktiv slide där deltagaren kan välja 1-5 hur sanna följande påståenden är:

* Jag känner mig nöjd med min egen insats
* Jag känner mig nöjd med hur jag genomfört ESC-uppgiften
* Tempot var högre än vad jag känner mig bekväm med
* Jag känner mig redo och peppad på ny kurs

## Slide 3: Glöm inte kursutvärderingen
Kursutvärderingen bidrar till formandet av efterföljande kurser, inklusive denna!

## Slide 4: Kursplan A3 - Javascript
Vi går igenom från ItsLearning:

* Kursens innehåll
* Kursmål
* Kunskapsbedömning

## Slide 5: Lektion A301 - Intro till programmering med javascript
Ett programmeringsspråk som de flesta andra

En bild föreställer javascript-kod som vi kommer att jobba med under lektionen

## Slide 6: En dikt
Fågeln väljer flykten. Vi valde den icke.
Flykten valde oss. Därför är vi här.
Ni som ej blev valda – men ändå frihet äger,
hjälp oss att bära den tunga flykt vi bär!

- Ulf Dagerman, 1953

# Slide 7: Vad handlar dikten om?
Interaktiv slide där deltagarna kan ange i fritext vad de tycker att dikten handlar om.

## Slide 8: Ordklasser
Fågeln (substantiv) väljer (verb) flykten (substantiv). Vi (pronomen) valde (verb) den (pronomen) icke (adverb).
Flykten (substantiv) valde (verb) oss (pronomen). Därför (adverb) är (verb) vi (pronomen) här (adverb).
Ni som ej blev valda – men ändå frihet äger,
hjälp oss att bära den tunga flykt vi bär!

## Slide 9: Slutsatser, läsförståelse
* Att läsa en text kräver olika kunskap på olika nivåer
* Att förstå metaforer kräver kontext och erfarenhet
* Oavsett metaforen kan vi förstå ord för ord

## Slide 10: Kod är inte poesi, men likheter finns
* Att läsa och förstå kod på alla nivåer kräver övning
* Att förstå "orden" är en förutsättning
* Uppskattningsvis 70% av arbetstiden är att läsa kod
* Kod är enklare, men vi är mindre vana
* Läs som en sjuåring!

## Slide 11: Programmeringsspråket Javascript
Ett script- eller programmeringsspråk som utvecklades för att ge webben grundläggande interaktivitet.

## Slide 12: Vad är speciellt med Javascript?
* Föddes 1995 som enkelt scriptspråk
* Väldigt litet standardbibliotek och minimal I/O
* Relativt oförändrat under 2 decennier
* Vuxit enormt senaste decenniet
* Väldigt likt många andra programmeringsspråk

## Slide 13: Citat
Java is to JavaScript
what *ham* is to *ham*ster

- Okänd

## Slide 14: Programmering är INTE magi
* Komplex sammansättning av enkla regler och koncept
* Ca 50 nyckelord
* Ett fåtal enkla grammatiska regler
* Expressions/uttryck som utvärderas till något
* Statements som GÖR något

## Slide 15: Komplex kod
* Består av enkla byggstenar
* Lär dig verkligen förstå byggstenarna!
* Låt oss testa att läsa

Kod som vi läser:

```js
function flagListItemsIfSaved(matchList, savedList) {
  let changed = false;

  function flagItem(item, saved) {
    changed = true;
    return Object.assign({}, item, {
      data: Object.assign({}, item, { saved }),
    });
  }

  if (savedList && savedList.items) {
    const outList = Object.assign({}, matchList, {
      items: matchList.items.map(matchItem => {
        if (!!savedList.items.find(savedItem => savedItem.data.id == matchItem.data.id)) {
          if (!matchItem.data.saved) {
            flagItem(matchItem, true);
          }
        }
        else if (matchItem.data.saved) {
          // Was saved, is not anymore
          flagItem(matchItem, false);
        }

        // Return unchanged if reached
        return matchItem;
      }),
    });

    // Return copy if changed or original if unchanged
    return changed ? outList : matchList;
  }
  else {
    // No saved list exists, return unchanged
    return matchList;
  }
}
```

## Slide 16: Variabler och "scope"
* Variabler har ett namn, en typ och ett värde
* Du väljer namn, du ger den värde, typen härleds av värdet
* Variabelns "scope" är det sammanhang där den är tillgänglig

Kodexempel:

```js
  let changed = false;

  function flagItem(item, saved) {
    changed = true;
```

## Slide 17: Funktioner
* För att "hoppa" omkring i koden
* Skapa en funktion med "function" eller "=>"
* Kör funktionen (hoppa till den) med ()
* Koden definieras i ett block med {}
* Funktioner kan ta parametrar och returnera något
* Funktioner "tar med sig" variabler genom closure

Kodexempel:

```js
  function flagItem(item, saved) {
```

```js
          flagItem(matchItem, false);
```

## Slide 18: Objekt
* Som en "låda" med flera variabler i
* Skapas med Object() eller {}
* Hämta värden "ur lådan"  med punkt eller []
* Värden på objekt kan vara funktioner

Kodexempel:

```js
    return Object.assign({}, item, {
      data: Object.assign({}, item, { saved }),
    });
```

## Slide 19: Conditionals – villkorssatser
* Funktioner hoppar, conditionals **hoppar över**
* Ett villkor, följt av ett block som ska köras
* Vanligast är if/else
* Ett villkor är vilket uttryck som kan utvärderas till true eller false

Kodexempel:

```js
  if (savedList && savedList.items) {
```

## Slide 20: Andra byggstenar (exempel)
* Arrays
* Loopar
* Exceptions
* Destructuring, spread och annan "syntactic sugar"
* Asynkron programmering (i en kommande lektion)
* Generators (överkurs)

## Slide 21: Sammanfattning
* Programmering har enkla regler
* Sätts ihop på komplexa vis
* Öva på att läsa och förstå

## Slide 22: Vad är sant om programmering i Javascript?
Interaktiv slide där deltagare kan ange 1-5 hur sanna följande påståenden är:

* Javascript är ett programmeringsspråk som bara används på webben
* Ett expression är kod (mer eller mindre komplex) som kan utvärderas till ett enskilt värde
* flagItem(23, true) är ett expression som kör en funktion
* if (x == 23) {} är ett expression som bara körs i vissa fall

## Slide 23: Till nästa gång (imorgon)
* Läs på om javascript på MDN
* Öva kodläsning med mina övningar

## Slide 24: Hur känner du efter lektionen?
Interaktiv slide där deltagare kan ange 1-5 hur sanna följande påståenden är:

* Jag har lärt mig något nytt om javascript idag
* Jag tycker att javascript känns svårt
* Jag ser fram emot att börja programmera "på riktigt"