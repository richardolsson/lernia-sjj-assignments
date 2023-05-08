# Föreläsning A722

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/ale6kkmuh4uj)

## Slide 2: Svar på frågan "Vad vill du helst att vi ska fördjupa oss i under kursens sista veckor?"
En bild av resultatet från omröstning på tidigare lektion. I topp ligger:

1. Mer om TypeScript
2. Exempel från en storskalig NEXT.js-app
3. Mer om deployment/hosting
4. Mer om säkerhet (inloggning etc)
5. Mer om databaser (exempelvis andra typer av databaser)
6. Mer om system (fullstack/API/SOC)

## Slide 3: Vad är sant om TypeScript?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Webbläsaren kan köra TypeScript
* Typescript kontrollerar för buggar under tiden som koden körs
* Syftet med Typescript är att kontrollera att programmeraren använder variabler på rätt sätt
* JavaScript har inget stöd för datatyper, men det har TypeScript

## Slide 4: Lektion B722 - Fördjupning, Typescript
En djupare titt på några av Typescripts mest användbara funktioner.

## Slide 5: Lektionens innehåll
* Repetition, Typescript
* Union types
* Type checking med logik
* Enums
* Generics

## Slide 6: "Variabler är som lådor"
* Vanlig liknelse för nya programmerare
* Du skapar en låda (variabeln)
* Du lägger något i lådan (värdet)
* `const box = 'value';`

## Slide 7: Lådor har också en form!
* Formen på "öppningen" begränsar vad du kan stoppa i lådan
* Inom programmering kallas detta "datatyp", eller helt enkelt "typ"
* Javascript har "dynamiska typer" – lådans form anpassar sig till värdet
* `let age = 37`
* `age = 'thirtyseven'`

## Slide 8: TypeScript ger dig kontroll över "formen"
* Med TypeScript anger du som programmerare formen
* Då kan TypeScript säga till dig om ett värde inte passar
* Då kan TypeScript säga till om du använder värden på fel sätt
* `let age : number = 37; // OK!`
* `age.split(); // Not OK!`
* `age = 'thirtyseven'; // Not OK!`

## Slide 9: Hur? Ange typer med _kolon_ (`:`)
* Enkla typer, ex: `let name: string;`
* Objekt, ex: `let person: { name: string };`
* Arrayer, ex: `let names: string[];`
* Arrayer av objekt, ex: `let people: { name: string }[];`

## Slide 10: Definiera och återanvänd typer
* Namnge och återanvänd typer med `type` (eller `interface`)
* Exempel:
* `type AlsoANumber = number;`
* `type Person = { age: AlsoANumber };`
* `const richard : Person = { age: 37 };`

## Slide 11: "Type inference"
* TypeScript kan härleda datatyp från värde
* Ex: `let age = 25;`
* TypeScript förstår att `age` är ett `number`, eftersom värdet är det
* Ex: `age = 'twentyfive' // Not OK!`

## Slide 12: Union types
* Typer som definieras som `Type1 | Type2 | … | TypeN`
* Innebär att den verkliga typen är _en av typerna_
* Ex: `const x : number | string`
* `x` kan vara ett `number` men kan också vara en `string`
* Låt oss experimentera!

## Slide 13: Är union types användbart?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Nej, jag har ingen användning för det
* Antagligen, men jag vet inte när
* Ja, jag kan föreställa mig användningsområden

## Slide 14: Type checking-logik
* TypeScript kontrollerar typer vid compile-time
* Logik (ex if-satser) körs vid runtime
* Men TypeScript förstår viss logik och kan dra slutsatser genom inference
* Ex: `if (typeof x == 'number')`
* Ex: `if ('toFixed' in x)`
* Låt oss experimentera!

## Slide 15: Är type checking-logik användbart?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Nej, jag har ingen användning för det
* Antagligen, men jag vet inte när
* Ja, jag kan föreställa mig användningsområden

## Slide 16: Enums
* En typ som kan ha ett fåtal olika värden
* Ex: `enum ContentTypes { COIN, DIMAOND };`
* Lämpar sig väl för typ-logik
* Låt oss experimentera!

## Slide 17: Är enums användbara?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Nej, jag har ingen användning för det
* Antagligen, men jag vet inte när
* Ja, jag kan föreställa mig användningsområden

## Slide 18: Generics
* Som funktionsargument, men för typer
* Lämpar sig när flera typer är _nästan_ identiska
* Ex: `type TreasureChest<Content> = { content: Content[] }`
* Låter användaren av typen ange vilken typ `Content` ska vara
* Låt oss experimentera!

## Slide 19: Är generics användbara?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Nej, jag har ingen användning för det
* Antagligen, men jag vet inte när
* Ja, jag kan föreställa mig användningsområden

## Slide 20: Vad är sant om TypeScript?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Union types är ett sätt att skapa variabler som kan ha en av flera olika typer
* En variabel vars typ är "number | string" kommer att ha en split()-metod
* En enum är i grunden samma sak som en union av strings
* "Generics" är ett sätt att hantera typer som är snarlika varandra men där något skiljer

## Slide 21: Till nästa gång
* Fortsätt jobba med uppgiften
* Be om stöd när ni behöver
* Handledning i eftermiddag och onsdag morgon
* Nästa föreläsning torsdag: Fördjupning, databaser

## Slide 22: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag lärde mig mycket nytt
* Jag känner att jag förstår Typescript bättre
* Jag föredrar att använda Typescript framför ren Javascript