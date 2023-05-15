# Föreläsning B725

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/aloeqq2ooddz)

## Slide 2: Svar på frågan "Vad vill du helst att vi ska fördjupa oss i under kursens sista veckor?"
En bild av resultatet från omröstning på tidigare lektion. I topp ligger:

1. Mer om TypeScript
2. Exempel från en storskalig NEXT.js-app
3. Mer om deployment/hosting
4. Mer om säkerhet (inloggning etc)
5. Mer om databaser (exempelvis andra typer av databaser)
6. Mer om system (fullstack/API/SOC)

## Slide 3: Vad är sant om datakällor och databaser?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Databaser är ett sätt att lagra data i en mapp på mitt filsystem
* Databasmjukvaror har ofta specialiserade språk och protokoll som man använder som programmerare
* Dokumentdatabaser används främst för att lagra långa texter och andra dokumentliknande filer
* Key/value-stores har väldigt få regler och är därför väldigt flexibla att använda

## Slide 4: Lektion B725 - Fördjupning, databaser
En djupare titt på tre nya typer av databaser och hur de kan användas i ett projekt.

## Slide 5: Lektionens innehåll
* Repetition, databaser
* Exempel, relationsdatabas
* Exempel, key/value store
* Exempel, sökdatabas

## Slide 6: Lagring för programmerare
* Minnet (flyktigt)
* Filsystemet (persistent)
* Persistent = Varaktig lagring – inte tillfälligt
* "Varaktig" kan betyda olika tid i olika sammanhang
* Vanligtvis: Ska överleva reboot, etc

## Slide 7: Problemet med hårddiskar och filsystem
* Hanterar "concurrency" dåligt (ex race conditions)
* Långsamt att läsa och/eller skriva
* Filer/mappar är en ok struktur, men inte jättebra'
* Därför: Databaser!

## Slide 8: Vad är en databas?
* Många betydelser i samma term
* "Databasmjukvara": Specialiserad mjukvara för lagring av data
* "Databas": Logisk indelning av data
* Kommunicerar med din kod via nätverk (inte HTTP)

> En bild föreställer ett diagram med två objekt.
> Det första objektet har texten "Ditt API, ex node-program med express"
> Det andra objektet har texten "Databas: Ett program, data på filsystemet, data i minnet"
> En pil går från första objektet till andra objektet med texten "Nätverksanslutning (specialiserat format)"

## Slide 9: Kommunikation mellan program och databas
* Via nätverket, men inte HTTP
* Hur anslutning fungerar varierar mellan olika databasmjukvaror
* Kommunicerar vi specialiserade protokoll/format

> Samma bild som förra sliden

## Slide 10: Hur strukturerar en databas data?
* Det finns olika sätt! Exempel:
* Relationsdatabas: Lagrar tabeller som hänvisar till varandra
* Dokumentdatabas: Lagrar flexibla objekt, likt JSON-filer
* Key/value-databas: Lagrar i en stor tabell, likt ett JS-objekt
* Grafdatabas: Lagrar grafer av noder och länkar ("edges")
* Sökdatabas: Lagrar ett "index" optimerat för sökord

## Slide 11: Vårt exempelprojekt
* API för filmer med recensioner
* Optimeras genom caching
* Sökbart med sökindex
* Next.js med Typescript

## Slide 12: Relationsdatabas
* Används som huvudlagring
* Tabeller för filmer och recensioner
* SQL för att skapa och hämta data
* Ex: PostgreSQL, MySQL, MS SQL mfl
* Vi använder PostgreSQL
* Låt oss experimentera!

## Slide 13: Är relationsdatabaser användbara?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Nej, jag har ingen användning för det
* Antagligen, men jag vet inte när
* Ja, jag kan föreställa mig användningsområden

## Slide 14: Key/value store
* Kan användas för mycket, här för caching
* Key = url, value = data
* Ex: Redis, RocksDB, Memcached m.m.
* Vi använder Redis
* Låt oss experimentera!

## Slide 15: Är key/value stores användbara?
* Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Nej, jag har ingen användning för det
* Antagligen, men jag vet inte när
* Ja, jag kan föreställa mig användningsområden

## Slide 16: Sökdatabas
* Används för att söka i stora mängder data
* Indexerar data i förväg, optimerat för sökning
* Ex: Meilisearch, Lucene, ElasticSearch m.m 
* Vi använder Meilisearch
* Låt oss experimentera!

## Slide 17: Är sökdatabaser användbara?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Nej, jag har ingen användning för det
* Antagligen, men jag vet inte när
* Ja, jag kan föreställa mig användningsområden

## Slide 18: Vad är sant om databaser?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* SQL är ett språk specifikt för att kommunicera med relationsdatabaser
* Redis är en key/value-store vilket betyder att man bara kan lagra data i två kolumner
* Sökdatabaser bygger först upp ett index, vilket är långsamt, och kan sedan söka snabbt
* Redis är oftast snabbare än andra databaser eftersom all data hålls i minnet istället för på hårddisken

## Slide 19: Resten av veckan
* Fortsätt med uppgiften
* Hemtenta "Fem frågor om React och NEXT"
* Handledning när ni behöver, särskilt idag och onsdag

## Slide 20: Hur känner du efter lektionen?
* Jag lärde mig mycket nytt idag
* Jag känner att jag förstår olika databasers likheter och olikheter
* Jag vill introducera fler databaser i projektet
* Jag känner mig redo att gå vidare till nya teknikområden i höst