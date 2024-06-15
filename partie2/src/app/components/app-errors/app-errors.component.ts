import { Component } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-app-errors',
  templateUrl: './app-errors.component.html',
  styleUrl: './app-errors.component.css'
})
export class AppErrorsComponent {
  constructor(public appState : AppStateService){

  }

  isErrorMessageObject(errorMessage: any): errorMessage is { message: string } {
    return typeof errorMessage === 'object' && errorMessage !== null && 'message' in errorMessage;
  }

}
