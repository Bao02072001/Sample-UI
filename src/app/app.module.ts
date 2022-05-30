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
import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DialogAddComponent } from './dialog-add/dialog-add.component';
import { DialogAddddComponent } from './dialog-adddd/dialog-adddd.component';


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
    IconsModule,
    LayoutModule,
    DropDownsModule,
  ],
  declarations: [AppComponent, DialogComponent, DialogAddComponent, DialogAddddComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
