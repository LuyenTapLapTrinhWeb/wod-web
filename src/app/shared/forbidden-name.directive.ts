import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './forbiddenNameValidator';

@Directive({
  selector: '[appForbiddenName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})
export class ForbiddenValidatorDirective implements Validators {
  @Input('appForbiddenName') forbiddenname: string;
  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenname ? forbiddenNameValidator(new RegExp(this.forbiddenname, 'i'))(control) : null;
  }
}

