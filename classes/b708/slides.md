# Föreläsning B708

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/al4drg267jdj)

## Slide 2: Förra lektionen
* Databasens roll
* Olika typer av databaser
* Intro till MongoDB

## Slide 3: Vad är sant om datakällor och databaser?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Databasmjukvaror har ofta specialiserade språk och protokoll som man använder som programmerare
* Databasmjukvaror lagrar data på filsystemet, men jag som programmerare ska inte bry mig om hur
* MongoDB är en dokumentdatabas som lagrar data i JSON-filer
* MongoDB är den bästa databasen i alla situationer om man använder javascript

## Slide 4: Hur går det med uppgiften?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag har börjat utformat mitt API
* Jag har börjat programmera på backend
* Jag har börjat programmera på frontend
* Jag har börjat experimentera med databaser

## Slide 5: Lektion B708 - MongoDB i praktiken
Hur man kommer igång med MongoDB, och integrerar en databas i ett fullstackprojekt.

> En bild föreställer flera högar med dokument på ett skrivbord

## Slide 6: Lektionens innehåll
* Repetition, MongoDB och databaser
* Modellera data för databas
* Programmera mot MongoDB

## Slide 7: Vad är en databas?
* Många betydelser i samma term
* "Databasmjukvara": Specialiserad mjukvara för lagring av data
* "Databas": Logisk indelning av data
* Kommunicerar med din kod via nätverk (inte HTTP)

> En bild föreställer två objekt med en pil mellan. Det första objeket är en rektangel
> med texten "Ditt API (Ex: Node-program med express)". Det andra objektet är en cylinder
> med texten "Databas: Ett program, Data på filsystemet, data i minnet". Pilen mellan
> de två formerna har texten "Nätverksanslutning (specialiserat format)".

## Slide 8: Intro till MongoDB
* Enkelt att förstå för JS-programmerare
* Dokumentdatabas, lagrar i JSON-liknande format
* Gränssnittet är ett JS-liknande språk
* Låt oss experimentera!

> En bild föreställer MongoDB:s logotyp

## Slide 9: Anslut till MongoDB
* Databasen är en server, och ditt program är en klient
* Ansluter via nätverket (men inte HTTP)
* Kommunicerar vi specialiserade protokoll/format
* Förenklas genom klienter och klientbibliotek
* Demo: mongod och klienten mongosh

> En bild föreställer samma två objekt med en pil som på slide 7. Det första objeket är en rektangel
> med texten "Ditt API (Ex: Node-program med express)". Det andra objektet är en cylinder
> med texten "Databas: Ett program, Data på filsystemet, data i minnet". Pilen mellan
> de två formerna har texten "Nätverksanslutning (specialiserat format)".

## Slide 10: Datastrukturer i MongoDB
* Lagrar data i "dokument", objektstrukturer som påminner om JSON
* Dokument följer ett visst "schema", en specifikation av formatet
* Dokument med samma schema samlas i "collections", som påminner om arrayer
* Flera collections samlas i en "database"

> En bild föreställer två blåa dokument, inom en rektangel, som i sin tur ryms inom
> en cylinder. Det första dokumentet innehåller information om Richard, 37, och hans rum
> som är 22 kvadratmeter stort. Det andra dokumentet innehåller motsvarande information
> om Josefina, 31, som bor i ett rum som är 28 kvadratmeter stort. Rektangeln med de
> båda dokumenten har texten "Rooms", och cylindern som omsluter allt har texten "mydatabase"

## Slide 11: Modellera data
* Processen att avgöra hur man strukturerar sin data
* Bygg en "modell" av verkligheten, "domänobjekten"
* Betänk relationer mellan domänobjekten
* Betänk hur datan ska användas

> En bild förställer en utveckling av diagrammet på föregående slide.
> En cylinder med texten "mydatabase" omsluter hela bilden. Till vänster i cylindern finns
> en rektangel med texten "Rooms". Den har två blåfärgade dokument som innehåller varsitt ID
> och varsitt Size-attribut. Till höger finns en rektangel med texten "Inhabitants". Den har
> två grönfärgade dokument som innehåller varsitt ID, samt attributen Name och Age, samt en
> referens till vilket rum (d.v.s. blått dokument) som respektive grönt dokument hänger ihop med.

## Slide 12: Vilka data-modeller skulle man kunna ha i Wordle-projektet?
Interaktiv slide där deltagaren kan svara fritt.

## Slide 13: Data-modeller i databas och kod
* Definiera "modeller" som mappar kod till databasstrukturer
* Exempel: JS-objekt som motsvaras av MongoDB-dokument
* Använd klient-bibliotek för att förenkla överföring
* Demo: Klientbiblioteket *mongoose* för ToDo-appen

## Slide 14: MongoDB i molnet
* MongoDB har en molntjänst, "Atlas"
* Gratis för experimenterande, kostar för större användning
* Vanlig affärsmodell för open-source projekt
* Demo: Atlas för ToDo-appen

## Slide 15: Vad är sant om MongoDB
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* MongoDB är ett program som jag kör på min dator och som mina egna program kan ansluta till
* En collection kan innehålla flera databaser
* Dokument följer ett schema som bestämmer vilken data som får finnas i dokumentet
* Istället för MongoDB kan man använda Mongoose
* Atlas är ett alternativ som gör att jag slipper köra MongoDB på min egen dator

## Slide 16: Till nästa gång
* Börja integrera MongoDB i ert projekt
* Testa Atlas om ni vill
* Nästa lektion: Undvik fusk med sessioner

## Slide 17: Hur känns det efter lektionen?
* Jag lärde mig mycket idag
* Jag förstår hur jag ska använda databas i projektet
* Jag känner att jag har allt jag behöver för projektet
* Jag känner mig trygg med att bli klar med projektet i tid