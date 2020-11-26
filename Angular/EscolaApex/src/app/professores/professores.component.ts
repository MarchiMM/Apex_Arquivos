import { Professor } from './../models/Professor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  public tituloProfessor = 'Professores';
  public profSelected: Professor = new Professor();

  profForm = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    disciplina: new FormControl('')
  });

  public professores = [
    { id: 1, nome: 'Diego', disciplina: 'C#' },
    { id: 2, nome: 'Ralf', disciplina: 'Java' },
    { id: 3, nome: 'Luiz', disciplina: 'Angular' }
  ];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.profForm = this.fb.group({
      id: [''],
      nome: [''],
      disciplina: ['']
    })
  }

  ngOnInit(): void {
  }

  profSelect(prof: Professor) {
    this.profSelected = prof;
    this.profForm.patchValue(prof);
  }

  onSubmit() {
    console.log(this.profForm.value);
  }

  voltar() {
    this.profSelected = new Professor();
  }

}
