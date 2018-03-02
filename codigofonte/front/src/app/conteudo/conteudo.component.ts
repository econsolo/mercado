import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, Inject, OnInit} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {ConteudoService} from './conteudo.service';

declare var $: any;

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

  public teste(): void {
    alert(this.router.url)
  }

}
