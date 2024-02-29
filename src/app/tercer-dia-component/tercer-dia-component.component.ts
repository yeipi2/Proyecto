import { Component } from '@angular/core';
import { ExampleService } from '../services/example.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { response } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tercer-dia-component',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './tercer-dia-component.component.html',
  styleUrl: './tercer-dia-component.component.scss'
})
export class TercerDiaComponentComponent {
  name = ''
  user:any = []
  constructor(public example: ExampleService){

  }

  ngOnInit() {
  
    this.example.obtenerlista().subscribe(resp =>{
      console.log(resp);
      this.user =resp;

    })
  }
  editarTexto(text:string){
    console.log(text)
    return text;
  }
  

}