# Fyrstegsmetoden
1. Definiera
2. Separera
3. Experimentera
4. Kombinera

## 1. Definiera
Man ska kunna klicka på en knapp och då öppnas
menyn ovanpå allt annat med en animation.

## 2. Separera
A. Klicka på knapp
B. Öppna menyn (toggla synlighet)
C. Ovanpå allt annat (enligt design)
D. Animera in

## 3. Experimentera (hitta lösningar)
A. Klicka på knapp
    - Hitta knappen i DOM:en
    - Upptäcka när användaren klickar/trycker
    document.querySelector('.main-nav-toggle')
        .addEventListener('click', (ev) => {
            console.log('click!');
            ev.preventDefault()
        })

B. Öppna menyn (toggla synlighet)
    document.querySelector('.main-nav').classList.toggle('open')
    kombinerat med CSS för open

C. Ovanpå allt annat (enligt design)
    Style med SCSS

D. Animera in
    Keyframes