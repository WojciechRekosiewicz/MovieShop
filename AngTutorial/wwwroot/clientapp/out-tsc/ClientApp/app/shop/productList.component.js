import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
var ProductList = /** @class */ (function () {
    function ProductList(data) {
        this.data = data;
        this.products = data.products;
    }
    //ngOnInit(): void {
    //    this.data.loadProducts()
    //        .subscribe(success => {
    //            if (success) {
    //                this.products = this.data.products;
    //            }
    //        });
    //}
    ProductList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadProducts()
            .subscribe(function () { return _this.products = _this.data.products; });
    };
    ProductList.prototype.addProduct = function (product) {
        this.data.AddToOrder(product);
    };
    ProductList = tslib_1.__decorate([
        Component({
            selector: "product-list",
            templateUrl: "productList.component.html",
            styleUrls: ["productList.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], ProductList);
    return ProductList;
}());
export { ProductList };
//# sourceMappingURL=productList.component.js.map