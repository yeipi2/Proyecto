import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})
export class PrimerDiaComponent {
  @Input() ejemplo:string =''
  @Input() Usuario:number =0
  
  
  title = 'Pagina Principal';
card ={
  title : 'Te Ganste Un PS5',
  descripcion : 'Me llena de alegría y emoción por la obtención de una PlayStation 5. ',

}

vent ={
 title : 'JAJAJAJAJ',
 boton1 : 'Virus',
 boton2 : 'Cancelar(virus)',
}


}