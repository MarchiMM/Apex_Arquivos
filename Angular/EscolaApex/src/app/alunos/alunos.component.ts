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

  public alunos = [
    { id: 1, nome: 'Diego', sobrenome: 'Cugiki', telefone: '99540608' },
    { id: 2, nome: 'Matheus', sobrenome: 'Marchi', telefone: '99540605' },
    { id: 3, nome: 'Felipe', sobrenome: 'Sanches', telefone: '99540604' },
    { id: 4, nome: 'Marcela', sobrenome: 'Wan-Dall', telefone: '99540603' }
  ];

  constructor(private fb: FormBuilder, 
              private modalService: BsModalService) {
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
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelected = aluno;
    this.alunoForm.patchValue(aluno);
  }

  onSubmit() {
    console.log(this.alunoForm.value);
  }

  voltar() {
    this.alunoSelected = new Aluno();
  }

}
