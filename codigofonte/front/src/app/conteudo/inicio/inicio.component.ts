import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit, Inject} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {InicioService} from './inicio.service';
import {Produto} from '../../model/produto';

declare var $: any;
declare var UIkit: any;

@Component({
  selector: 'app-inicio-component',
  moduleId: module.id,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.style.css']
})

export class InicioComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor(@Inject(Router) private router: Router,
              @Inject(InicioService) private inicioService: InicioService) {
  }

  ngOnInit() {
    //this.getProdutos();
  }

  private getProdutos(): void {
    this.inicioService.getProdutos().subscribe(data => {
      this.produtos = data;
      console.log(this.produtos);
    });
  }

  public adicionarAoCarrinho(produto): void {

  }

  public removerDoCarrinho(produto): void {

  }

}
