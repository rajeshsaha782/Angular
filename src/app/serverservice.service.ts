import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }

  consoleLog(args)
  {
    console.log(args);
  }
}
