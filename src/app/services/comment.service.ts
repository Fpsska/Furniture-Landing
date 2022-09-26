import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

import { Observable, delay } from 'rxjs'

import { Icomment } from '../models/comment'

// /. imports

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments(): Observable<Icomment[]> {
    return this.http
      .get<Icomment[]>(
        'https://6331b7adcff0e7bf70f50390.mockapi.io/furniture-landing/api/comments',
        {
          params: new HttpParams({ fromObject: { page: 1, limit: 10 } })
        }
      )
      .pipe(delay(700))
  }
}
