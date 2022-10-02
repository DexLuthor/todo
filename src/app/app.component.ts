import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeService } from './services/joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  todos = [
    { id: 1, content: 'clean up the room', done: false },
    { id: 2, content: 'feed the bird', done: false },
    { id: 3, content: 'stalk on girls', done: true },
    { id: 4, content: 'lorem ipsum dolor sit amet hello world', done: false },
  ];

  joke: string = ""

  constructor(private jokeService: JokeService) {
  }

  newTodoChanged(todo: string) {
    this.todos.unshift({ id: 5, content: todo, done: false })
  }

  onTodoClicked(id: number) {
    const todo = this.todos.find(todo => todo.id === id)

    todo!.done = !todo?.done;
  }

  fetchJoke() {
    this.jokeService.fetchJoke()
      .subscribe(result => this.joke = result.joke)
  }
}
