import { AfterContentInit, Component, ContentChild, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterContentInit {

  @ContentChild(EmployeeComponent) empcont!: EmployeeComponent;

  ngAfterContentInit()
  {
    console.log(this.empcont);

    this.empcont.title = "Emeployee Hero"
  }

}
