# Föreläsning A502

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/alob2eo3bi8d)

## Slide 2: Förra lektionen
* Vad är ett protokoll?
* Protokollet HTTP
* Request/response-modellen
* Vad gör en server?

## Slide 3: Vad är sant om HTTP?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* HTTP är ett protokoll för att skicka och ta emot filer på webben
* I klient/server-modellen utmärks klienten av att den är ett program som människor använder
* En HTTP-server lyssnar efter requests från klienter och bestämmer själv hur den ska svara
* Ett HTTP response innehåller status, headers och body (innehåll)
* En HTTP-request innehåller metod, path, version, headers och body (innehåll)

## Slide 4: Lektion A502 - I/O med HTTP
Möjligheter för input och output i HTTP, och olika sätt att använda dem för att kommunicera mellan kod

## Slide 5: Lektionens innehåll
* Kommunikation mellan kod
* Input/output via HTTP
* RPC
* REST

## Slide 6: Köra kod "någon annanstans"
* En (fullstack) app har kod både på klient och server
* Vi har kod på en plats (frontend)
* Vi vill köra kod på en annan plats (server)
* Liknar till viss del att ha två bitar kod i en fil, eller i olika filer
* Hör kör man kod på en plats, från en annan plats?

## Slide 7: Input/output (I/O)
* När vi kör kod behöver vi (ofta) tillhandahålla input
* Vi förväntar oss (ofta) att koden ger output
* I/O ser olika ut i olika sammanhang

## Slide 8: Vad har JS-funktioner för input och output?
Interaktiv slide där deltagaren kan skriva in max tre förslag

## Slide 9: I/O för JS-funktioner
* Namnet på funktionen: Avgör vilken kod som ska köras
* Argument: Inputs till koden
* Returvärde: Output från koden
* Felhantering på olika sätt

## Slide 10: Vad har HTTP  för inputs och outputs?
Interaktiv slide där deltagaren kan skriva in max sex förslag

## Slide 11: HTTP inputs
* Metod, ex: **GET** eller **POST**
* Path, ex: **/path/to/some/resource**
* Querystring, ex: **?challenge=1&date=2024-03-21**
* Headers, ex: **Accept: application/json**
* Body, ex: **{ "myAttribute": [1, 2, 3] }**

## Slide 12: HTTP outputs
* Statuskod, ex: **200**
* Headers, ex: **Content-Type: application/json**
* Body, ex: **<!DOCTYPE html><html><body>Hej!</body></html>**

## Slide 13: Input/output med HTTP
* Klienten kan skicka input till servern på flera sätt
* Servern kan svara med outputs på flera sätt
* I teorin kan dessa användas hursomhelst
* I praktiken behöver man göra sig förstådd
* Olika klienter och servrar har olika konventioner
* Låt oss experimentera!

## Slide 14: Hur ser ett API ut?
* Vilka inputs använder vi till vad?
* Ex: Avgöra vilken kod som ska köras, parametrar, lösenord, paginering?
* Vilka outputs använder vi till vad?
* Ex: Innehåll, felindikator, beskriva vad som gick fel
* Detta bestäms inte av HTTP-protokollet!

## Slide 15: Olika filosofier (konventioner) för API-design
* Remote Procedure Calls (RPC)
* REST (Representational State Transfer)
* Query Languages (QL)

## Slide 16: Representational State Transfer (REST)
* Försöker använda HTTP "fullt ut"
* Använd path för att identifiera **resurser**
* Använd method för att precisera **handling**
* Använd HTTP-status för att indikera **typ av fel**
* Låt oss bygga en REST-server

## Slide 17: Vad tycker du om REST som konvention för HTTP?
Interaktiv slide där deltagaren kan välja ett av följande alternativ:

* Jag gillar det inte
* Ingen stark åsikt
* Jag gillar det

## Slide 18: Remote Procedure Calls (RPC)
* Baserat på konceptet "funktion"
* Alla inputs på en plats (ofta i body)
* All output på en plats (ofta i body)
* Låt oss bygga en RPC-server!

## Slide 19: Vad tycker du om RPC som konvention för HTTP?
Interaktiv slide där deltagaren kan välja ett av följande alternativ:

* Jag gillar det inte
* Ingen stark åsikt
* Jag gillar det

## Slide 20: REST vs RPC
* RPC försöker använda HTTP för att emulera "funktioner"
* REST försöker följa andemeningen i HTTP
* Det anses ofta eftersträvansvärt att vara "RESTful" (d.v.s. följa REST)
* Gränserna är suddiga, två "RESTful" API:er kan se olika ut
* Vi kommer att jobba med REST (som är mest populärt)

## Slide 21: Vad är sant om I/O med HTTP
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* HTTP har flera olika inputs och alla går att använda hursomhelst
* När jag surfar in på en sida är det antingen REST eller RPC som används för att hämta HTML
* En HTTP-server måste göra skillnad mellan requests med metoden GET och requests med metoden POST
* REST är en konvention för HTTP, men det är inte RPC

## Slide 22: Efter lektionen
* Fortsätt jobba med "Fem frågor om HTTP"
* Experimentera med mina kodexempel
* Experiment: Skapa motsvarigheter för "apartments"
* Experiment: Använd querystring för att ange sortering
* Experiment: Bygg om RPC-exemplet, ange funktionsnamn i path

## Slide 23: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Jag har lärt mig något nytt om webben idag
* Jag börjar få en bild av hur backend fungerar
* Jag känner mig trygg med att klara "Fem frågor om HTTP" till på lördag
* Jag känner mig trygg med att börja experimentera från lektionens kodexempel