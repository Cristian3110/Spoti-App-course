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
        'Bearer BQDQjUsIkcUjOeAaAcZ8Jfu_Kr9pvpnDKFp9zPcmqlHAobXNerMrlbi1DCjdQFJkckJDiDuTqvwN2c2BEB8',
    });

    return this.http.get(url, { headers });
  }

  getNewRelease() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data) => data['albums'].items)
    );
  }
  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=es`).pipe(
      map((data) => data['tracks'])
    );
  }
}
