export class Ksiazka {
  tytul: string;
  autor: string;
  rokWydania: number;
  liczbaStron: number;
  cenaKsiazki: number;

  constructor(tytul: string, autor: string, rokWydania: number, liczbaStron: number, cenaKsiazki: number){
    this.tytul = tytul;
    this.autor = autor;
    this.rokWydania = rokWydania;
    this.liczbaStron = liczbaStron;
    this.cenaKsiazki = cenaKsiazki;
  }
}
