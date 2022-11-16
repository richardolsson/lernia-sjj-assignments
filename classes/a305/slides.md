# Föreläsning A305

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/alxwnhihiyg2)

## Slide 2: Hur går det med grupparbetet?
Interaktiv slide där deltagare kan ange 1-5 hur sanna följande påstående är:

* Jag har kontakt med min grupp
* Vi har delat upp uppgiften mellan oss
* Vi har börjat programmera

## Slide 3: Lektion A305 - Samarbeta som programmerare
Metoder, teknik och verktyg

En bild på grenar på ett träd.

## Slide 4: Olika aspekter av samarbete
* Samarbetsmetoder i stunden (denna lektion)
* Tekniska hjälpmedel (denna lektion)
* Kodstruktur (nästa vecka)
* Processer (nästa kurs, samt lite denna lektion)

## Slide 5: Samarbetsmetoder i stunden
* Parprogrammering (en kodar, en styr)
* Mob programming (en kodar, flera styr)
* Verktyg underlättar, exempelvis VSCode LiveShare
* Låt oss titta på VSCode LiveShare!

## Slide 6: Vad tycker du om VSCode LiveShare?
Interaktiv slide där deltagare kan ange ett av följande alternativ:

* Dåligt verktyg
* Varken eller
* Bra verktyg

## Slide 7: Git & GitHub
Teori och praktik för samarbete med Git

Bild föreställer en screenshot på en "pull request" på GitHub

## Slide 8: Vad är sant om Git och GitHub?
Interaktiv slide där deltagare kan ange 1-5 hur sanna följande påståenden är:

* Git är ett exempel på centraliserad versionshantering
* När en programmerare förändrar något i sin kod så sparas det i Git som en "commit"
* En commit är en förändring som följer på en föregående commit
* "Branches" är ett sätt att enkelt växla mellan och jämföra olika commits
* GitHub är en tjänst som underlättar vissa arbetsflöden kring Git

## Slide 9: Samarbeta med Git och GitHub
* Commits & Branches
* Remotes
* Pull requests på GitHub

## Slide 10: Commits
* En commit beskriver en förändring
* Pekar tillbaka på föregående commit
* Beskrivning, tidsstämpel, upphovsperson

Bild föreställer tre boxar, A, B och C, där pilar pekar från C till B, och från B till A. C är rosa.

## Slide 11: Branches
* En namngiven commit
* Samma commit kan ha flera namn
* Default är "main" eller "master"

Samma bild som tidigare, men C har nu även namnet "main" inom parentes. C är rosa.

## Slide 12: Skapa ny branch
* Skapa med **git branch other**
* Växla över till **git checkout other**
* Kombinera med **git checkout -b other**

Samma bild som tidigare, men C har nu två namn, "main" och "other". C är rosa.

## Slide 13: Arbeta på branch
* Fortsätt göra commits
* Ytterligare commits sker på aktiv branch
* Namnet "flyttas" till nästa commit, D

Samma bild som tidigare, men nu med ytterligare en box "D" med namnet "other". D är nu rosa. Boxen C har nu bara namnet "main" och är svart.

## Slide 14: Växla tillbaka
* Växla tillbaka med **git checkout main**
* Vi flyttas till commit C ("main")
* Commit D finns kvar ("other") men är irrelevant för C ("main")

Samma bild som tidigare, men C (main) är rosa igen. D (other) är grå.

## Slide 15: Arbeta vidare på main
* Ytterligare commits pekar tillbaka på C
* Namnet "main" flyttas till ny commit K
* Commit D ("other") påverkas ej

En ytterligare box har dykt upp, kallas K. Namnet "main" har flyttats till K, som nu är rosa.

## Slide 16: Arbeta vidare (forts)
* Ytterligare commits pekar tillbaka på C
* Namnet "main" flyttas till ny commit L
* Commit D ("other") påverkas ej

Ännu en box tillkommer, kallas L. Namnet "main" har flyttats till L, som nu är rosa.

## Slide 17: Merge (slå samman)
* Gör en merge med **git merge other**
* Skapar en commit med två föräldrar
* K+L och D slås samman
* Namnet "main" flyttas som vanligt
* Vad händer om D och L har ändrat samma sak?

En ny box tillkommer, kallas M. Namnet "main" har flyttats till M. Den är rosa, och pilar pekar tillbaka på både L och D.

## Slide 18: Remotes
* Hela källkodsdatabasen på flera ställen
* Historiken, branches etc
* Ex: Din dator, kollegas dator, GitHub
* Vad händer om flera gör commits på main?

Hela illustrationen från föregående slides upprepas fyra gånger, sida vid sida, med etiketter som illustrerar att de hör hemma på olika platser.

## Slide 19: Demo

## Slide 20: Samarbeta med Git
* Jobba lokalt i egna branches
* Ladda upp (**git push**) din branch till GitHub
* Andra kan ladda hem dina ändringar (**git fetch**)
* Slå ihop dina och andras ändringar (**git merge**)

## Slide 21: Samarbeta med GitHub pull requests
* Jobba i lokal branch och pusha till GitHub
* Skapa pull request från din branch till main
* Andra kan läsa och kommentera din kod på GitHub

## Slide 22: Demo & exempel

## Slide 23: Vad är sant om Git & GitHub
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* När du är nöjd med en förändring ska du göra en commit
* En commit blir omedelbart tillgänglig för andra att titta på och arbeta vidare från
* Det är klokt att undvika att göra commits till main och istället jobba i varsin branch
* "Branches" är ett sätt att enkelt växla mellan och jämföra olika commits
* Pull requests är detsamma som git merge

## Slide 24: Till nästa gång
* Fortsätt arbeta med era gruppuppgifter
* Kontakta mig (i god tid) för handledning

## Slide 25: Hur känner du efter dagens lektion?
Interaktiv slide där deltagaren kan ange 1-5 hur sanna följande påståenden är:

* Jag kände igen det mesta om git från tidigare lektioner
* Jag känner att jag förstår git bättre nu än när lektionen startade
* Jag vill tillämpa parprogrammering och/eller mob coding i vårt grupparbete
* Jag känner mig orolig för att göra fel med git i grupparbetet