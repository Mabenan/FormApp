import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FieldResponseBody } from '../types/FieldResponseBody';
import { Field } from '../types/Field';
import { EntryPostResponseBody } from '../types/EntryPostResponseBody';
import { FieldError } from '../types/FieldError';

@Component({
  selector: 'app-wufoo-form',
  templateUrl: './wufoo-form.component.html',
  styleUrls: ['./wufoo-form.component.css']
})
export class WufooFormComponent implements OnInit {
  fields: Field[];
  answer: object;
  fieldErrors: FieldError[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.answer = {};
    this.http.get('/api/v3/forms/zqy0v4l02nk945/fields.json').subscribe(
      (resp: FieldResponseBody) => {
        // tslint:disable-next-line: no-string-literal
        this.fields = resp.Fields;
      },
      err => {
        console.log(err);
      }
    );
  }

  Submit(value: any) {
    let body = new HttpParams();
    this.fields.forEach(field => {
      if (field.Type === 'checkbox') {
        field.SubFields.forEach(subField => {
          if (value[subField.ID]) {
            value[subField.ID] = subField.Label;
          } else {
            value[subField.ID] = '';
          }
        });
      }
    });
    for (const field in value) {
      if (value.hasOwnProperty(field)) {
        body = body.set(field, value[field]);
      }
    }
    this.http
      .post('/api/v3/forms/zqy0v4l02nk945/entries.json', body.toString(), {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        )
      })
      .subscribe(
        (resp: EntryPostResponseBody) => {
          if (resp.Success === 1) {
            alert('Daten eingetragen');
          } else {
            this.fieldErrors = resp.FieldErrors;

          }
        },
        err => {
          console.log(err);
        }
      );
  }
}
