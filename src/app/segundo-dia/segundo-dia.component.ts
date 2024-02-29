import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-segundo-dia',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './segundo-dia.component.html',
  styleUrl: './segundo-dia.component.scss'
})
export class SegundoDiaComponent {

  variable= ''
  btn_class= 'btn btn-success'
  formularioUser:FormGroup = new FormGroup({
    name: new FormControl(''),
    descripcion: new FormControl('')
   })



   name = ''
   descripcion= ''
   
  user = [ {
    name:'luis',
    desipcion: 'No viene',
  },
  {
    name:'juan',
    desipcion: 'es malo',
  },
  {
    name:'Alex',
    desipcion: 'no se quien es',
  }
  ,
  {
    name:'johan',
    desipcion: 'Funko',
  },
  {
    name:'angel',
    desipcion: 'tendencias homosexuales',
  }
]
 
  constructor(){
    
  }

  ngOnInit() {
  
   
  }

  ngDoCheck(): void {
   
  }
 ngOnDestroy() {
  
 }

clickButton(text:string){

  console.log("el valor que recibe es --->",text)
  this.variable= text

}
summitfrom(){
  this.formularioUser.controls['name'].disable()
  console.log();
  /*console.log("el nombre es :",this.name,"la descripcion es :",this.descripcion)*/

}

}
