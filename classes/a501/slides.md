# Föreläsning A501

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/almobnpr9iri)

## Slide 2: Ny kurs! Hur känner du efter förra?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påstående är:

* Jag känner att jag är i fas
* Jag känner mig nöjd med min insats i förra kursen
* Jag är peppad på att lära mig om backendutveckling

## Slide 3: Glöm inte kursutvärderingen!
Kursutvärderingen bidrar till formandet av efterföljande kurser, inklusive denna!

## Slide 4: Kursplan A5: Backend
* Genomgång av material från ItsLearning:
* Kursens innehåll
* Kursmål
* Kunskapsbedömning
* Kursens upplägg

## Slide 5: Lektion A501 - Intro till HTTP
Grunden till all kommunikation på webben – hur fungerar den?

## Slide 6: Lektionens innehåll
* Introduktion till kommunikation via HTTP
* Request/response-modellen
* Analysera en HTTP-request
* Introduktion till veckans inlämningsuppgift

## Slide 7: Hur har du kommunicerat över jul och nyår?
Interaktiv slide där deltagaren kan svara fritt. Träffade ni släkten? Fick ni några julkort? Ringde ni någon på tolvslaget? Vilka kommunikationsvägar har ni?

## Slide 8: Analysera ett kommunikationssätt (i smågrupper)
* I vilken riktning/vilka riktningar går kommunikationen?
* Vilka språk använder ni vid respektive kommunikationssätt?
* Turas ni om, eller kommunicerar ni spontant?
* Har ni särskilda roller i kommunikationen, eller likvärdiga?
* Vad håller kommunikationen för tempo?
* Finns det några regler och konventioner som ni följer?

Anteckna själva eller kollektit i Miro: https://miro.com/app/board/uXjVP0HlK9A=/?share_link_id=941180143400

## Slide 9: Sammanställning
Låt oss analysera hur olika kommunikationssätt går till

Föreläsaren sammanställer anteckningar som skickas ut efter lektionen.

## Slide 10: Protokoll
Regler och system som vi följer vid olika typer av kommunikation, exempelvis brev, telefon, röksignaler, fyrljus eller HTTP

## Slide 11: HTTP
* HyperText Transfer Protocol
* Protokoll för kommunikation mellan datorer på webben
* Det "språk" som er webbläsare pratar med webbplatser

## Slide 12: Protokollet HTTP
* Riktning: Dubbelriktat mellan två parter
* Språk: Text med vissa nyckelord
* Ordning: Turas om (request, följt av response)
* Rollfördelning: En klient, en server
* Tempo: "Långsamt" – hela meddelanden fram och tillbaka
* Regler: Strikt grammatik för hur ett meddelande ser ut

## Slide 13: HTTP, ett klient/server-protokoll
* Klienten är ofta (men inte alltid) en enhet som används av en människa
* Servern är ofta en dator som kör autonomt och "sköter sig själv"
* Vår viktigaste HTTP-klient hittills: webbläsaren (hämta resurser enligt HTML)
* På andra sidan finns en server
* I kursen fokuserar vi på vad som händer på servern

## Slide 14: Fyra exempel på klienter
* Webbläsaren
* Postman
* Curl
* Telnet (manuellt)
* Låt oss testa dem!

## Slide 15: HTTP-kommunikationens anatomi
* Request: metod, path och version
* Request: Eventuella headers
* Response: version och status
* Response: headers
* Response: body

```http
GET /api/booking/available-times?date=2023-01-03 HTTP/2
Host: lernia-sjj-assignments.vercel.app
User-Agent: curl/7.64.1
Accept: */*

HTTP/2 200
Content-Type: application/json
cache-control: public, max-age=0, must-revalidate
date: Sun, 02 Jan 2022 08:01:26 GMT
access-control-allow-origin: *
content-length: 70

{
  "date": "2022-01-03T00:00:00.000Z",
  "slots": [
    "11:00"
  ]
]
```

## Slide 16: Vad gör en server? (Vad händer mellan request och response?)
Interaktiv slide där deltagaren kan svara fritt.

## Slide 17: Två exempel
* Request efter bild
* Request till ESC API:et

## Slide 18: Analysera en HTTP-request (i smågrupper)
* Välj ut vilken HTTP-request som helst och analysera den
* Varför görs den?
* Vem ställer frågan?
* Vad gör servern?

## Slide 19: Redovisning
Vilka HTTP-requests valde ni, och vad kan ni berätta om dem?

## Slide 20: Vad gör en server? (exempel)
* "Serverar" "resurser"
* Hittar rätt data, exempelvis i en databas eller en mapp
* Kontrollerar in-data, och säkerställer rätt till åtkomst
* Gör beräkningar
* Sätter ihop HTML som kan skickas till webbläsaren (klienten)
* …och mycket mer

## Slide 21: I denna kurs kommer vår serverkod:
* Hantera HTTP-requests och skicka responses
* Serva filer (orörda) från mappar
* Hämta dynamisk data från externa källor
* Generera HTML dynamiskt
* Förebygga hackingattacker

## Slide 22: Vad är sant om HTTP?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* HTTP är ett protokoll som är viktigt för webben
* HTTP-requests innehåller information om vilken fil som ska laddas hem
* En server lyssnar efter requests och bestämmer själv hur den ska svara
* Postman och telnet är exempel på HTTP-klienter

## Slide 23: Efter lektionen
* Inlämningsuppgift: "Fem frågor om HTTP" (OBS, mer info på onsdag)
* Frivilligt: Analysera tio HTTP-requests (vad skiljer dem åt?)
* Frivilligt: Testa Postman och curl
* Frivilligt: Läs HTTP-artikel på MDN
* Frivilligt: Se https://youtu.be/9dT0FSH-aGQ

## Slide 24: Hur känner du efter lektionen?
* Jag förstår mer om hur webben fungerar än tidigare
* Jag tror mig förstå hur HTTP fungerar
* Jag är peppad på att lära mig om backendutveckling