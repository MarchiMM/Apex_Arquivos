import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';

  public alunos = [
    { nome: 'Diego', telefone: '99540608', cpf: '11111111111' },
    { nome: 'Matheus', telefone: '99540605', cpf: '11111111112' },
    { nome: 'Felipe', telefone: '99540604', cpf: '11111111113' },
    { nome: 'Marcela', telefone: '99540603', cpf: '11111111114' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
