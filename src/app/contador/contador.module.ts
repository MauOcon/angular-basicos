import {CommonModule} from "@angular/common";
import { NgModule } from "@angular/core";
import {ContadorComponent} from "./contador/contador.componente";

@NgModule({
    declarations: [
        ContadorComponent,
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ContadorModule {

}
