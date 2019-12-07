import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formlogin: any;
  FormBuilder: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formlogin = this.FormBuilder.group({
      cpf: ['']
    });


  }

}
