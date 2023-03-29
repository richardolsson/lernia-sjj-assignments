# Föreläsning A707

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/alrpfyr29k2s)

## Slide 2: Förra lektionen
* Repetition: Serverns roll
* Repetition: REST
* Kombinera React med en backend

## Slide 3: Vad är sant om fullstackutveckling?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* I en fullstack-app är en viktig roll för backenden att tillhandahålla frontendkod till webbläsaren
* REST är en API-design som bygger på resurser och "verb" för att modifiera resurserna
* API:er är ett sätt att komma i kontakta med data som lagras "någon annanstans"
* Den kod du som utvecklare skriver i en React-app är den kod som ska skickas till webbläsaren

## Slide 4: Hur går det med uppgiften?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag har gjort en plan
* Jag har börjat utformat mitt API
* Jag har börjat programmera på backend
* Jag har börjat programmera på frontend

## Slide 5: Intro till databaser
Databasens roll i en fullstack-app, olika typer av databaser, och en första titt på MongoDB

> En bild föreställer en truck i en lagerlokal med stora hyllor med lådor.

## Slide 6: Lektionens innehåll
* Repetition: Datakällor
* "Persistens" och databasens roll
* Olika databastyper
* Intro till MongoDB

## Slide 7: Arkitekturdiagram över Spegeln-projektet
> En bild föreställer arkitekturdiagrammet från backendkursen där vi utforskade alla delar av Spegeln-systemet.
> I en grön rektangel ryms filmsidans frontend, filmsidans backend och template-filer på en hårddisk
> I en röd rektangel ryms CMS:ets frontend, CMS:ets backend och CMS:ets databas

## Slide 8: Spegelns CMS: "Strapi CMS"
* Content Management System
* För att hantera innehåll på ett användarvänligt sätt
* Den som redigerar ska inte behöva programmera
* Strapi är "headless" – bara API, genererar ingen HTML

> En bild föreställer en screenshot av Strapi CMS

## Slide 9: Arkitektur, CMS
* CMS:ets frontend, React
* CMS:ets backend, Node
* CMS:ets datalagring: databas!

> En bild föreställer den röda rektangeln från slide 7 inzoomad. Här finns:
> CMS:ets frontend (HTML/CSS/JS, React) utvecklad av Strapi SAS
> CMS:ets backend (Node m.m.) utvecklad av Strapi SAS
> CMS:ets databas (PostgreSQL) utvecklad av Postgres Global Development Group (open-source)

## Slide 10: "Persistens"
* Varaktig lagring – inte tillfälligt
* "Varaktig" kan betyda olika tid i olika sammanhang
* Vanligtvis: Ska överleva reboot, etc

## Slide 11: På vilka sätt kan en dator lagra information?
Skriv allt du kommer på, sedan funderar vi på vad som är persistent

Interaktiv slide där deltagaren kan svara fritt.

## Slide 12: Lagringsmedier (tekniskt)
* Hårddisk (mekanisk/solid state)
* Icke-flyktigt ("non-volotile") minne
* Flyktigt ("volotile") minne

## Slide 13: Lagring för programmerare
* Minnet (flyktigt)
* Filsystemet (persistent)

## Slide 14: Programmera med filsystemet
* Använd exempelvis Nodes fs-modul
* Läs filer med exempelvis readFile()
* Skriv filer med exempelvis writeFile()
* Ex: Alvars program läser en fil, ändrar en textrad och sparar tillbaka filen till hårddisken

> En bild föreställer ett diagram som illustrerar flödet i punkterna.
> En fil innehåller texten "Hello, my name is Richard".
> Filen ändras av en process med etiketten "Alvar" och skrivs sedan tillbaka till hårddisken.
> I slutändan innehåller filen texten "Hello, my name is Alvar".

## Slide 15: Filsystemet är svårt!
* Vad händer om Linda arbetar med filen samtidigt?
* Alvar och Linda öppnar filen
* Alvar skriver sitt namn och sparar den
* Linda skriver sitt namn och sparar den
* Vad står det i filen i slutändan?

> En bild föreställer ett diagram som illustrerar flödet i punkterna.
> En fil innehåller texten "Hello, my name is Richard".
> Filen läses in i två processer, en med namnet "Alvar" och en med namnet "Linda"
> Båda processerna ändrar och skriver filen tillbaka till hårddisken, först "Alvar" och sedan "Linda"
> I slutändan innehåller filen texten "Hello, my name is Linda"

## Slide 16: Problemet med hårddiskar och filsystem
* Hanterar "concurrency" dåligt (ex race conditions)
* Långsamt att läsa och/eller skriva
* Filer/mappar är en ok struktur, men inte jättebra'
* Därför: Databaser!

## Slide 17: Vad är en databas?
* Många betydelser i samma term
* "Databasmjukvara": Specialiserad mjukvara för lagring av data
* "Databas": Logisk indelning av data
* Kommunicerar med din kod via nätverk (inte HTTP)

> En bild föreställer ett diagram med två objekt.
> Det första objektet har texten "Ditt API, ex node-program med express"
> Det andra objektet har texten "Databas: Ett program, data på filsystemet, data i minnet"
> En pil går från första objektet till andra objektet med texten "Nätverksanslutning (specialiserat format)"

## Slide 18: Kommunikation mellan program och databas
* Via nätverket, men inte HTTP
* Hur anslutning fungerar varierar mellan olika databasmjukvaror
* Kommunicerar vi specialiserade protokoll/format

> Samma bild som förra sliden

## Slide 19: Hur strukturerar en databas data?
* Det finns olika sätt! Exempel:
* Relationsdatabas: Lagrar tabeller som hänvisar till varandra
* Key/value-databas: Lagrar i en stor tabell, likt ett JS-objekt
* Grafdatabas: Lagrar grafer av noder och länkar ("edges")
* Dokumentdatabas: Lagrar flexibla objekt, likt JSON-filer

## Slide 20: Exempel: Två personer som bor ihop
* Två personer delar en lägenhet
* Richard, 37, bor i ett rum på 22 kvm
* Josefina, 31, bor i ett rum på 27 kvm
* Hur kan man lagra detta i olika typer av databaser?

## Slide 21: Relationsdatabas
* Två separata tabeller motsvarar rum respektive boende (inhabitants)
* Varje tabell har fördefinerade kolumner
* Rum-tabellen har en referens till boende
* Ex: MySQL, PostgreSQL, MS SQL

> En bild föreställer två tabeller. Den ena har titeln "Inhabitants" och kolumnerna ID, Name och Age.
> Den andra har titeln "Rooms" och kolumnerna ID, Size och Inhabitant ID.

## Slide 22: Dokumentdatabas
* Lagrar data i flexibla "dokument"
* Varje dokument är som ett JS-objekt och kan innehålla mycket information
* Ett dokument per rum
* Ex: MongoDB, CouchDB

> En bild föreställer två dokument. Båda innehåller all information om respektive rum, inkl boende.

## Slide 23: Key/value-databas
* Lagrar all data i en stor "tabell" med två kolumner: key/value
* Programmeraren styr format på key
* Första delen av key kan ange vilket rum det handlar om
* Ex: Redis

> En bild föreställer en tabell med två kolumner, key och value. Följande värden finns i tabellen:
> * room1_size: 22
> * room1_inh_name: Richard
> * room1_inh_age: 37
> * room2_size: 28
> * room2_inh_name: Josefina
> * room2_inh_age: 31

## Slide 24: Grafdatabas
* Lagrar noder och kopplingar mellan noder
* Både noder och kopplingar kan ha information
* En nod per rum och en per person
* Kopplingar mellan person/rum och mellan närliggande rum
* Ex: Neo4J

> En bild föreställer en graf med fyra cirklar och pilar mellan.
> Mellan cirklarna "Richard" och "Room 1" går en pil med texten "Lives in"
> Mellan cirklarna "Josefina" och "Room 2" går en pil med texten "Lives in"
> Mellan cirklarna "Room1" och "Room2" går en pil med texten "Is adjacent to"

## Slide 25: Vad är ditt spontana intryck av de olika typerna av databas?
Interaktiv slide där deltagaren kan ange 1-5 hur mycket man gillar följande alternativ, där 1 = "Gillar inte" och 5 = "Gillar mycket"

* Relationsdatabas
* Dokumentdatabas
* Key/value-databas
* Grafdatabas

## Slide 26: Intro till MongoDB
* Enkelt att förstå för JS-programmerare
* Dokumentdatabas, lagrar i JSON-liknande format
* Gränssnittet är ett JS-liknande språk
* Låt oss experimentera!

## Slide 27: Vad är sant om datakällor och databaser?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Databaser är ett sätt att lagra data i en mapp på mitt filsystem
* Databasmjukvaror har ofta specialiserade språk och protokoll som man använder som programmerare
* MongoDB är en dokumentdatabas som lagrar data JSON-filer
* Key/value-stores har väldigt få regler och är därför väldigt flexibla att använda

## Slide 28: Till nästa gång
* Läs mer om MongoDB på deras hemsida
* Experimentera med MongoDB:s tutorial
* Fortsätt arbeta med uppgiften
* Nästa lektion: MongoDB i praktiken

## Slide 29: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag lärde mig mycket nytt idag
* Jag förstår skillnaderna mellan de olika databastyperna
* Jag har en idé om vilken roll databasen ska spela i Wordle-projektet
* Jag är peppad på att använda MongoDB i projektet
