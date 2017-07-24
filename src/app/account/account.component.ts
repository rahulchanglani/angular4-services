import { AccountsService } from './../accounts.service';
import { LoggingService } from './../logging.service';
import { Component, EventEmitter, Input } from '@angular/core';  // Output - remove this

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}


  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // this.loggingService.logStatusChange(status);

    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
  }
}
