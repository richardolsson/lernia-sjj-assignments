# Föreläsning B709

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/al7vd3rt3ue9)

## Slide 2: Förra veckan
* Fokus på backend
* Design av REST API:er
* Databaser
* MongoDB och Mongoose

## Slide 3: Vad är sant om databaser?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* De flesta relationsdatabaser har det gemensamt att man använder SQL för att kommunicera med dem
* Det är vanligt att använda flera olika databasmjukvaror kombinerat
* MongoDB är en "key/value-databas" där man lagrar data i objekt med keys och values
* Mongoose är ett javascript-bibliotek för att koppla MongoDB-dokument till JS-objekt

## Slide 4: Hur går det med uppgiften?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag har börjat utforma mitt API
* Jag har börjat programmera på backend
* Jag har börjat programmera på frontend
* Jag har börjat integrera MongoDB

## Slide 5: Lektion B709 - Ansvarsfördelning frontend/backend
Undvik fusk i Wordle-projektet genom att fördela ansvar bättre mellan frontend och backend

> En bild föreställer en stafettlöpare som står redo att börja springa

## Slide 6: Lektionens innehåll
* Vad är frontend bra på?
* Vad är backend bra på?
* Fusk i Wordle-spelet och hur man kan lösa det

## Slide 7: Frontend + Backend = Full Stack
* Under lång tid var normen för webben all logik på backend
* Desktop-appar hade istället all logik på "frontend"
* Idag fördelas ansvaret mer lika
* Därav behovet av "Full Stack-utvecklare"
* Viktigt att veta var gränsen ska dras!

## Slide 8: Vilka styrkor har frontendkod (jämfört med backendkod)?
Interaktiv slide där deltagaren kan svara fritt.

## Slide 9: Styrkor med frontend
* Körs på användarens maskin, snabbt!
* Interaktivitet i realtid
* Kräver ingen uppkoppling
* Mindre risk för fel, mindre behov av felhantering

## Slide 10: Vilka styrkor har backendkod (jämfört med frontendkod)?
Interaktiv slide där deltagaren kan svara fritt.

## Slide 11: Styrkor med backend
* Lättare, mer direkt tillgång till data (databaser etc)
* Exponerar ingen kod, "security by obscurity"
* Maskin bortom användarens kontroll, säkrare!
* I teorin obegränsad datorkraft

## Slide 12: Var ska man göra vad?
Välj huruvida du tycker det är bäst att göra följande saker på frontend eller backend.

## Slide 13: Byta färg på en knapp när muspekaren förs över den
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Frontend
* Backend

## Slide 14: Kontrollera att ett lösenord är korrekt
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Frontend
* Backend

## Slide 15: Kontrollera om användaren gissat rätt ord i Wordle-spelet
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Frontend
* Backend

## Slide 16: Räkna hur många som skickat in en highscore
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Frontend
* Backend

## Slide 17: Växla mellan spelvy och inställningsvy i gränssnittet
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Frontend
* Backend

## Slide 18: Räkna ut hur lång tid det gått mellan spelets start och rätt gissning
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Frontend
* Backend

## Slide 19: Fuska i Wordle-spelet
* Möjligt om arkitekturen litar för mycket på frontend
* Snoka i nätverkstrafiken
* Imitera frontend (med egen logik)
* Låt oss experimentera!

> En bild föreställer speglar i olika vinklar som förvränger en bild av berg i bakgrunden.

## Slide 20: Vad går fel?
* Servern skickar ordet till klienten
* Klienten ansvarar för tidtagning
* Klienten skickar färdig tid till backend
* Men klienten går inte att lita på!

> En bild föreställer ett sekvensdiagram med tre spår: Player, frontend, backend
> 1. Player ber frontend starta spelet
> 2. Frontend begär ord från backend
> 3. Backend svarar med ett ord
> 4. Frontend ber användaren om en gissning
> 5. Användaren matar in en gissning i frontend, som jämför med korrekt ord från 3
> 6. Om inkorrekt, be användaren om en gissning igen
> 7. Användaren matar in en gissning (repetera steg 5)
> 8. Om korrekt, frontend visar segerbilden för användaren
> 9. Användaren matar in sitt namn i frontend
> 10. Frontend skickar highscore till backend, inkl namn, tid och ord
> 11. Frontend visar slutskärm för användaren

## Slide 21: Hur kan vi lösa det?
* Servern behåller ordet hemligt
* Servern håller koll på start- och sluttid
* Klient och server kommunicerar med ett "anonymt" ID
* Låt oss experimentera!

> En bild föreställer ett nytt sekvensdiagram med tre spår: Player, frontend, backend
> 1. Player ber frontend starta spelet
> 2. Frontend begär nytt spel från backend
> 3. Backend skapar ett nytt spel, startar klockan och returnerar dess ID
> 4. Frontend ber player om en gissning
> 5. Player matar in en gissning i frontend
> 6. Frontend skickar gissningen vidare till backend, som jämför med det korrekta ordet
> 7. Backend svarar huruvida ordet var korrekt och stoppar i så fall klockan. Om ordet var inkorrekt, repetera 4-7
> 8. Om ordet var korrekt, frontend visar segerbilden för användaren
> 9. Player matar in namn i frontend
> 10. Frontend skickar namn till backend (som redan har tidtagningen)
> 11. Frontend visar slutskärm för användaren

## Slide 22: Vad är sant om ansvarsfördelning mellan frontend och backend?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Frontend kan nästan alltid göra saker snabbare än backend
* Det är möjligt att skicka data mellan backend och frontend utan att användaren kan se den
* Ansvaret för säkerhet måste nästan alltid ligga på backend
* Det går aldrig att "lita på" data som kommer från frontend, den kan ha skickats med ont uppsåt

## Slide 23: Till nästa gång
* Fortsätt med projektet
* Fundera över var ni lagt ansvaret för olika moment
* Nästa lektion, onsdag: Typescript

## Slide 24: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag lärde mig mycket nytt idag
* Jag börjar få en tydligare bild av skillnaden mellan backend och frontend
* Det vi gick igenom idag påverkar hur jag tänker på Wordle-projektet