export class Url {

    private static pathUrl = 'http://localhost:8080/';

    static getUrlAllProducts() { return `${this.pathUrl}product/all` }
    static getUrlSaveProduct() { return `${this.pathUrl}product/save` }
    static getUrlDeleteProduct() { return `${this.pathUrl}product/delete/` }
    static getUrlProductById() { return `${this.pathUrl}product/get/` }
    static getUrlProductFilter() { return `${this.pathUrl}product/filter` }

    static getUrlAllUsers() { return `${this.pathUrl}user/all` }
}