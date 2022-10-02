import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.css']
})
export class AddNewTodoComponent {

  inputValue: string = ""
  @Output() newTodoCreated: EventEmitter<string> = new EventEmitter<string>();

  onAddButtonClicked() {
    const value = this.inputValue.trim()
    if (value.length !== 0) {
      this.newTodoCreated.emit(value)
    }
  }

  onInputValueChanged(event: any) {
    this.inputValue = event.target.value
  }

}
