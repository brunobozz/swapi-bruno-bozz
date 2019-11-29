import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SwapiService {
  public endpoint = "https://swapi.co/api/";
  public allItems: any = [];
  public allMovies: any = [];
  public allPeople: any = [];
  public allPlanets: any = [];

  constructor(private http: HttpClient) {}

  public swapi(type: string, format: string, page: string): Observable<any> {
    return this.http.get(
      `${this.endpoint}${type}/?format=${format}&page=${page}`
    );
  }

  public dynamicRequest(url: string): Observable<any> {
    return this.http.get(url);
  }

  public loadAll(type: string, page: string) {
    this.swapi(type, "json", page).subscribe((response: any) => {
      let i = 0;
      response.results.forEach(element => {
        switch (type) {
          case "films": {
            this.allMovies.push(response.results[i]);
            break;
          }
          case "people": {
            this.allPeople.push(response.results[i]);
            break;
          }
          case "planets": {
            this.allPlanets.push(response.results[i]);
            break;
          }
        }
        i++;
      });

      if (response.next != null) {
        let pagePosition = response.next.search("page=");
        let page = response.next.substring(pagePosition + 5, pagePosition + 6);
        this.loadAll(type, page);
      }
    });
  }
}
