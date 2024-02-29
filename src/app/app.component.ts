import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import { TercerDiaComponentComponent } from './tercer-dia-component/tercer-dia-component.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrimerDiaComponent,SegundoDiaComponent,TercerDiaComponentComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dinamico= 'PTO';
  numero= 3;
}
