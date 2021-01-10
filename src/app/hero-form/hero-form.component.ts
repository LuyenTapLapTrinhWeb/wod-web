import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  email: FormControl;
  name: FormControl;
  alterEgo: FormControl;
  heroForm: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder) { this.createForm(); }
  // tslint:disable-next-line:typedef
  createForm() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.name = new FormControl(this.model.name, [Validators.required, Validators.maxLength(10)]);
    this.alterEgo = new FormControl(this.model.name, [Validators.required, Validators.maxLength(10)]);
    this.heroForm = this.fb.group({
      name: this.name,
      email: this.email,
      alterEgo: this.alterEgo,
      power: 'Really Smart',
      message: '',
      agree: false
    });
  }

  ngOnInit(): void {
    const myHero = new Hero(42, 'SkyDog',
      'Fetch any object at any distance',
      'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
  }

  // tslint:disable-next-line:typedef
  onSubmit() { this.submitted = true; this.model = this.heroForm.value; }

  // TODO: Remove this when we're done
  // tslint:disable-next-line:typedef
  get diagnostic() { return JSON.stringify(this.model); }

  // tslint:disable-next-line:typedef
  newHero() {
    this.model = new Hero(42, '', '');
  }
  // tslint:disable-next-line:typedef
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
