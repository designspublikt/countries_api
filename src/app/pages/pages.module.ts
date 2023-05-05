import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeApiComponent } from './home-api/home-api.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeApiComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [HomeApiComponent],
})
export class PagesModule {}
