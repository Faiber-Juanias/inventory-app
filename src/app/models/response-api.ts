import { ErrorApi } from "./Error-api";

export interface ResponseApi {
    response: object;
    error: ErrorApi;
}