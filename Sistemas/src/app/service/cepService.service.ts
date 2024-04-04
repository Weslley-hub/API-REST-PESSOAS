import { Injectable } from "@angular/core";
import axios, { AxiosInstance } from "axios";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
  })
  export class CepService {
    private apiUrl = 'https://viacep.com.br/ws';
    private axiosInstance: AxiosInstance;
  
    constructor() {
      this.axiosInstance = axios.create();
    }

    getAddressByCep(cep: string): Observable<any> {
        const url = `${this.apiUrl}/${cep}/json`;
        return new Observable((observer) => {
            this.axiosInstance.get(url)
                .then(response => observer.next(response.data))
                .catch(error => observer.error(error))
                .finally(() => observer.complete());
        });
    }

}