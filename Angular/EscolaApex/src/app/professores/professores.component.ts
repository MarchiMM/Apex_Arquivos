import { Professor } from './../models/Professor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  public tituloProfessor = 'Professores';
  public profSelected: Professor = new Professor();

  public professores = [
    { id: 1, nome: 'Diego', disciplina: 'C#' },
    { id: 2, nome: 'Ralf', disciplina: 'Java' },
    { id: 3, nome: 'Luiz', disciplina: 'Angular' }
  ];

  profSelect(prof: Professor) {
    this.profSelected = prof;
  }

  voltar() {
    this.profSelected = new Professor();
  }

  constructor() { }

  ngOnInit() {
  }

}
