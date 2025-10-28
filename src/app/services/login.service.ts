import { HttpClient, HttpErrorResponse, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from '../model/user.model';
import { Error } from '../model/error.model';

@Injectable({
 providedIn:'root'
})
export class LoginService{

    baseUrl : string = environment.baseApiUrl;
    errordetails:Error = {status : HttpStatusCode.Unused,datetime:'',message:'', details:''};

    constructor(private http:HttpClient){}

    loginRequest(payload:User):Observable<any>{
        return this.http.post(`${this.baseUrl}login`,payload).pipe(
            catchError((error:HttpErrorResponse) => {
                console.log("Error In service :",error.error.message);              
                this.errordetails.datetime= error.error.datetime;
                this.errordetails.details = error.error.details;
                this.errordetails.status = error.status;
                this.errordetails.message = error.error.message;

                return throwError(() =>this.errordetails);
        })
     );
    }
}