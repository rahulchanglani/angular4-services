import { AccountsService } from './../accounts.service';
import { LoggingService } from './../logging.service';
import { Component, EventEmitter } from '@angular/core'; // Output - remove, instead inject service

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });

    this.accountsService.addAccount(accountName, accountStatus);



    // !!! WRONG way to use service !!!! Don't create instatnces manually ... 
    // Use dependency injector instead & add in providers property of component
    /*
    const service = new LoggingService();
    service.logStatusChange(accountStatus);
    */


    // this.loggingService.logStatusChange(accountStatus);

  }
}
