import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit, Inject} from '@angular/core';
import {Router, NavigationStart, ActivatedRoute} from '@angular/router';
import {CadastrarProdutoService} from './cadastrar-produto.service';
import {Produto} from '../../model/produto';
import {CustomValidators} from 'ng2-validation';

declare var $: any;
declare var UIkit: any;

@Component({
  selector: 'app-cadastrar-produto-component',
  moduleId: module.id,
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.style.css']
})

export class CadastrarProdutoComponent implements OnInit {

  public produto: Produto;
  public formCadastro: FormGroup;

  constructor(@Inject(Router) private router: Router,
              @Inject(ActivatedRoute) private route: ActivatedRoute,
              @Inject(FormBuilder) private formBuilder: FormBuilder,
              @Inject(CadastrarProdutoService) private cadastrarProdutoService: CadastrarProdutoService) {

    this.produto = new Produto();

    this.formCadastro = formBuilder.group({
      id: [this.produto.id, []],
      nome: [this.produto.nome, [
        Validators.required,
        Validators.maxLength(80)
      ]],
      quantidade: [this.produto.quantidade, [
        Validators.required,
        Validators.maxLength(8),
        CustomValidators.number
      ]],
      id_unidade: [this.produto.id_unidade, [
        Validators.required
      ]],
      valor: [this.produto.valor, [
        Validators.required,
        Validators.maxLength(8),
        CustomValidators.number
      ]],
      valor_total: [{value: this.produto.valor_total, disabled: true}, [
        Validators.required
      ]]
    });

    this.calcularValorTotal();
  }

  private calcularValorTotal() {
    this.formCadastro.get('quantidade').valueChanges.subscribe(quantidade => {
      if (this.produto.valor && quantidade) {
        this.produto.valor_total = quantidade * this.produto.valor;
      } else {
        this.produto.valor_total = 0.0;
      }
    });
    this.formCadastro.get('valor').valueChanges.subscribe(valorUnitario => {
      if (valorUnitario && this.produto.quantidade) {
        this.produto.valor_total = this.produto.quantidade * valorUnitario;
      } else {
        this.produto.valor_total = 0.0;
      }
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.getProdutoPorId(id);
      }
    });
  }

  private getProdutoPorId(id): void {
    this.cadastrarProdutoService.getProdutoPorId(id).subscribe(data => {
      this.produto = data;
    });
  }

  private marcarComoTouched(): void {
    Object.keys(this.formCadastro.controls).forEach(key => {
      this.formCadastro.get(key).markAsTouched();
    });
  }

  public salvar(): void {
    if (this.formCadastro.invalid) {
      this.marcarComoTouched();
      return;
    }

    // this.cadastrarProdutoService.salvar
  }

}
