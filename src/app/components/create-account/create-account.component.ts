import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ConstantsService } from '../../services/constants.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(private fb: FormBuilder, public constantsService: ConstantsService) { }

  createAccountForm = this.fb.group({
    iama: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', Validators.required]
  });
  
  ngOnInit() {
    
  }
  
  createAccount() {
    
  }
}
