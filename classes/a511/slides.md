# Föreläsning A511

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/al6epqsxewbk)

## Slide 2: Förra veckan
* REST-design
* Testning med mockade datakällor
* Webbsäkerhet

## Slide 3: Vad är sant om testning och säkerhet
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Med "dependency injection" kan man uppnå testning som är helt oberoende av miljön
* Man ska alltid använda HTTPS för webbapplikationer som är tillgängliga på internet
* XSS-brister kan uppstå genom misstag i programmeringen på frontend eller backend
* Automatiserade tester ska köras på utvecklarens dator efter varje ändring

## Slide 4: Hur går det med uppgiften?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag har en tydlig uppgift i min grupp
* Jag har kommit ungefär halvvägs
* Jag känner att jag har den kunskap jag behöver för att lösa uppgiften
* Jag känner mig trygg med att hinna klart till på lördag

## Slide 5: Lektion A511: Deployment
Publicering av webbapplikationer med backendkod, olika varianter

>En bild föreställer en skylt med texten "Come in, we're open".

## Slide 6: Lektionens innehåll
* Vad är en server?
* Vad krävs för att köra er app?
* Olika serverkonfigurationer
* DevOps

## Slide 7: Vilket operativsystem kör du på din dator?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Windows
* Mac OSX
* Linux
* Annat / flera
* Vet ej

## Slide 8: Vilka typer av datorer använder du dig av i din vardag?
Interaktiv slide där deltagaren kan svara fritt.

## Slide 9: Vad är en server?
* En dator, vars jobb är att "serva" andra
* Ofta annan typ av hårdvara
* *Viktigt: Prestanda, parallellism, lagringsutrymme*
* *Mindre viktigt: Storlek, energi/värme*
* Kan också vara din dator (under utveckling)

>En bild föreställer rackskåp med servrar i.

## Slide 10: Vad behövs för att köra din app?
* Mycket teknik får webben att fungera
* Serverns hårdvara (CPU, hårddisk etc)
* Serverns operativsystem (Ofta Linux)
* Serverns miljö (exempelvis Node)
* Serverns applikationskod (exempelvis Javascript)
* Motsvarande saker för webbläsaren på användarens dator

>En bild föreställer ett diagram med fyra boxar ovanpå varandra, samt en webbläsare.
>Boxarna har texterna "Applikation", "Miljö/runtime", "Operativsystem" respektive "Hårdvara"

## Slide 11: En ren frontend-app
* Du som utvecklare ansvarar för kod som körs i webbläsaren
* Det behövs någon applikation som servar (ex GitHub Pages)
* Applikationen behöver köra på en server med miljö, OS & hårdvara

>En bild föreställer ett diagram med fyra boxar ovanpå varandra, samt en webbläsare.
>Boxarna har texterna "Applikation", "Miljö/runtime", "Operativsystem" respektive "Hårdvara"
>Webbläsaren är inrutad med en grön, streckad rektangel.

## Slide 12: Full-stack app (frontend & backend)
* Du som utvecklare ansvarar för frontendkod och applikationskod
* Applikationen behöver köra på en server med miljö, OS & hårdvara
* Hur kör man en server?

>En bild föreställer ett diagram med fyra boxar ovanpå varandra, samt en webbläsare.
>Boxarna har texterna "Applikation", "Miljö/runtime", "Operativsystem" respektive "Hårdvara"
>Webbläsaren samt boxen "Applikation" är markerade i grönt.

## Slide 13: Din utvecklingsmiljö är en server!
* Serverappen kör på din egen dator
* Du installerar miljön (Node) på ditt OS (Mac/Windows) etc
* Bara tillgänglig för dig

>En bild föreställer ett diagram med fyra boxar ovanpå varandra, samt en webbläsare.
>De två översta boxarna har texterna "Din applikation" och "Din miljö". Till höger om dessa ligger webbläsaren.
>De två undre boxarna har texterna "Ditt operativsystem" respektive "Din dator"
>Boxen "Din applikation" samt webbläsaren är markerade i grönt, övriga i gult.

## Slide 14: Webbapplikationer "i production"
* Måste vara tillgänglig på internet
* Statisk IP-adress, stöd för TLS etc
* Potentiellt många användare – behöver kunna skala
* Vi behöver en riktig server!

## Slide 15: Olika server-konfigurationer
* Det finns många sätt att köra serverkod
* Varierar i ansvarsfördelning, skalbarhet, kostnad
* Begreppet "server" blir mer och mer konceptuellt, avser inte nödvändigtvis en dator

> En bild föreställer ett meme med fyra rutor
> I den översta rutan ordet "Server" och en röntgenbild av en hjärna
> I nästa ruta ordet "VPS" och en röntgenbild av en hjärna med mycket aktivitet
> I nästa ruta ordet "Container cloud" och en lysande hjärna
> I sista rutan ordet "Serverless" och en strålande hjärna

## Slide 16: "Webbhotell"
* Det klassiska "webbhotellet"
* Stödjer oftast bara PHP eller dylikt
* Ladda upp filerna, de körs vid varje request (PHP-modellen)
* Väldigt begränsad kontroll (och ansvar)
* Lämpar sig för relativt små hemsidor

> En bild föreställer fem boxar samt en webbläsare.
> Den nedersta rutan har texten "Hårdvara" och är röd
> Rutan över har texten "Operativsystem" och är röd
> Rutan över har texten "Delad miljö" och är röd
> Ovanpå den finns två rutor sida vid sidor, en grön med texten "Din applikation", den andra röd med texten "Annans app"
> Webbläsaren är ansluten med en pil till boxen "Din applikation"

## Slide 17: "Hosted server"
* Någon annan tar hand om servern
* Du har kontroll över (och ansvar för) utvalda delar
* Kan delas, i så fall med gemensam OS och hårdvara
* Svår att "skala", alltså att i efterhand förstärka med mer resurser

> En bild föreställer sex boxar samt en webbläsare.
> Den nedersta rutan har texten "Hårdvara" och är röd
> Rutan över har texten "Operativsystem" och är röd
> I nästa lager finns två rutor, en grön med texten "Din miljö" och den andra röd med texten "Annans miljö"
> I översta lagret finns två rutor, en grön med texten "Din applikation", den andra röd med texten "Annans app"
> Webbläsaren är ansluten med en pil till boxen "Din applikation"

## Slide 18: "Hosted" med olika ansvarsfördelning
* Istället för "Shared" – "Dedicated"
* "Managed" – leverantören tar hand om hårdvara och/eller operativsystem
* "Co-located" – din egen hårdvara i leverantörens serverhall
* Skala genom att köpa/hyra ny hårdvara (svårt och dyrt)

> En bild föreställer tre diagram, vart och ett med fyra rutor och en webbläsare
> I alla diagram är webbläsaren ansluten med en pil till den ruta som heter "Applikation"
> Det första diagrammet har följande rutor uppifrån: Applikation (grön), miljö (grön), operativsystem (röd), hårdvara (röd)
> Det andra diagrammet har följande rutor uppifrån: Applikation (grön), miljö (grön), operativsystem (grön), hårdvara (röd)
> I det tredje diagrammet är alla fyra rutorna gröna: Applikation, miljö, operativsystem, hårdvara

## Slide 19: Virtual Private Server (VPS)
* Bygger på "virtualisering", en teknik för att emulera virtuella maskiner
* Istället för en egen (co-located) server
* Du har full kontroll över VM, men slipper ta ansvar för fysisk maskin
* Flera VM kan köras på samma dator
* Lätt att skala "vertikalt" (allokera mer hårdvara) till en viss gräns

> En bild föreställer ett diagram med sex rutor ovanpå varandra, samt en webbläsare.
> Rutorna ovanifrån heter "Din applikation" (grön), "Miljö" (grön), "Operativsystem" (grön), "Virtuell hårdvara" (gul), "Operativsystem" (röd) samt "Hårdvara" (röd).
> Runt rutorna "Din applikation", "Miljö", "Operativsystem" och "Virtuell hårdvara" finns en gul, streckad linje med rubriken "VPS".
> Webbläsaren är ansluten med en pil till rutan "Din applikation"

## Slide 20: Containers
* Mer effektivt än Virtuell Maskin
* Eget operativsystem, men med direktkontakt till fysisk hårdvara
* Definiera OS och miljö med "image", kör container med Docker
* Lätt att skala "horisontellt" (starta fler containers)
* Demo!

> En bild föreställer ett diagram med fem rutor ovanpå varandra, samt en webbläsare.
> De tre översta rutorna är smalare och gröna. De heter i ordning ovanifrån "Din applikation", "Miljö" samt "Operativsystem"
> De två nedersta rutorna är bredare och röda. De heter "Operativsystem" och "Hårdvara".
> En pil kopplar samman den gröna "Operativsystem" med "Hårdvara" och passerar således den röda "Operativsystem".
> En gul streckad linje ringar in "Din applikation", "Miljö/runtime" och "Operativsystem" med rubriken "Container".
> Vid sidan finns ett dokument med texten "Image" och en pil till den streckade linjen och texten "Docker".
> Webbläsaren är ansluten med en pil till "Din applikation".

## Slide 21: "Cloud"
* Samlingsbegrepp, avser ofta att drifta server utan hårdvara
* Du administrerar din server via enkelt gränssnitt (webb, CLI, etc)
* Har stöd för vanliga miljöer – du behöver bara ange vilken du önskar
* Ex: Heroku, DigitalOcean etc
* Kan skala "automatiskt"
* Demo!

> En bild föreställer ett diagram med fyra boxar ovanpå varandra, samt en webbläsare. 
> Boxarna är uppifrån "Applikation" (grön), "Miljö/runtime" (gul), "Operativsystem" (röd) samt "Hårdvara" (röd).
> En gul, streckad linje omsluter boxarna "Applikation" och "Miljö/runtime", med rubriken "Droplet etc"
> Webbläsaren ansluter med en pil till boxen "Applikation"
> Separat finns ännu en webbläsare och en röd box med titeln "Admin interface", som ansluter via en pil med texten "Styr" till den streckade gula rutan.

## Slide 22: "Serverless"
* Kallas "serverless" för att du slipper tänka på servern
* Skriv funktioner som körs vid specifika requests
* Kan enkelt skalas automatiskt genom att köra samma funktion parallellt
* Körs genom specialbyggd mjukvara – krävs också för att utveckla lokalt

> En bild föreställer ett diagram med boxar i fem lager, samt en webbläsare
> Den understa boxen är röd med texten "Hårdvara", därefter "Operativsystem" (röd) och "Miljö/runtime" (röd).
> Ovanpå "Miljö/runtime" finns tre gröna boxar sida vid sida, med texten "func()"
> Överst en röd box med texten "HTTP-server"
> Webbläsaren ansluter via en pil med texten "HTTP" till de tre gröna boxarna med texten "func()"

## Slide 23: "Operations"
* Term för att drifta (konfigurera, underhålla) servrar
* Förkortas "ops"
* Kan vara en särskild yrkeskategori

## Slide 24: Ops idag är komplext men enkelt
* Cloud/Serverless tar hand om hårdvara och OS
* Plattformen underlättar bevakning
* Continuous Deployment (CD) automatiserar publicering
* Continuous Integration (CI) automatiserar testning
* Exempel, continuous integration

## Slide 25: DevOps
* Kombinationen av utveckling (dev) och drift (ops)
* Görs idag ofta av samma personer
* CI/CD möjliggör snabba releaser
* Docker möjliggör samma miljö i "development" och "production"

>En bild föreställer en illustration av en liggande åtta med texter som löper in i varandra runt åttan.
> Texterna "plan", "code", "build", "test" är i mörkare färg på vänstra sidan under "Dev".
> De löper vidare in i texterna "release", "deploy", "operate", "monitor" i ljusare text på högra sidan under "Ops", innan de åter ansluter till "plan" och cykeln börjar om.

## Slide 26: Vad är sant om deployment?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Vid webbutveckling behövs minst två datorer, en som agerar server och en som agerar klient
* Cloud och serverless kräver mindre underhåll än VPS
* Man ska alltid använda HTTPS för webbapplikationer som är tillgängliga på internet
* Docker är ett verktyg för att köra virtuella maskiner

## Slide 27: Idag var sista lektionen
* Deadline för inlämningen på lördag
* Handledning onsdag förmiddag
* Handledning torsdag eftermiddag
* Hör av er däremellan på Slack

## Slide 28: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag lärde mig mycket nytt idag
* Nu känner jag att jag vet minst ett sätt att "deploya" mina node-appar på internet
* Jag vill helst slippa tänka på "ops" och fokusera på utveckling under överskådlig framtid