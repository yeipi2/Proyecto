import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators,FormBuilder } from '@angular/forms';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-proyecto-final',
  standalone: true,
  imports: [GoogleMap,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './proyecto-final.component.html',
  styleUrl: './proyecto-final.component.scss'
})
export class ProyectoFinalComponent {
  variable = ''
  user:any = []  
  formulariouser: FormGroup;
  name: string = '';
  description: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.formulariouser = this.formBuilder.group({
      name1: [''],
      description1: ['']
    });
  }

  guardarUsuario() {
    this.name = this.formulariouser.get('name')?.value;
    this.description = this.formulariouser.get('description')?.value;
    // Aquí podrías guardar los datos en tu backend si es necesario
    // Luego, limpiar los campos y cerrar el modal
    this.formulariouser.reset();
    document.getElementById('exampleModal')?.classList.remove('show');
    document.body.classList.remove('modal-open');
    const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
    modalBackdrop.parentNode?.removeChild(modalBackdrop);
  }


  clickButton(text: string) {
    this.variable = text
  }


  submitForm() {
    console.log(this.formulariouser.value)










    
 }
} 


  
