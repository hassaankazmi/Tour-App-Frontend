import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR,ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent,
    },
  ],
  imports: [],
  styleUrl: './input.component.css'
})


export class InputComponent implements ControlValueAccessor{
 
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() hint = '';
  @Input() id = crypto.randomUUID();

  value = '';
  disabled = false;

  public onChange!: (_: any) => void;
  public onTouched!: () => void;

  writeValue(value: any): void {
    this.value = value ?? '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
