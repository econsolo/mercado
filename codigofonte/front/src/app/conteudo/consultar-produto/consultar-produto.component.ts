import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit, Inject} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {ConsultarProdutoService} from './consultar-produto.service';
import {Produto} from '../../model/produto';
import {CustomValidators} from 'ng2-validation';

declare var $: any;
declare var UIkit: any;
declare var swal: any;

@Component({
  selector: 'app-consultar-produto-component',
  moduleId: module.id,
  templateUrl: './consultar-produto.component.html',
  styleUrls: ['./consultar-produto.style.css']
})

export class ConsultarProdutoComponent implements OnInit {

  public produtos: Produto[] = [];
  public nome: string;
  public formConsulta: FormGroup;

  constructor(@Inject(Router) private router: Router,
              @Inject(FormBuilder) private formBuilder: FormBuilder,
              @Inject(ConsultarProdutoService) private consultarProdutoService: ConsultarProdutoService) {

    this.nome = '';
    this.formConsulta = formBuilder.group({
      nome: [this.nome, [
        Validators.maxLength(80)
      ]]
    });

  }

  ngOnInit() {
    this.getProdutos();
  }

  private getProdutos(): void {
    this.consultarProdutoService.getProdutos(this.nome).subscribe(data => {
      this.produtos = data;
    });
  }

  public consultar(): void {
    this.getProdutos();
  }

  public limpar(): void {
    this.nome = '';
    this.getProdutos();
  }

  public excluir(id): void {
    this.consultarProdutoService.temVinculos(id).subscribe(retorno => {

      if (!retorno) {
        swal({
          title: 'Você tem certeza?',
          text: 'O Produto será excluído',
          type: 'warning',
          showCancelButton: true,
          confirmButtonClass: 'btn-danger',
          confirmButtonText: 'Sim',
          cancelButtonText: 'Não',
          cancelButtonClass: 'btn-light',
          closeOnConfirm: false,
          showLoaderOnConfirm: true
        }, () => {
          this.consultarProdutoService.excluir(id).subscribe(() => {
            swal({
              title: 'Sucesso!',
              text: 'Produto excluído',
              type: 'success'
            }, () => {
              this.getProdutos();
            });
          });

        });
      } else {
        swal(
          'Oops...',
          'O Produto está vinculado à vendas. Não é possível excluí-lo!',
          'error'
        );
      }

    });
  }

  public irPara(rota, id): void {
    if (id) {
      this.router.navigate([rota, id]);
    } else {
      this.router.navigate([rota]);
    }
  }

}
