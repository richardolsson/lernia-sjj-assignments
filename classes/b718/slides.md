# Föreläsning B718

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/alkzjynfzrng)

## Slide 2: Förra lektionen
* Principer för säkerhet
* Sessions
* Cookies
* JWT & kryptering

## Slide 3: Vad är sant om säkerhet i NEXT.js?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* JWT är ett sätt att lagra sessionsdata så att användaren inte kan se det
* För att undvika att en hacker ändrar sessionsdata måste den krypteras
* Krypterad text kan bara läsas av den som har nyckeln
* JWT består av tre delar där två är "encodade" medan den sista är krypterad.

## Slide 4: Lektion B718 – Kryptering & lösenordshantering
Hur lagrar man lösenord på ett säkert sätt, och vilken roll kan kryptering spela?

## Slide 5: Lektionens innehåll
* Utmaningar vid lösenordshantering
* Kryptografi
* Hashing

## Slide 6: Naiv lösenordshantering
* Spara lösenord i koden
* Jämför användarens lösenord med `if`-sats
* Låt oss experimentera

## Slide 7: Hur bra är denna lösning?
Interaktiv slide där deltagaren kan välja ett av följande alternativ.

* Inte alls bra!
* Bra i vissa situationer
* Helt godkänd!

## Slide 8: Kryptografi
* Läran om att dölja meddelanden i andra meddelanden
* Syfte att dölja meddelanden från andra än avsedd mottagare
* Används för datasäkerhet
* Mycket äldre än datorer

## Slide 9: Kryptering
* Har använts i millenier
* Exempel: Caesar-schiffer
* Matematiken och tekniken har utvecklats
* Kryptering har blivit mer komplex
* Idéerna ändå ungefär desamma

## Slide 10: Exempel: Caesar-schiffer
* Princip: Byt ut varje bokstav mot en annan genom att förskjuta alfabetet
* Exempel: Förskjut alla bokstäver tre tecken
* `ABCDEFGHIJKLMNOPQRSTUVWXYZ` (input)
* `DEFGHIJKLMNOPQRSTUVWXYZABC` (output)
* "HELLO" krypteras till "KHOOR"
* Dekryptera igen genom att göra motsatsen

## Slide 11: Kryptera med nycklar
* Princip: Som Caesar-schiffer, men med varierande förskjutning
* Exempel: Nyckeln 1346 förskjuter första bokstaven 1 steg, andra 3 steg osv
* H + 1 = I
* E + 3 = H
* L + 4 = P
* L + 6 = R
* O + 1 = P
* "HELLO" blir "IHPRP"

## Slide 12: Krypterad text kan dekrypteras
* Kryptering använder matematiska formler som har en motsats
* Ex: Kryptera med _f(x) = x + 5_, dekryptera med _d(x) = x - 5_
* Vissa matematiska formler kan inte inverteras!
* Ex: _h(x) = (x-5)(x-5)_
* _h(3) = (3-5)(3-5) = -2 * -2 = 4_
* _h(7) = (7-5)(7-5) = 2 * 2 = 4_

## Slide 13: Envägskryptering kallas "hashing"
* Konverta data till något oläsbart som ej kan återställas
* Algoritmerna är mer komplexa
* Ex: MD5, MD6, SHA
* MD5 är gammal och svag, men ett bra exempel: gör om data oavsett storlek till 32 tecken
* MD5 gör om data oavsett storlek till 32 tecken
* Samma input leder alltid till samma output
* Passar till lösenord!
* Ex: `MD5('mypassword') == 'd84c7934a7a786d26da3d34d5f7c6c86'`

## Slide 14: Hashing av lösenord
* Spara hashad version av lösenordet
* När användaren loggar in skickar de sitt lösenord i plaintext som input
* Jämför hashad input mot sparad hash, stämmer de?
* Lösenord förblir hemliga, även för oss
* Om någon stjäl vår databas kan de ändå inte läsa lösenorden
* Men hashing är inte perfekt!

## Slide 15: Attack: Bruteforce
* Attacker testar alla möjliga kombinationer av bokstäver
* Ex: aaaa, aaab, aaac, aaad ... zzzz
* **Lösning**: Gör hashingen långsam genom att köra den flera gånger
* `hash(hash(hash(hash(password))))`

## Slide 16: Attack: Dictionaries/tables
* Attacker har en lista på alla möjliga lösenord och vad motsvarande hash blir
* ' Ex: `aaaa = 'e5828c…'; aaab = '928fc…'` etc
* **Lösning**: "Salta" din hash, så att den inte motsvarar attackerns tabell längre
* `hash(password + 'salt') != hash(password)`

## Slide 17: Hashing i praktiken
* I Node använder många `bcrypt`
* Hanterar repetition
* Hanterar salt
* Använder modern algoritm
* Låt oss experimentera!

## Slide 18: Hur lagrar vi lösenord?
* Måste lagras säkert, på backend
* Kan lagras i databas
* Lagra **aldrig** plaintext, alltid hashat

## Slide 19: Vad är sant om hashing?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Hashing är en metod för att kryptera en sträng som sedan kan dekrypteras med ett salt
* MD5, MD6 och SHA är exempel på hashingalgoritmer
* Hashing gör det omöjligt att läsa ett lösenord, men det går fortfarande att gissa det
* När man som användare loggar in kan man fylla i lösenordet antingen som plaintext, eller hashat i förväg

## Slide 20: Till nästa lektion
* Fortsätt med inlämningsuppgiften
* Gör er redo för presentation på tisdag
* Följande lektioner: Fördjupning

## Slide 21: Vad vill du helst att vi ska fördjupa oss i under kursens sista veckor?
Interaktiv slide där deltagaren kan rangordna följande alternativ.

* Mer om React (exempelvis context)
* Mer om Typescript (exempelvis generics, OOP m.m.)
* Mer om databaser (exempelvis andra typer av databaser)
* Mer om säkerhet (inloggning etc)
* Mer om system (fullstack/API/SOC)
* Mer om deployment/hosting
* GUI/Komponentbibliotek för React
* Mer om styling (CSS/SASS) i React-applikationer
* Exempel från en storskalig NEXT-applikation
* Alternativa ramverk (istället för React)
* Praktisk matematik med datorer (hex, binärt etc)

## Slide 22: Hur känner du efter lektionen?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är.

* Jag lärde mig mycket idag
* Jag tycker det är spännande med kryptografi
* Jag förstår hur jag ska använda dagens ämne i inlämningsuppgiften
* Jag ser fram emot fördjupningslektionerna