import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { exhaustMap, mergeMap, of, switchMap } from 'rxjs';
import { BookingService } from './booking.service';
import { ActivatedRoute } from '@angular/router';
import { CustomValidator } from './validators/custom-validators';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  bookingForm!: FormGroup;
  public roomId : string = '';

  constructor(private fb: FormBuilder, private bookingService : BookingService, private router : ActivatedRoute ) {




  }

  get guest()
  {
    return this.bookingForm.get('guests') as FormArray;
  }

  ngOnInit(): void {

   // const roomId =  this.router.paramMap.get('roomiEd');

    this.router.paramMap.subscribe(paramMap => {

        this.roomId = paramMap.get('roomid') as string;


    });

    this.bookingForm = this.fb.group({
      // roomId: new FormControl({value  : '2', disabled: true}),

      roomId: [{

        value  :  this.roomId,
        disabled : true
    },
     {

      validators : [Validators.required]}

     ],
      guestEmail: ['',
      {
        updateOn : 'blur',
        validators : [Validators.required, Validators.email]

      }
      ],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: ['',
    {

      updateOn : 'blur',
    }
     ],
      guestName: ['', [Validators.required, Validators.minLength(5), CustomValidator.ValidateName,
      CustomValidator.ValidateSpecialChar('*')
      ]],
      address : this.fb.group({
        addressLine1 : [''],
        addressLine2 : [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      guests: this.fb.array([

         this.fb.group({
          guestName: [''],
          age : ['']
         })


      ]),
      guestList: [],
      tnc : new FormControl(false, [Validators.requiredTrue])
    },
    {
      updateOn : 'blur',
      validators : CustomValidator.validatedate
    }
    );

    this.getBookingData();

  //   this.bookingForm.valueChanges.subscribe((data) => {
  //     console.log(data)

  //  })


  // merge Operator -> it will call  request as per the input

  // this.bookingForm.valueChanges.pipe(

  //   mergeMap( (data:any) => this.bookingService.bookRoom(data)))
  //  .subscribe((data:any) => console.log(data));



 // Switch Operator -> it will call cancel previous request and call new request

// this.bookingForm.valueChanges.pipe(
//    switchMap(data => this.bookingService.bookRoom(data))

// ).subscribe(data => console.log(data))


 // exhaust Operator -> it will call once previous request is completed

 this.bookingForm.valueChanges.pipe(
  exhaustMap(data => this.bookingService.bookRoom(data))

).subscribe(data => console.log(data))






    // let srcObservable= of(1,2,3,4)
    // let innerObservable= of('A','B','C','D')

    // srcObservable.pipe(
    //   exhaustMap( val => {
    //     console.log('Source value '+val)
    //     console.log('starting new observable')
    //     return innerObservable
    //   })
    // )
    // .subscribe(ret=> {
    //   console.log('Recd ' + ret);
    // })



  }


  addBooking()
  {
   console.log(this.bookingForm.value);
   console.log(this.bookingForm.getRawValue());
   this.bookingForm.reset()
  }

  getBookingData()
  {
    this.bookingForm.patchValue({

      guestEmail: 'test@gmail.com',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address : {
        addressLine1 : '',
        addressLine2 : '',
        city: '',
        state:'',
        country: '',
        zipCode: '',
      },
      guests: [{
        guestName : 'john',
        age : '22'
      }],
      guestList: [],
      tnc : false
    });
  }

  addGuest()
  {
    console.log(this.addGuest)
    this.guest.push(this.fb.group({
      guestName: [''],
      age : ['']
     })
)
  }


  addPassport()
  {
    this.bookingForm.addControl('passport', new FormControl(''))
  }

  deletePassport()
  {
    if(this.bookingForm.get('passport')){

      this.bookingForm.removeControl('passport')
    }

  }

  removeGuest(i:number)
  {

  this.guest.removeAt(i)
  }



}
