import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
import { forbiddenNameValidator } from '../shared/forbiddenNameValidator';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  feedBackForm: FormGroup;
  feedBack: Feedback;
  contactType = ContactType;
  constructor(private fb: FormBuilder) { this.createForm(); }
  ngOnInit(): void {

  }
  createForm(): void {
    this.feedBackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(4), forbiddenNameValidator(/bob/i)]],
      lastname: ['', [Validators.required, Validators.minLength(4)]],
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: '',
    });
  }
  // tslint:disable-next-line:typedef
  onSubmit(): void {
    this.feedBack = this.feedBackForm.value;
    console.log(this.feedBack);
    this.feedBackForm.reset();
  }
  // tslint:disable-next-line:typedef
  get firstname() { return this.feedBackForm.get('firstname'); }
  // tslint:disable-next-line:typedef
  get lastname() { return this.feedBackForm.get('lastname'); }
}
