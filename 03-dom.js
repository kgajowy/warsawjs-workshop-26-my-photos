const DOM =
    `The DOM defines a standard 
    for accessing documents`

const HTML_DOM = `
    The HTML DOM is a standard for how to:
    get, change, add, or delete 
    HTML elements.
`

// window - okno + dokument DOM w formie obiektu (.document)

/**
 * Cwiczenie *
 *
 * Co zwracają w Twojej przeglądarce:
 * window.location
 * window.innerHeight
 * window.navigator.getBattery()
 * window.alert("niespodzianka")
 * window.close()
 * 🤡
 *
 */

// window.document - sam "HTML"

/**
 * Ćwiczenie *
 * Na stronie:
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 *
 * W konsoli developra, znajdź element HTML o ID
 * "Syntax"
 *
 * Ćwiczenie *
 * Odwołując się do własności (jak .length) o nazwie
 *      `innerHTML`
 * zmień napis Syntax na "WarsawJS"
 *
 * Ćwiczenie - wspólnie ! uwaga, funkcja () ! *
 * Utworzyć nowy element:
 * var u = document.createElement('div')
 *
 * Dodać do niego treść, korzystając z innerHTML
 *
 * Dodać utworzony element do 'Syntax' (jako "dziecko")
 *
 */


/**
 * ZADANIE PROJEKTOWE
 *
 * Pomoce naukowe:
 *
 * createElement - 'img'
 * imgElement.setAttribute('src', 'https://picsum.photos/512/360?image=200')
 *
 * sprawi, że img będzie miał atrybut src
 *
 *
 * Ćwiczenie ** / ***
 * Załaduj style CSS do pliku index.html:
 * <link rel="stylesheet" type="text/css" href="styles.css">
 * W sekcji HEAD.
 *      > Twoja kolekcja obrazków powinna mieć rodzica
 *      zgodnego z definicją w CSS.
 *
 *      > Twoje obrazki powinny mieć
 *      atrybut "class"
 *      ustawiony na "image" (zgodnie z CSSem)
 *
 *
 */