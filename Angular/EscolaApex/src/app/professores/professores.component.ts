import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';

  public professores = [
    { nome: 'Diego', telefone: '99540608', cpf: '11111111111' },
    { nome: 'Ralf', telefone: '99540607', cpf: '11111111115' },
    { nome: 'Luiz', telefone: '99540606', cpf: '11111111116' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
