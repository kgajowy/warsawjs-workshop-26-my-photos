# warsawjs-workshop-26-my-photos

# Agenda

## Wstawianie skryptów do HTML /console.log/

1. Co to jest HTML.
2. Tworzymy index.html - znaczniki `head`, `meta` (google, wyszukiwanie), `body` (content ‘na sztywno’).
3. Dodajemy skrypt JS - tworzenie pliku, `console.log`.
4. Znaczniki HTML - `div`, `p`, `ul` > `li`.

## Typy danych (liczba, napis, wartość logiczna, nic/undefined, tablica)

1. Zmienne (var) - deklaracja, przypisywanie wartości liczbowej, wyświetlanie.
2. Operacje na zmiennej liczbowej (+, +=).
3. Napis i operacje (+, tworzenie nowego napisu, zmiana istniejącego, substring, includes, indexOf).
4. Wartość logiczna (operatory && || - opowiedzieć tylko, że możemy łączyć "matematycznie" i używać do warunkowego wykonywania kodu).
5. Typ danych - skąd JS wie, co jest napisem, a co liczbą? Nie zawsze wie **dobrze** - przykład z dodawaniem napisu i cyfry. Niejawna konwersja. (tylko wspomieć, bez szczegółów i tablicy porównań ;)
6. Tablica - elementy tablicy, `length`. Dodawanie elementów.
7. Tablica - napis jako tablica znaków. Split & join, przykład również na cyfrach i mieszanych elementach ([1, 'abc', true]) - znowu niejawna konwersja.
1. Typy specjalnie - `null` i `undefined`
8. **Zadanie projektowe** Stwórzmy tablicę ulubionych słów z języka polskiego (albo książek).

## Pętle

1. Standardowa pętla `for` (var i = 0 ; i ... ; ++i ) { ... } - wypisujemy w konsoli naszą tablicę.
2. Pętla `while` - różnice w zastosowaniu. Pętla `for` jako `while`.
3. Kiedy stosować którą? Czytelność kodu, oczekiwanie na warunek *kontra* wykonywanie akcji na każdym elemencie tablicy.

## HTML i drzewo DOM
1. Co to jest DOM - przykład z devToolsami, hierarchia, struktura, "rodzic" -< "dzieci".
2. Obiekt ‘window’ i jego cel, podstawowe API.
3. Pobieranie Elementu drzewa (atrybuty znacznika: class, id oraz inne).
4. Zmiana zawartości Elementu (`innerHTML`).
5. Dodawanie Elementu do "rodzica".
6. **Zadanie projektowe** Wyświetlenie na stronie tablicy elementów z wybranej kolekcji.

## Instrukcje warunkowe
1. `If`, `else`, `else if`.
1. **Zadanie projektowe** Pogrubienie wybranych elementów tablicy:
   1. Instrukcja `if` w pętli dodającej elementy z kolekcji.
   1. Warunek - może być ilość znaków, napis rozpoczynający się od wybranych liter, zawierający znaki xyz...
   1. "Opakowanie" w znacznik `<b>...</b>`.

## Funkcje
1. Co to jest funkcja - powielanie funkcjonalności kodu.
2. Argumenty funkcji (wspomnienie o `arguments` i CLI).
3. **Zadanie projektowe** "Opakowanie" dotychczasowej funkcjonalności w funkcję:
   1. Napisz nową funkcję.
   2. Pierwszym argumentem tej funkcji powinien być identyfikator.
   3. Drugi argument to tablica napisów.
   4. Dopisz nowy znacznik z innym identyfikatorem.
   5. Dodaj tablicę z kolekcją osoby po Twojej prawej stronie.
   6. Wywołaj dwukrotnie funkcję dla par argumentów.
  
## Pole tekstowe
1. Znacznik `input`.
2. Pobieranie zawartości. (console.log w devTools)

## Przycisk
1. Znacznik `button`
2. Atrybut `onclick`
3. Atrybut `onclick` w kodzie JS.
4. **Zadanie projektowe** Dodawanie nowego elementu kolekcji:
   1. Umieść na stronie przycisk z napisem "Dodaj".
   2. Akcja `onclick` powinna wywoływać nową funkcję `addToCollection`.
   3. Funkcja `addToCollection` powinna dodawać treść z pola tekstowego (`input`) do tablicy.
  
# DLC - Dla chętnych / jak zostanie czas?

## Struktura danych (obiekt)
1. Obiekt jako zbiór kluczy (napisów) i wartości - jak książka telefoniczna

## Losowe zagadnienia :)
1. Funkcje - wartości zwracane

# Co dalej?
1. Zapoznanie się z słowami kluczowymi `let` oraz `const`
2. Nowe Funkcje `ES6` oraz `ES5` (nowy standard)
3. Podstawy `CSS`
4. Mechanizm `Promise`
5. Koncepcje struktury projektu
6. `LocalStorage`
7. ...


