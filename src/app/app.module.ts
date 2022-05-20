import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { AppComponent } from './app.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { DialogComponent } from './dialog/dialog.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    GridModule,
    ButtonsModule,
    InputsModule,
    HttpClientModule,
    TreeViewModule,
    DialogsModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, DialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}