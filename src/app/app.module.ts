import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './component/appheader/appheader.component';
import { AppmenuComponent } from './component/appmenu/appmenu.component';
import { AppfooterComponent } from './component/appfooter/appfooter.component';
import { AppsettingsComponent } from './component/appsettings/appsettings.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    AppsettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
