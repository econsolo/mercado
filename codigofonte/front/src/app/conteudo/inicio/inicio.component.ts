import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit, Inject} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {InicioService} from './inicio.service';
import {Produto} from '../../model/produto';
import {Usuario} from '../../model/usuario';

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
  public carrinho: Produto[] = [];
  public usuario: Usuario = new Usuario();
  public carrinhoFormatado: Produto[] = [];

  constructor(@Inject(Router) private router: Router,
              @Inject(InicioService) private inicioService: InicioService) {
  }

  ngOnInit() {
    this.getProdutos();
    this.getUsuario();
  }

  private getUsuario(): void {
    this.usuario.id = '1';
  }

  private getProdutos(): void {
    this.inicioService.getProdutos().subscribe(data => {
      this.produtos = data;
    });
  }

  public adicionarAoCarrinho(produto): void {
    if (produto.quantidade >= 1) {
      this.carrinho.push(produto);
      produto.quantidade -= 1;
    }
  }

  public removerDoCarrinho(produto): void {
    const index = this.carrinho.indexOf(produto);
    if (index > -1) {
      this.carrinho.splice(index, 1);
      produto.quantidade += 1;
    }
  }

  public calcularQuantidade(produto): number {
    return this.carrinho.filter(c => c.id === produto.id).length;
  }

  public podeAdicionarNoCarrinho(produto): boolean {
    return produto.quantidade >= 1;
  }

  public podeRemoverDoCarrinho(produto): boolean {
    return this.carrinho.indexOf(produto) > -1;
  }

  public abrirModal(): void {
    this.carrinhoFormatado = this.formatarCarrinho(this.carrinho);
    $('#finalizarVendaModal').modal('show');
  }

  public finalizarVenda(): void {
    $('#finalizarVendaModal').modal('hide');
    const obj = {
      produtos: this.carrinho,
      usuario: this.usuario
    };
    this.inicioService.vender(obj).subscribe(() => {

    });
  }

  public formatarCarrinho(carrinho) {
    const copy = carrinho.slice(0);
    const novoCarrinho = [];

    for (let i = 0; i < carrinho.length; i++) {

      let contador = 0;
      for (let w = 0; w < copy.length; w++) {
        if (carrinho[i] === copy[w]) {
          contador++;
          delete copy[w];
        }
      }

      if (contador > 0) {
        const obj = new Produto();
        Object.assign(obj, carrinho[i]);
        obj.quantidade = contador;
        obj.valor_total = obj.valor * contador;
        novoCarrinho.push(obj);
      }
    }
    return novoCarrinho;
  }
}
