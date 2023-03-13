import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent {
loginForm:FormGroup = this.formBuilder.group({
  correo: ['',[Validators.email, Validators.required]],
  contrasena: ['',[Validators.required]]
} )

constructor(
  private formBuilder: FormBuilder
) {}

Ingresar () {
  console.log(this.loginForm.value);
  console.log('controls', this.loginForm.controls);

  if (this.loginForm,invalid) {
    this.loginForm.markAllAsTouched();
    return
  }
}

campoEsValido (campo: string) {
  return (
    this.loginForm.controls[campo].errors &&
    this.loginForm.controls[campo].touched
  );
}
}
