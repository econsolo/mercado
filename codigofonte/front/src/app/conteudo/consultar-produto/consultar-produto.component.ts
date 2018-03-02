import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit, Inject} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {ConsultarProdutoService} from './consultar-produto.service';
import {Produto} from '../../model/produto';

declare var $: any;
declare var UIkit: any;

@Component({
  selector: 'app-consultar-produto-component',
  moduleId: module.id,
  templateUrl: './consultar-produto.component.html',
  styleUrls: ['./consultar-produto.style.css']
})

export class ConsultarProdutoComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor(@Inject(Router) private router: Router,
              @Inject(ConsultarProdutoService) private consultarProdutoService: ConsultarProdutoService) {
  }

  ngOnInit() {
    //this.getProdutos();
  }

  private getProdutos(): void {
    this.consultarProdutoService.getProdutos().subscribe(data => {
      this.produtos = data;
      console.log(this.produtos);
    });
  }


}
