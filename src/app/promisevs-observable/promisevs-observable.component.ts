import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-promisevs-observable',
  templateUrl: './promisevs-observable.component.html',
  styleUrls: ['./promisevs-observable.component.scss']
})
export class PromisevsObservableComponent {
  first_subscriber_observable: number = 0;
  second_subscriber_observable: number= 0;
  thrid_subscriber_observable: number =0;
  first_subscriber_subject: any;
  second_subscriber_subject: any;
  third_subscriber_subject: any;

  ngOnInit()
  {
   
    // const promise =  new Promise( res => {
    //   res("Hello Piyush");
    //   res("Hello Vivek");
    //   res("Hello Rajesh");
    // })

    // promise.then(value => console.log("promise", value))

    // const observable = new Observable(res => {
    //   res.next("basha");
    //   res.next("Khan");
    //   res.next("Faizal")
    // })

    // observable.subscribe(value => {
    //   console.log("sub", value)
    // })











    let observable = new Observable<number>(ele =>
      ele.next(Math.random()))
    
    //first subscriber
    observable.subscribe(result => {
      this.first_subscriber_observable = result;
      console.log(result)
    })
    
    //second subscriber
    observable.subscribe(result => {
      this.second_subscriber_observable = result;
      console.log(result)
    })
    
    //third subscriber
    observable.subscribe(result => {
      this.thrid_subscriber_observable = result;
      console.log(result)
    })










    let subject = new Subject<number>()

//first subscriber
subject.subscribe(results => {
  this.first_subscriber_subject = results;
  console.log(results)
})

//second subscriber
subject.subscribe(result => {
  this.second_subscriber_subject = result;
  console.log(result)
})

//third subscriber
subject.subscribe(result => {
  this.third_subscriber_subject = result;
  console.log(result)
})

subject.next(Math.random())

  }












}
