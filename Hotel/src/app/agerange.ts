import { AbstractControl } from '@angular/forms';
export function Agerange  (control : AbstractControl ){
    if(control.value >= 18 && control.value<=85)
    {
        return null;
    }
    else
    { 
        return {range : true}
    }
}
