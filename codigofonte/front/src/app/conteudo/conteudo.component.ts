import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, Inject, OnInit} from '@angular/core';
import {Router, NavigationStart, ActivatedRoute} from '@angular/router';
import {ConteudoService} from './conteudo.service';

declare var $: any;
declare var swal: any;

@Component({
  selector: 'app-conteudo-component',
  moduleId: module.id,
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.style.css']
})

export class ConteudoComponent implements OnInit {

  constructor(@Inject(Router) public router: Router) {

  }

  ngOnInit() {
  }

  public alterarPerfil(): void {
    this.router.navigate(['/cadastrar-usuario', JSON.parse(localStorage.getItem('id_usuario'))]);
  }

  public sair(): void {
    swal({
      title: 'Você tem certeza?',
      text: 'Você será desconectado do sistema',
      type: 'warning',
      showCancelButton: true,
      confirmButtonClass: 'btn-danger',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      cancelButtonClass: 'btn-light',
      closeOnConfirm: true
    }, () => {
      this.router.navigate(['/login']);
    });

  }
}
