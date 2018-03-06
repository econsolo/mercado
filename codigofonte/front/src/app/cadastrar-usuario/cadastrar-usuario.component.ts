import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit, Inject} from '@angular/core';
import {Router, NavigationStart, ActivatedRoute} from '@angular/router';
import {CadastrarUsuarioService} from './cadastrar-usuario.service';
import {CustomValidators} from 'ng2-validation';
import {Usuario} from '../model/usuario';

declare var $: any;
declare var UIkit: any;
declare var swal: any;

@Component({
  selector: 'app-cadastrar-usuario-component',
  moduleId: module.id,
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.style.css']
})

export class CadastrarUsuarioComponent implements OnInit {

  public usuario: Usuario;
  public formCadastro: FormGroup;

  constructor(@Inject(Router) private router: Router,
              @Inject(ActivatedRoute) private route: ActivatedRoute,
              @Inject(FormBuilder) private formBuilder: FormBuilder,
              @Inject(CadastrarUsuarioService) private cadastrarUsuarioService: CadastrarUsuarioService) {

    this.usuario = new Usuario();

    const senha = new FormControl(this.usuario.senha, [Validators.required, Validators.maxLength(40)]);
    this.formCadastro = formBuilder.group({
      id: [this.usuario.id, []],
      login: [this.usuario.login, [
        Validators.required,
        Validators.maxLength(40)
      ]],
      senha: senha,
      confirmar_senha: [this.usuario.confirmar_senha, [
        Validators.required,
        Validators.maxLength(40),
        CustomValidators.equalTo(senha)
      ]]
    });

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.getUsuarioPorId(id);
      }
    });
  }

  private getUsuarioPorId(id): void {
    this.cadastrarUsuarioService.getUsuarioPorId(id).subscribe(data => {
      this.usuario = data;
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

    if (this.usuario.id) {
      this.cadastrarUsuarioService.alterar(this.usuario.id, this.usuario).subscribe(usuario => {
        swal({
          title: 'Sucesso!',
          text: 'Usuário alterado!',
          type: 'success'
        }, () => {
          localStorage.setItem('id_usuario', JSON.stringify(usuario.id));
          this.router.navigate(['/inicio']);
        });
      });
    } else {
      this.cadastrarUsuarioService.salvar(this.usuario).subscribe((usuario) => {
        swal({
          title: 'Sucesso!',
          text: 'Novo usuario adicionado!',
          type: 'success'
        }, () => {
          localStorage.setItem('id_usuario', JSON.stringify(usuario.id));
          this.router.navigate(['/inicio']);
        });
      });
    }

  }

}
