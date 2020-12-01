import { AlunoService } from './../services/aluno.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public tituloAluno = 'Alunos';
  public alunoSelected: Aluno = new Aluno();
  public modalRef: BsModalRef = new BsModalRef;

  alunoForm = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    telefone: new FormControl('')
  });

  public alunos: Aluno[] = [];

  constructor(private fb: FormBuilder, 
              private modalService: BsModalService,
              private alunoServico: AlunoService) {
    this.createForm();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  createForm() {
    this.alunoForm = this.fb.group({
      id: [''],
      nome: [''],
      sobrenome: [''],
      telefone: ['']
    });
  }

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos() {
    this.alunoServico.obterTodos().subscribe(
      (resultado: Aluno[]) => {
        this.alunos = resultado;
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelected = aluno;
    this.alunoForm.patchValue(aluno);
  }

  novoAluno() {
    this.alunoSelected = new Aluno();
    this.alunoForm.patchValue(this.alunoSelected);
  }

  salvarAluno(aluno: Aluno) {
    this.alunoServico.salvar(aluno).subscribe(
      (resultado: any) => {
        console.log(resultado);
        this.alunoSelected = resultado;
        this.carregarAlunos();
      },
      (erro: any) => {
        console.log(erro);
      }
    )
  }

  onSubmit() {
    this.salvarAluno(this.alunoForm.value);
  }

  voltar() {
    this.alunoSelected = new Aluno();
  }

}
