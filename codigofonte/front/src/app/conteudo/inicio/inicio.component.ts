import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit, Inject} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {InicioService} from './inicio.service';

declare var $: any;
declare var UIkit: any;

@Component({
  selector: 'app-inicio-component',
  moduleId: module.id,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.style.css']
})

export class InicioComponent implements OnInit {

  constructor(@Inject(Router) private router: Router) {
  }

  ngOnInit() {
  }


}
