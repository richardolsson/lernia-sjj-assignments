# Föreläsning A201

## Slide 1: Delta i presentationen
Instruktioner för att delta i mentimeter

[Länk till presentation i Mentimeter](https://www.menti.com/algmiu7e1vnn)

## Slide 2: Richard Olsson
Nörd, programmerare, seglare.
Tech Lead på Zetkin Foundation

## Slide 3: Kursplan A2, HTML & CSS
* Kursens innehåll
* Kursmål
* Kunskapsbedömning

## Slide 4: Lektion A201, Intro till HTML & CSS
Visar en bild som genererats av ett AI med prompten "Webbsida på laptopskärm". Det går att förstå vad bilden föreställer, men den ser inte realistisk ut.

## Slide 5: Föreläsningens innehåll
* Relationen mellan HTML & CSS
* Fokus HTML
* Fokus CSS
* Uppgift för experimenterande

## Slide 6: Vad hoppas jag att ni får med er?
* Förståelse för koncept och teori
* Nyckelord att googla vidare om
* Metodik kring kunskapsinhämtning och experimenterande

## Slide 7: Vad vet vi om HTML?
Interaktiv slide där deltagare kan svara i fritext.

## Slide 8: HTML
* HyperText Markup Language
* Beskriver innehållet på en webbsida
* Kommunicerar struktur och semantik

## Slide 9: Vad vet vi om CSS?
Interaktiv slide där deltagare kan svara i fritext.

## Slide 10: CSS
* Cascading StyleSheets
* Beskriver utseendet på en webbsida
* Kommunicerar layout & styling

## Slide 11
Visar återigen den AI-genererade bilden från slide 4

## Slide 12: Vilken av rubrikerna är huvudrubrik?
Interaktiv slide där deltagare kan välja tre alternativ. En bild visar två rubriker, där "Rubrik A" är överst och något mindre än "Rubrik B".

Alternativ:

 1. Rubrik A (den mindre)
 2. Rubrik B (den större)
 3. Vet ej

## Slide 13: Fokus, HTML
HTML beskriver innehåll

## Slide 14: Grammatik för HTML
Sida vid sida visas kod och en lista med detaljer

```html
<p>
    En brödtext med <a href="https://google.se">
        en länk till svenska google</a>
        och lite mer text.
</p>
```

* Taggar påbörjar och avslutar element
* Element kan ha barn – skrivs mellan öppnande och avslutande taggar
* Element kan ha properties – skrivs som attribut med namn och värde

## Slide 15: Vilka element finns?
Det bestäms genom standarder överenskomna av konsortier av de största aktörerna.

[Länk till Mozillas dokumentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

## Slide 16: HTML bygger DOM
Document Object Model – ett träd av noder

Exempel: ToDo-app

På denna slide finns även ett bild av ett höstträd.

## Slide 17: Vad är sant om HTML?
Interaktiv slide där deltagare kan ange på skala 1-5 hur sanna fyra påståenden är:

* HTML beskriver hur webbsidor ser ut
* HTML-element har en inneboende betydelse, oavsett hur de ser ut
* Det som visas av webbläsaren är HTML
* Webbläsarens "inspector" visar HTML

## Slide 18: Fokus, CSS
CSS beskriver utseendet på en webbsida

## Slide 19: Grammatik för CSS
Sida vid sida visas kod och en lista med detaljer

```css
h1 {
    font-size: 20px;
    font-weight: bold;
}
```

* Selector anger DOM-element
* Properties inom måsvingar
* Properties har values (med egen grammatik)
* Helheten kallas regel ("rule")

## Slide 20: Hur använder webbläsaren CSS?
* Bygger DOM från HTML
* Läser CSS och går igenom varje regel
* Hittar matchande element i DOM
* Applicerar de properties som regeln anger

## Slide 21: Vilka properties finns?
Definieras på samma sätt som HTML-element, och varierar från element till element (men de flesta är gemensamma).

## Slide 22: Hur välja DOM-element med selektorer?
* Baserat på elementens egenskaper
* Baserat på elementens relationer
* "Pseudo-selektorer"
* Låt oss googla & experimentera!

## Slide 23: Vad är sant om CSS?
Interaktiv slide där deltagare kan ange på skala 1-5 hur sanna fyra påståenden är:

* CSS anger hur HTML ska se ut
* CSS är meningslöst utan HTML
* En CSS-regel anger properties för ett DOM-element
* Ett DOM-element kan påverkas av flera CSS-regler

## Slide 24: Till nästa gång (onsdag)
* Titta på din Todo-app utifrån eventuella nya insikter
* Experimentera med CSS på din Todo-app
* Dela screenshots av dina experiment i Slack

## Slide 25: Hur känner du efter lektionen?
Interaktiv slide där deltagare kan ange på skala 1-5 hur mycket de håller med om följande påståenden:

* Jag har fått fördjupad förståelse av HTML
* Jag har fått fördjupad förståelse av CSS
* Jag har fått fördjupad förståelse av samspelet mellan HTML & CSS