import { Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hotel';
  @ViewChild('user', {read : ViewContainerRef}) vcr !:ViewContainerRef;

  @ViewChild('name') name !: ElementRef;


  constructor(@Inject(localStorageToken) private localStorage :any,  private initservice : InitService, private configService : ConfigService,

  private router : Router) {

    console.log("init", initservice.config)

  }
  ngAfterViewInit()
  {
    //  const componentRef = this.vcr.createComponent(RoomsComponent);

    //  componentRef.instance.addRooms()

    //  this.name.nativeElement.innerHTML = "hello"

    //  console.log()
  }

  ngOnInit()
  {

    // this.router.events.subscribe((event) => {
    //   console.log(event)
    // })


    this.router.events.pipe(filter((event:any) => event instanceof NavigationStart)).subscribe((event) => {

      console.log("Navigation Started")

    })

    this.router.events.pipe(filter((event:any) => event instanceof NavigationEnd)).subscribe((event) => {

      console.log("Navigation Ended")

    })



      this.localStorage.setItem("name", "HMR");
  }
}
