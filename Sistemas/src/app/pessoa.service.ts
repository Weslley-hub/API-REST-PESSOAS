import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { Observable } from 'rxjs';
import { Pessoa } from './Models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private apiUrl = 'http://localhost:3000/pessoas';
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
  }

  createPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return new Observable((observer) => {
      this.axiosInstance.post<Pessoa>(this.apiUrl, pessoa)
        .then(response => observer.next(response.data))
        .catch(error => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  getAllPessoas(): Observable<Pessoa[]> {
    return new Observable((observer) => {
      this.axiosInstance.get<Pessoa[]>(this.apiUrl)
        .then(response => observer.next(response.data))
        .catch(error => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  getPessoaById(id: number): Observable<Pessoa> {
    const url = `${this.apiUrl}/${id}`;
    return new Observable((observer) => {
      this.axiosInstance.get<Pessoa>(url)
        .then(response => observer.next(response.data))
        .catch(error => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  updatePessoa(id: number, pessoa: Pessoa): Observable<Pessoa> {
    const url = `${this.apiUrl}/${id}`;
    return new Observable((observer) => {
      this.axiosInstance.put<Pessoa>(url, pessoa)
        .then(response => observer.next(response.data))
        .catch(error => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  deletePessoa(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return new Observable((observer) => {
      this.axiosInstance.delete<void>(url)
        .then(() => observer.next())
        .catch(error => observer.error(error))
        .finally(() => observer.complete());
    });
  }
}
