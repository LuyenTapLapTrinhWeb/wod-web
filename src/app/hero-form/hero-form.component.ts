import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
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
      firstname: '',
      lastname: '',
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
}
