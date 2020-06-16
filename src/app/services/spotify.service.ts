import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Los observables vienen del rxjs operators
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('spotify service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      // aqui voy a  especificar todos los token de la API
      Authorization:
        'Bearer BQCgcDKiBhJfj-omJRM2SNmAVMBiW0sEph9xgBIyFipbYI31mDJ-dQTTHAW8z_bI-hoBXxZN_syEmV_IM7M',
    });

    return this.http.get(url, { headers });
  }

  getNewRelease() {
    // const headers = new HttpHeaders({
    //   // aqui voy a  especificar todos los token de la API
    //   Authorization:
    //     'Bearer BQBxVlqBlclH1hgKNitFvLFfaV4WG7VqV-TZXgwtPRpmInmFg6gj9BBTygt1tcBcDZoVXnslz9RHJlGiQEw',
    // });

    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data) => data['albums'].items)
    );

    // this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {
    //   headers,
    // });
    // .subscribe((data) => {
    //   console.log(data);
    // });
  }
  getArtista(termino: string) {
    // const headers = new HttpHeaders({
    //   // aqui voy a  especificar todos los token de la API
    //   Authorization:
    //     'Bearer BQBxVlqBlclH1hgKNitFvLFfaV4WG7VqV-TZXgwtPRpmInmFg6gj9BBTygt1tcBcDZoVXnslz9RHJlGiQEw',
    // });

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }

  // this.http
  //   .get(
  //     `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
  //     {
  //       headers,
  //     }
  //   )
}
