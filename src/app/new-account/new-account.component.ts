import { LoggingService } from './../logging.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });


    // !!! WRONG way to use service !!!! Don't create instatnces manually ... 
    // Use dependency injector instead & add in providers property of component
    /*
    const service = new LoggingService();
    service.logStatusChange(accountStatus);
    */
    this.loggingService.logStatusChange(accountStatus);

  }
}