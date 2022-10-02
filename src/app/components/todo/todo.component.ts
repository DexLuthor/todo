import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() todoProps?: { id: number, content: string, done: boolean }

  @Output() todoClicked: EventEmitter<number> = new EventEmitter<number>();

  onTodoClicked() {
    this.todoClicked.emit(this.todoProps?.id)
  }

}
