import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RoomsService } from './services/rooms.service';
import { ConfigService } from '../services/config.service';
import { app_service_config } from '../AppConfig/appconfig.service';
import { routeConfigToken } from '../services/routeConfig.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, FormsModule, ReactiveFormsModule],

      declarations: [ RoomsComponent ],

      providers : [RoomsService, ConfigService,
      {
        provide :app_service_config,
        useValue : {apiEndPoint : "http://localhost:3000"}
      },
      {
        provide :routeConfigToken,
        useValue : {title : "rooms"}
      }


    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should toggle', () => {
    component.hideRooms  = false;
    component.toggle();
    expect(component.hideRooms).toBe(true)
  });
});
