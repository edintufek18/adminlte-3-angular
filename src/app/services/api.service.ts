import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageInterface } from '@/store/messageInterface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private readonly baseUrl = 'http://localhost:3000';
    constructor(private http: HttpClient) {}

    getMessage(): Observable<MessageInterface> {
        return this.http.get<MessageInterface>(`${this.baseUrl}/hello`);
    }
    
}
