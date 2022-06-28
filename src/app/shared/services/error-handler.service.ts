import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthHelper } from '@iss/ng-auth-center';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  str_severity = 'error';

  constructor(
    private messageService: MessageService,
    private authHelper: AuthHelper
  ) {}

  handleError(error: HttpErrorResponse) {
    console.error(error);

    switch (error.status) {
      case 422:
        this.messageService.add({severity: this.str_severity, summary: 'Ошибка загрузки данных с сервера', detail: error.error.error_description});

        break;
      case 403:
        this.messageService.add({severity: this.str_severity, summary: 'Доступ запрещён'});
        this.authHelper.logout();

        break;
      case 404:
        this.messageService.add({severity: this.str_severity, summary: 'Данные не найдены'});

        break;
      case 500:
        this.messageService.add({severity: this.str_severity, summary: 'Сервер временно недоступен'});

        break;
      default:
        this.messageService.add({severity: this.str_severity, summary: 'Сервер временно недоступен', detail: error.statusText});

        break;
    }

  }
}
