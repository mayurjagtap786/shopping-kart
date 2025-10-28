import { HttpStatusCode } from "@angular/common/http";

export interface Error {
    status:HttpStatusCode;
    datetime:string;
    message:string;
    details:string;
}