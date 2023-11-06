import { AbstractControl, FormGroup } from "@angular/forms";

export  class CustomValidator
{

   static ValidateName(control: AbstractControl) {

    const value = control.value as string;

    if (value?.includes('test')) {
      return { invalidName: true };
    }
    return null;
  }


  static ValidateSpecialChar(char:any) {


    return (control: AbstractControl) => {

      const value = control.value as string;

      if (value?.includes(char)) {
        return { invalidSpecialChar: true };
      }
      return null;
    }

    }

 static validatedate(control : FormGroup)
 {



     const checkinDate:any = control.get('checkinDate')?.value;
     const checkoutDate:any = control.get('checkoutDate')?.value;

     console.log(checkinDate);


     console.log(checkoutDate)

    const diffTime =  checkoutDate - checkinDate;

    console.log(diffTime)

     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

     console.log(diffDays)

     if(diffDays <= 0)
     {

      control.get('checkoutDate')?.setErrors({
        invalidDate : true
      })
      return { invalidDate : true  }

     }

     return null;

 }

}
