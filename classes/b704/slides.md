# Föreläsning A704

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/al3eee5fxtza)

## Slide 2: Förra lektionen
* "State" och "Derived State"
* Deklarativ vs Imperativ programmering
* React

## Slide 3: Vad är sant om State?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* "State" är en term som avser alla variabler i ett program
* "Derived state" är state som skulle kunna räknas ut från annat state
* Komplexa applikationer måste ha derived state och det är inget problem

## Slide 4: Vad är sant om React?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* React är ett ramverk för utveckling av fullstack-appar
* React använder sig av ett separat programmeringsspråk som heter JSX
* Med React bygger man gränssnitt på ett mestadels deklarativt sätt
* Med React skriver man funktioner som returnerar JSX, som React använder för att uppdatera DOM:en

## Slide 5: Hur är läget inför dagens lektion?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag har experimenterat med React sedan lektion 3
* Jag har börjat arbeta på Wordle-projektet
* Jag känner att jag förstår React
* Jag tycker det är kul med React

## Slide 6: Lektion B704 - React-komponenter
Separation of concerns och kommunikation mellan olika delar av ett gränssnitt med hjälp av "komponenter".

> En bild föreställer två händer som håller upp varsin pusselbit

## Slide 7: Dagens lektion
* Repetition, React
* Konceptet "komponenter"
* Kommunikation mellan komponenter
* Todo-app med komponenter

## Slide 8: Vad är React?
* Ett bibliotek för dynamiska gränssnitt (manipulera DOM)
* Gränssnitt beskrivs deklarativt, som "element"
* Element kan uttryckas med React.createElement('h1') eller `<h1>`
* Den sista formen kallas JSX och är vanligast
* Renderas (vanligtvis) på frontend, kräver javascript
* Events hanteras genom "on"-funktioner (ex: onSubmit, onClick)
* Demo: Todo-appen

## Slide 9: Vår ToDo-app med React
* En funktion, _App_ returnerar hela gränssnittet som JSX
* Vi använder _useState()_ för att spara listan och textfältets nuvarande värde
* Vi använder _Array.map()_ för att returnera JSX för varje punkt i listan
* Vi använder onSubmit och onClick för att reagera på användarens input

> En bild föreställer en screenshot av Todo-appen

## Slide 10: React bygger på konceptet "komponenter"
* App-funktionen är en React-komponent
* "Komponenter" bygger på samma koncept som funktioner
* Vad gör vi om en funktion blir för lång och svårläst?
* Vad gör vi om vi upptäcker att samma kod repeteras?

## Slide 11: Vad gör vi om vi upptäcker att samma kod repeteras?
* Hur kan vi separera gränssnittet?
* Vilka _delar_ av gränssnittet har olika ansvar (d.v.s. olika "concerns")?
* Vilka _delar_ av gränssnittet återkommer flera gånger?

> En bild föreställer en screenshot av Todo-appen

## Slide 12: Min lösning
* Räknaren i en separat komponent (_TaskCount_)
* Formuläret i en separat komponent (_TaskInput_)
* Listan i en separat komponent (_TaskList_) som i sin tur innehåller en för varje punkt (_TaskItem_)
* En komponent som samlar helheten (_App_)

> En bild föreställer en screenshot av Todo-appen med färgade rutor.
> En blå ruta omger hela gränssnittet. En gul ruta omger texten "3 completed". En lila ruta omger textfält och knapp.
> En röd ruta omger listan med uppgifter. Varje uppgift i listan omges av en gul ruta.

## Slide 13: Min lösning som komponentträd
* App-komponenten är "roten" i trädet
* App innehåller TaskCount, TaskInput och TaskList
* TaskList innehåller flera TaskItem

> En bild föreställer en trädstruktur. Roten i trädet är en blå ruta med texten "App".
> App-rutan ansluter till tre "barn": TaskCount (gul), TaskInput (lila) och TaskList (röd).
> TaskList ansluter i sin tur till fyra gröna rutor, samtliga med texten TaskItem.

## Slide 14: Två sätt att visualisera komponentstrukturen
> En bild föreställer båda de senaste bilderna sida vid sida, d.v.s.
> Todo-listan från slide 12 (med rutorna ovanpå) och trädet från förra sliden.

## Slide 15: Komponenter med React
* Samma koncept som vanliga funktioner, men med en twist
* Varje komponent är en funktion, ex _function TaskList()_
* Varje komponent har vanligtvis en egen fil, ex _TaskList.js_
* Vi använder komponenter med JSX, ex _<TaskList>_
* Låt oss experimentera!

## Slide 16: Frågor som dyker upp när vi separerar komponenter
* Var ska state finnas någonstans?
* Hur kommunicerar vi nedåt i trädet?
* Hur kommunicerar vi uppåt i trädet?

## Slide 17: Var placerar vi state?
* En fråga om separation of concerns: Vem bryr sig om statet?
* Identifiera alla som behöver statet
* Hitta den minsta gemensamma nämnaren
* Hitta den komponent vars "underträd" innefattar alla som behöver det
* Vi vill hitta en enda plats för varje state, annars uppstår duplicerat/derived state
* Kan vara olika för olika state! Var hör state för _items_ respektive _text_ hemma?

> En bild föreställer samma träd som tidigare. Roten i trädet är en blå ruta med texten "App".
> App-rutan ansluter till tre "barn": TaskCount (gul), TaskInput (lila) och TaskList (röd).
> Två nya pilar är inritade. Från App till TaskList går en pil med texten "items".

## Slide 18: Min lösning för state
* TaskList (inkl items) och TaskCount behöver items
* Närmsta förälder är "App", så där placerar vi items
* TaskInput är den enda som behöver "text"
* Vi placerar "text" hos TaskInput

> En bild föreställer samma träd som tidigare. Roten i trädet är en blå ruta med texten "App".
> App-rutan ansluter till tre "barn": TaskCount (gul), TaskInput (lila) och TaskList (röd).
> TaskList ansluter i sin tur till fyra gröna rutor, samtliga med texten TaskItem.
> Under "App" finns nu en liten ikon med texten "items".
> Under "TaskInput" finns nu en liten ikon med texten "text"

## Slide 19: Hur kommunicerar vi nedåt i trädet?
* Komponenter längre ned behöver statet!
* Hur får vi _items_ från _App_ till exempelvis _TaskList_ och _TaskItem_?
* Hur hade man gjort med funktioner?

## Slide 20: Props
* Som funktionsargument, men för React-komponenter
* Används för att kommunicera _nedåt_ i trädet
* Tas emot av komponenten som ett objekt, ex _function TaskList({ items })_
* Skickas som attribut, ex `<TaskList items={myItems}/>`
* Låt oss justera koden!

> En bild föreställer samma träd som tidigare. Roten i trädet är en blå ruta med texten "App".
> App-rutan ansluter till tre "barn": TaskCount (gul), TaskInput (lila) och TaskList (röd).
> Två nya pilar är inritade. Från App till TaskList går en pil med texten "items".
> Från TaskList till TaskItem går en pil med texten "item (singular)"

## Slide 21: Hur kommunicerar vi uppåt i trädet?
* Komponenter längre ned behöver _ändra_ statet
* Hur kan _TaskInput_ påverka statet som finns hos _App_?
* Hur fungerar det för _form_ och _span_?

## Slide 22: Callbacks (via props)
* Skicka en funktion till komponenten
* Funktionen skickas vanligtvis via property med prefix "on", ex _onCreateItem_
* Komponenten kör funktionen när det är dags
* Data kan skickas "upp" med funktionen genom argument
* Låt oss justera koden!

> En bild föreställer samma träd som tidigare. Roten i trädet är en blå ruta med texten "App".
> App-rutan ansluter till tre "barn": TaskCount (gul), TaskInput (lila) och TaskList (röd).
> En ny pil är inritad. Från TaskInput till App går en pil med texten "onCreateItem".

## Slide 23: Vad är sant om React-komponenter?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* React-komponenter är funktioner och kan köras precis som funktioner
* State ska sparas så långt upp i komponentträdet som möjligt
* Data kan skickas nedåt i trädet med hjälp av props eller callbacks
* En callback måste ha prefixet "on" för att fungera

## Slide 24: Till nästa gång
* Fortsätt experimentera med React och Todo-listan
* Fortsätt bygga på inlämningsuppgiften
* Läs om komponenter och properties i [React-dokumentationen](https://react.dev/learn/passing-props-to-a-component)
* Ställ frågor i Slack!
* Imorgon: Uppsamling och handledning kring React

## Slide 25: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag lärde mig mycket nytt idag
* Jag känner att jag förstår React bättre än när lektionen började
* Jag känner mig trygg med React
* Jag vet hur jag ska komma framåt med inlämningsuppgiften