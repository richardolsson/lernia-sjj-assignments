# Föreläsning B710

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/alxqkx4i3nwr)

## Slide 2: Förra lektionen
* Relationen mellan frontend och backend
* Styrkor (och svagheter)
* Ansvarsfördelning
* Sessioner och fördelning av state

## Slide 3: Vad är sant om ansvarsfördelning mellan frontend och backend?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* All kod på backend kan vara hemlig, medan ingen kod på frontend kan vara hemlig
* Backend ansvarar för att förse webbläsaren med frontendkod
* All kod och annan kommunikation som skickas mellan webbläsare och webserver kan ses i nätverkspanelen
* Samma kod kan köras på både frontend och backend, och det är upp till programmeraren att välja

## Slide 4: Hur går det med uppgiften?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag har börjat programmera på både frontend och backend
* Jag har börjat integrera en databas
* Jag känner mig säker på att jag kommit mer halvvägs i projektet

## Slide 5: Gissa: Hur många gånger totalt per vecka tar någon student hjälp av Richard för individuell handledning?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* 1-2 gånger
* 3-5 gånger
* 6-10 gånger
* Fler än 10 gånger

## Slide 6: Hur många gånger har du tagit hjälp av Richard för handledning totalt under de senaste fyra veckorna?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Ingen gång
* En gång
* Två, tre gånger
* Fler än tre gånger

## Slide 7: Lektion B710 – Intro till TypeScript
Utöka javascript med "former", för att undvika buggar.

> En bild föreställer ett stort antal olika 3D-former

## Slide 8: Lektionens innehåll
* Vad är TypeScript?
* Varför använder man TypeScript?
* Hur, var och när använder man TypeScript?
* Live-koda tre exempel

## Slide 9: Hur gammal är du?
Interaktiv slide där deltagaren kan svara fritt.

## Slide 10: "Variabler är som lådor"
* Vanlig liknelse för nya programmerare
* Du skapar en låda (variabeln)
* Du lägger något i lådan (värdet)
* `const box = 'value';`

## Slide 11: Lådor har också en form!
* Formen på "öppningen" begränsar vad du kan stoppa i lådan
* Inom programmering kallas detta "datatyp", eller helt enkelt "typ"
* Javascript har "dynamiska typer" – lådans form anpassar sig till värdet
* `let age = 37`
* `age = 'thirtyseven'`

> En bild föreställer en fågelholk med ett litet runt hål

## Slide 12: TypeScript ger dig kontroll över "formen"
* Med TypeScript anger du som programmerare formen
* Då kan TypeScript säga till dig om ett värde inte passar
* Då kan TypeScript säga till om du använder värden på fel sätt
* `let age : number = 37; // OK!`
* `age = 'thirtyseven'; // Not OK!`
* `age.split(); // Not OK!`

## Slide 13: Varför? För att fånga buggar!
* Många buggar består av enkla misstag
* Ex: Programmeraren stavar fel
* Ex: Programmeraren betänker inte alla eventualiteter
* TypeScript säger ifrån om du missar något
* Låt oss titta på tre buggar!

## Slide 14: Ex 1: Vad är buggen här?
Interaktiv slide där deltagaren kan svara fritt.

```js
export default function bug1() {
  const data = {
    data: {
      data: ["word1", "word2"],
    },
  };

  data.data.push("word3");
}
```
## Slide 15: Ex 2: Vad är buggen här?
Interaktiv slide där deltagaren kan svara fritt.

```js
export default function bug2() {
  function add100(x) {
    return x + 100;
  }

  const str = "What is 50 + 100?";
  const words = str.split(" ");
  const val = words[2];
  const result = add100(val);
  console.log("Result is " + result);
}
```

## Slide 16: Ex 3: Vad är buggen här?
Interaktiv slide där deltagaren kan svara fritt.

```js
export default function bug3() {
  const clara = {
    name: "Clara",
    age: 18,
    occupation: null,
  };

  if (Math.random() > 0.5) {
    clara.age += 50;
    clara.occupation = {
      title: "Office manager",
      retired: true,
    };
  }

  if (clara.occupation.retired) {
    console.log("Clara is a retired " + clara.occupation.title);
  }
}
```

## Slide 17: Hur? Ange typer med _kolon_ (`:`)
* Enkla typer, ex: `let name: string;`
* Objekt, ex: `let person: { name: string };`
* Arrayer, ex: `let names: string[];`
* Arrayer av objekt, ex: `let people: { name: string }[];`

## Slide 18: Definiera och återanvänd typer
* Namnge och återanvänd typer med `type` (eller `interface`)
* Exempel:
  * `type AlsoANumber = number;`
  * `type Person = { age: AlsoANumber };`
  * `const richard : Person = { age: 37 };`

## Slide 19: "Type inference"
* TypeScript kan härleda datatyp från värde
* Ex: `let age = 25;`
* TypeScript förstår att `age` är ett `number`, eftersom värdet är det
* Ex: `age = 'twentyfive' // Not OK!`

## Slide 20: Var körs TypeScript?
* Inte i webbläsaren! Webbläsare förstår bara vanlig Javascript
* Din editor (VSCode) förstår TypeScript!
* Använd VSCode för att identifiera problem
* Låt oss lösa bug 1!

## Slide 21: När körs TypeScript?
* TypeScript är ett _utvecklingsverktyg_
* Förutspår buggar vid utvecklingstillfället
* Transpilerar koden till vanlig javascript
* Liknar på så vis hur SASS transpileras till CSS

## Slide 22: Transpilera TypeScript
* Transpilera till javascript med `tsc` (frontend)
* Eller integrerat med andra verktyg såsom Webpack (ex: create-react-app)
* Låt oss lösa och transpilera alla buggarna!

## Slide 23: Konfigurera med tsconfig.json
* Ange var källkodsfiler (TypeScript) finns
* Ange var output (Javascript) ska placeras
* Styr vilken version av JS som ska genereras
* Styr strikthet … och mycket mer!
* Bygg med `tsc`
* Låt oss experimentera!

## Slide 24: Kör direkt med `ts-node`
* Frontend förstår inte TypeScript (och vi har ingen påverkan)
* På backend styr vi vilken miljö vi använder!
* `ts-node` är Node med stöd för TypeScript
* `ts-node` respekterar `.tsconfig.json`
* Låt oss experimentera!

## Slide 25: Vad är sant om TypeScript?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* TypeScript är ett programmeringsspråk som är separat från Javascript
* Med TypeScript är det lättare att skriva buggfri kod
* Webbläsaren kan köra TypeScript
* Kompilatorn tsc gör om koden till javascript och sedan kontrollerar den att koden inte har några buggar

## Slide 26: Vilken TypeScript är synonym med följande javascript? let x = 25
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* let x = 25 : number
* let x : number = 25
* let x = 25
* let x : number = "25"

## Slide 27: Vad kommer TypeScript säga om följande assignment?  `const x: { name: string} = { name: "Richard" }`
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Fel: "Richard" måste vara en sträng
* Fel: "Richard" måste vara ett objekt
* Ingenting, koden är korrekt

## Slide 28: Till nästa gång
* Fortsätt arbeta med projektet
* Be om handledning när du behöver!
* Frivilligt: Läs mer om TypeScript på typescriptlang.org
* Frivilligt: Konvertera din backend till TypeScript
* Nästa tillfälle (onsdag): Avancerad TypeScript (React m.m.)

## Slide 29: Hur känns det efter lektionen?
* Jag lärde mig mycket nytt idag
* Jag känner att jag förstår *syftet* med TypeScript
* Jag vill använda TypeScript i mitt projekt