export class Ksiazak {
  tytul: string;
  rezyser: string;
  rokProdukcji: number;
  ocenaFilmu: number;

  constructor(tytul: string, rezyser: string, rokProdukcji: number, ocenaFilmu: number) {
    this.tytul = tytul;
    this.rezyser = rezyser;
    this.rokProdukcji = rokProdukcji;
    this.ocenaFilmu = ocenaFilmu;
  }
}
