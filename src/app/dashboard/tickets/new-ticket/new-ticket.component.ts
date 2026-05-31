import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Output,
  output,
  viewChild,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { log } from 'node:console';
import { EventEmitter } from 'node:stream';
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  /* @ViewChildren(ButtonComponent) buttons!: ElementRef<HTMLFormElement>;
    this is used when we want to consume more than 1 Template Variables of same type so we will be having an array of 
    ButtonComponent type , and this viewChild fn is added in angular 17.3
  */
 enteredTitle = '';
 enteredText = '';

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  // @Output() add = new EventEmitter<{ title: string; text: string }>();
  add = output<{ title: string; text: string }>();



  ngOnInit(): void {
      // console.log("IN INIT");
      // console.log(this.form()?.nativeElement);      
  }

  ngAfterViewInit(): void {
      // console.log("AFTER VIEW INIT");
      // console.log(this.form()?.nativeElement);
  }

  onSubmit() {
    // console.log(inputValues.title);
    // console.log(inputValues.ticketText);
    // this.form?.nativeElement.reset();
    this.add.emit({title:this.enteredTitle,text:this.enteredText});


    // this.form()?.nativeElement.reset();
    this.enteredText='';
    this.enteredTitle='';
  }
}

