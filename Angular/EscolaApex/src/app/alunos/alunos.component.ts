import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public tituloAluno = 'Alunos';
  public alunoSelected: Aluno = new Aluno();

  public alunos = [
    { id: 1, nome: 'Diego', sobrenome: 'Cugiki', telefone: '99540608' },
    { id: 2, nome: 'Matheus', sobrenome: 'Marchi', telefone: '99540605' },
    { id: 3, nome: 'Felipe', sobrenome: 'Sanches', telefone: '99540604' },
    { id: 4, nome: 'Marcela', sobrenome: 'Wan-Dall', telefone: '99540603' }
  ];

  alunoSelect(aluno: Aluno) {
    this.alunoSelected = aluno;
  }

  voltar() {
    this.alunoSelected = new Aluno();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
