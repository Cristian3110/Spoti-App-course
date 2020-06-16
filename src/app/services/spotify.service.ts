import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('spotify service listo');
  }

  getNewRelease() {
    const headers = new HttpHeaders({
      // aqui voy a  especificar todos los token de la API
      Authorization:
        'Bearer BQBxVlqBlclH1hgKNitFvLFfaV4WG7VqV-TZXgwtPRpmInmFg6gj9BBTygt1tcBcDZoVXnslz9RHJlGiQEw',
    });

    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases?limit=20', {
        headers,
      })
      .pipe(
        map((data) => {
          return data['albums'].items;
        })
      );
    // .subscribe((data) => {
    //   console.log(data);
    // });
  }
  getArtista(termino: string) {
    const headers = new HttpHeaders({
      // aqui voy a  especificar todos los token de la API
      Authorization:
        'Bearer BQBxVlqBlclH1hgKNitFvLFfaV4WG7VqV-TZXgwtPRpmInmFg6gj9BBTygt1tcBcDZoVXnslz9RHJlGiQEw',
    });

    return this.http
      .get(
        `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
        {
          headers,
        }
      )
      .pipe(
        map((data) => {
          return data['artists'].items;
        })
      );
  }
}
