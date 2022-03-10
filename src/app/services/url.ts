export class Url {

    private static pathUrl = 'http://localhost:8080/';

    static getUrlAllProducts() { return `${this.pathUrl}product/all` }
    static getUrlSaveProduct() { return `${this.pathUrl}product/save` }

    static getUrlAllUsers() { return `${this.pathUrl}user/all` }
}