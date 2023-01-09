import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Batman', 'Hulk', 'Capitan América', 'Cat Woman'];
  heroeEliminado: string = '';
  /* hEliminado: boolean = false; */

  borrarHeroe() {
    this.heroeEliminado = this.heroes.shift() || '';
    /* this.hEliminado = true;
    if (this.heroes.length <= 0) {
      this.hEliminado = false;
    } */
  }

}
