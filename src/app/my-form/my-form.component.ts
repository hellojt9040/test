import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  user: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.buildForm()
  }

  onSubmit() {
    if(this.user.get('yourSelf').invalid){
      document.getElementById("collapse1").click()
      this.user.markAllAsTouched();
    }

    if(this.user.get('contact').invalid){
        document.getElementById("collapse2").click()
        this.user.markAllAsTouched();
    }

    if(this.user.get('temp1').invalid){
        document.getElementById("collapse3").click()
        this.user.markAllAsTouched();
    }

    if(this.user.get('temp2').invalid){
        document.getElementById("collapse4").click()
        this.user.markAllAsTouched();
    }

    if(this.user.get('temp3').invalid){
        document.getElementById("collapse5").click()
        this.user.markAllAsTouched();
    }

    if(this.user.get('temp4').invalid){
        document.getElementById("collapse6").click()
        this.user.markAllAsTouched();
    }

    if(!this.user.invalid)
      console.log('now we can make a request !!')
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
