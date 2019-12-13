import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildTestComponent } from './child-test/child-test.component';
import { NgcontentTestComponent } from './ngcontent-test/ngcontent-test.component';
import { FactoryComponent } from './factory/factory.component';
import { SubfactoryComponent } from './subfactory/subfactory.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildTestComponent,
    NgcontentTestComponent,
    FactoryComponent,
    SubfactoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [AppComponent, FactoryComponent, SubfactoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
