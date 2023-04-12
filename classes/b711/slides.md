# Föreläsning B701

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/alo4g8ze7upb)

## Slide 2: Förra veckan
* Ansvarsfördelning, frontend/backend
* Intro till Typescript
* Typescript på backend

## Slide 3: Vad är sant om TypeScript?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Med TypeScript är det lättare att skriva buggfri kod
* Typescript kontrollerar för buggar under tiden som koden körs
* Syftet med Typescript är att kontrollera att programmeraren använder variabler på rätt sätt
* Webbläsaren kan köra TypeScript

## Slide 4: Hur går det med uppgiften?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag har börjat programmera på både frontend och backend
* Jag har börjat integrera en databas
* Jag känner mig säker på att jag kommit mer än 75% i projektet

## Slide 5: Lektion B711 – Typescript & React
Använd Typescript för att göra din React-app ännu mer stabil

> En bild föreställer en komplext konstruerad stålbro i en solnedgång

## Slide 6: Lektionens innehåll
* Repetition, React-komponenter
* Repetition, Typescript
* Demo: Todo med Typescript

## Slide 7: Vad är React?
* Ett bibliotek för dynamiska gränssnitt (manipulera DOM)
* Gränssnitt beskrivs deklarativt, som "element"
* Element kan uttryckas med React.createElement('h1') eller <h1>
* Den sista formen kallas JSX och är vanligast
* Renderas (vanligtvis) på frontend, kräver javascript
* Events hanteras genom "on"-funktioner (ex: onSubmit, onClick)

## Slide 8: React bygger på konceptet "komponenter"
* Samma koncept som vanliga funktioner, men med en twist
* Varje komponent är en funktion, ex _function TaskList()_
* Varje komponent har vanligtvis en egen fil, ex _TaskList.js_
* Vi använder komponenter med JSX, ex _<TaskList>_

## Slide 9: "Variabler är som lådor"
* Vanlig liknelse för nya programmerare
* Du skapar en låda (variabeln)
* Du lägger något i lådan (värdet)
* `const box = 'value';`
* `const f = (x) => x * x;`

## Slide 10: Lådor har också en form!
* Formen på "öppningen" begränsar vad du kan stoppa i lådan
* Inom programmering kallas detta "datatyp", eller helt enkelt "typ"
* Javascript har "dynamiska typer" – lådans form anpassar sig till värdet
* `let age = 37`
* `age = 'thirtyseven'`

## Slide 11: TypeScript ger dig kontroll över "formen"
* Med TypeScript anger du som programmerare formen
* Då kan TypeScript säga till dig om ett värde inte passar
* Då kan TypeScript säga till om du använder värden på fel sätt
* `let age : number = 37; // OK!`
* `age.split(); // Not OK!`
* `age = 'thirtyseven'; // Not OK!`

## Slide 12: Funktioner är som variabler!
* Funktioner har (ofta) ett namn, en parameterlista och ett "innehåll"
* "Innehållet" är instruktionerna för vad funktionen ska göra
* Namnet använder du för att köra funktionen, ex: `myFunc()`
* Värdet är själva funktionen, d.v.s. parameterlistan och instruktionerna
* Precis som variabler har funktioner en _form_

## Slide 13: Funktioner med Typescript
* Generell form för variabler: `const NAME : TYPE = VALUE`
* Funktionstyp uttrycks som `(PARAMS) => RETURN_TYPE`
* Ex, javascript: `const f = (x) => x * x;`
* Ex, Typescript: `const f : (x: number) => number = (x) => x * x;`
* Typen är `(x: number) => number`
* Läses som "En funktion som tar ett number och returnerar ett number"

## Slide 14: React-komponenter med Typescript
* React-komponenter är funktioner med en viss "form"
* Med Typescript specificerar vi typer för parametrar och returvärde
* Vem bestämmer vilken typ en React-komponent ska returnera?
* Vem bestämmer typerna för React-komponenters properties?

## Slide 15: Kom igång med React och Typescript
* React körs på frontend – kräver transpilering!
* Konfiguration krävs för webpack etc
* Använd Typescript-mall med `create-react-app`
* `npx create-react-app --template cra-template-typescript ts-react`
* Låt oss experimentera!

## Slide 16: Vad är sant om TypeScript och React?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Alla React-komponenter ska ha samma returtyp
* Du kan bestämma fritt typerna på de argument som kan tas emot av en React-komponentfunktion
* "Generics" är ett sätt att hantera typer som är snarlika varandra men där något skiljer
* Det är tillåtet att initialisera ett state med useState<number>("thirtyseven")

## Slide 17: Till nästa gång
* Arbeta vidare med projektet
* Frivilligt: Konvertera till Typescript
* Nästa tillfälle, torsdag: Endast handledning

## Slide 18: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag lärde mig mycket nytt under lektionen
* Jag känner att jag förstår Typescript bättre efter lektionen
* Jag vill använda Typescript i kommande projekt
