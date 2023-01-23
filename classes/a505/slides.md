# Föreläsning A505

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/al5a5v2ib4f4)

## Slide 2: Förra veckan
* Node som utvecklingsmiljö
* HTTP-server med Node
* Server-Side Rendering
* Templating med handlebars

## Slide 3: Vad är sant om Server-Side Rendering
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* När innehållet på en webbplats ska vara dynamiskt använder man SSR
* SSR betyder att man genererar HTML från scratch, istället för att använda filer
* Templates är ett sätt att separera ansvaret för logik (javascript) och innehåll (HTML)
* En template-motor bygger på String.replace() (eller motsvarande) bakom kulisserna

## Slide 4: Hur har du kommit igång med backendprogrammering?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag har experimenterat med Richards exempelkod mellan lektionerna
* Jag har skrivit egen backendkod under kursen
* Jag har börjat bygga SSR på Spegeln-projektet

## Slide 5: Lektion A505 - Datakällor
Varifrån får vi dynamisk data

En bild föreställer ett stort antal containrar i en containerhamn.

## Slide 6: Lektionens innehåll
* Olika datakällor för dynamiskt innehåll
* Beständig lagring
* Filer, databaser, API, CDN
* Idag jobbar vi med ett exempel!

## Slide 7: Fokus: Dynamiskt innehåll
* Vilka datakällor har vi använt hittills?
* Input (exempelvis query string)
* Filer (exempelvis templates)
* Vilka andra källor kan finnas?
* Var lagras innehåll?

## Slide 8: Exempel: Richards filmsite
* Lista över filmer
* Detaljer om varje film
* Bild till filmerna
* Låt oss titta på exemplet!

## Slide 9: Vilka program är involverade?
* **VAD** är det för program?
* **HUR** är det implementerat? Vilka tekniker används?
* **VEM** har byggt det?
* **VAR** körs koden?

## Slide 10: Strapi CMS
* Content Management System
* För att hantera innehåll på ett användarvänligt sätt
* Den som redigerar ska inte behöva programmera
* Strapi är "headless" – bara API, genererar ingen HTML

En bild föreställer en screenshot av Strapis redaktörsgränssnitt.

## Slide 11: Känner vi till några fler CMS?
Interaktiv slide där deltagaren kan svara fritt.

## Slide 12: Vilka program består CMS:et av?
* Admingränssnitt
* Backend/API
* Datalagring
* Rita in i diagrammet!

## Slide 13: Databas
* Specialiserad mjukvara för **beständing lagring** av data
* Separat program, sällan integrerat i serverns programkod
* Kommunicerar via nätverk (men ej HTTP)
* Separat kunskapsområde, återkommer på senare kurser

## Slide 14: Känner vi till någon databasmjukvara?
Interaktiv slide där deltagaren kan svara fritt

## Slide 15: Varifrån kommer bilderna?
* Varifrån laddas de? Hur kan vi ta reda på det?
* Hur vet vår programkod varifrån de ska laddas?
* Låt oss utforska!

Bild på filmaffischen för filmen Encanto

## Slide 16: Sammanfattning
* Vårt program har en backend (node) och en frontend (HTML/CSS)
* Vår backend hämtar data från ett CMS via API
* CMS:et har en backend (node), frontend (React) och en databas (Postgres)
* CMS:et laddar även data från IMDB via API

## Slide 17: Vilka datakällor förekommer i vårt system?
Interaktiv slide där deltagaren kan svara frit

## Slide 18: Vad är sant om vår filmsite?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Filmsiten har en frontend och en backend
* Hela filmsiten (inkl Node) är en frontend till CMS:et
* Filmsitens backend kommunicerar med CMS via HTTP
* Filmsiten kommunicerar med IMDB:s API

## Slide 19: Vad är sant om datakällor i webbapplikationer?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Syftet med databaser är att lagra data beständigt, alltså i flera år
* CMS låter redaktörer hantera innehåll, och renderar sedan fin HTML för användaren
* Webbapplikationer använder alltid en av följande datakällor: CMS, API, databas, filsystem
* Alla komponenter (exempelvis datakällor) i ett system körs vanligtvis på samma dator

## Slide 20: Till nästa gång: Ny uppgift
* SSR i Spegeln-projektet
* Ladda filmer från mitt film-API
* Integrationstester (vi går igenom detta på onsdag)
* Researcha och använd egen template-motor (VG)

## Slide 21: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag lärde mig något nytt idag
* Jag känner att jag förstår vilken roll olika datakällor spelar i en webbapplikation
* Jag behöver mer tid för att smälta all ny information
* Jag vet hur jag ska börja på inlämningsuppgiften