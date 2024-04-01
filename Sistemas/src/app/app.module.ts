import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { PessoaService } from "./pessoa.service";

@NgModule({
    declarations: [
        
    ],
    imports:  [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        PessoaService
    ],
    bootstrap: []
})
export class AppModule {}