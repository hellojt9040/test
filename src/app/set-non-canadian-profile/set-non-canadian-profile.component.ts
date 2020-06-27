import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'set-non-canadian-profile',
  templateUrl: './set-non-canadian-profile.component.html',
  styleUrls: ['./set-non-canadian-profile.component.css']
})
export class SetNonCanadianProfileComponent implements OnInit {
  user: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.buildForm()
  }

  private buildForm() {
    this.user = this.fb.group({
      yourSelf: this.fb.group({
        fullName: ["", Validators.required],
        motherName: ["",],
        dob: ["", Validators.required],
      }),
      contact: this.fb.group({
        add1: ["", Validators.required],
        add2: ["",],
        state: ["", Validators.required],
        mob: ["", Validators.required],
      }),
      temp1: this.fb.group({
        add1: ["", Validators.required],
        add2: ["",],
        state: ["", Validators.required],
        mob: ["", Validators.required],
      }),
      temp2: this.fb.group({
        add1: ["", Validators.required],
        add2: ["",],
        state: ["", Validators.required],
        mob: ["", Validators.required],
      }),
      temp3: this.fb.group({
        add1: ["", Validators.required],
        add2: ["",],
        state: ["", Validators.required],
        mob: ["", Validators.required],
      }),
      temp4: this.fb.group({
        add1: ["", Validators.required],
        add2: ["",],
        state: ["", Validators.required],
        mob: ["", Validators.required],
      }),
    })
  }

}
