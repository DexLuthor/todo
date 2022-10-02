import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeResponse } from '../models/JokeResponse';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private httpClient: HttpClient) { }

  fetchJoke(): Observable<JokeResponse>  {
    const reqConfig = {
      headers: {
        'Accept': 'application/json'
      }
    }

    return this.httpClient.get<JokeResponse>('https://icanhazdadjoke.com/', reqConfig)
  }
}
