import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'play-time-project';
  studentName: string = "";
  className: string = "";
  students: any = [];

  onAddNewStudentToClass(){
    this.students.push({studentName: this.studentName, className : this.className })
  }
}
