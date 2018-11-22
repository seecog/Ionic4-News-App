import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {
private frm : FormGroup;
  constructor(fb : FormBuilder) { 
    this.frm = fb.group({
      fnm : [null,[Validators.required,Validators.minLength(2)]],
      lnm : [null,[Validators.required]],
      email : [null,[Validators.required]],
      contact : [null,[Validators.required]]
    })
  }

  ngOnInit() {
  }

}
