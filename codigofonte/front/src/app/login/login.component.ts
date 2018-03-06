import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit, Inject} from '@angular/core';
import {Router, NavigationStart, ActivatedRoute} from '@angular/router';
import {CustomValidators} from 'ng2-validation';
import {Usuario} from '../model/usuario';
import {LoginService} from './login.service';

declare var $: any;
declare var UIkit: any;
declare var swal: any;

@Component({
  selector: 'app-login-component',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.style.css']
})

export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public formLogin: FormGroup;

  constructor(@Inject(Router) private router: Router,
              @Inject(ActivatedRoute) private route: ActivatedRoute,
              @Inject(FormBuilder) private formBuilder: FormBuilder,
              @Inject(LoginService) private loginService: LoginService) {

    this.usuario = new Usuario();

    this.formLogin = formBuilder.group({
      id: [this.usuario.id, []],
      login: [this.usuario.login, [
        Validators.required,
        Validators.maxLength(40)
      ]],
      senha: [this.usuario.senha, [
        Validators.required,
        Validators.maxLength(40)
      ]]
    });

  }

  ngOnInit() {
    localStorage.removeItem('id_usuario');
  }

  public irParaCadastrar() {
    this.router.navigate(['/cadastrar-usuario']);
  }

  public entrar(): void {
    if (this.formLogin.invalid) {
      this.marcarComoTouched();
      return;
    }

    this.loginService.entrar(this.usuario).subscribe(data => {
      if (data) {
        this.usuario = data;
        localStorage.setItem('id_usuario', JSON.stringify(data.id));
        swal({
          title: 'Sucesso!',
          text: 'Entrando no sistema...',
          type: 'success'
        });
        setTimeout(() => {
          this.router.navigate(['/inicio']);
        }, 2000);
      }
    });

  }

  private marcarComoTouched(): void {
    Object.keys(this.formLogin.controls).forEach(key => {
      this.formLogin.get(key).markAsTouched();
    });
  }

}
