import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FieldResponseBody } from '../../../../src/types/FieldResponseBody';
import { Field } from '../../../../src/types/field.entity';
import { EntryPostResponseBody } from '../../../../src/types/EntryPostResponseBody';
import { FieldError } from '../../../../src/types/FieldError';
import { Entry } from '../../:./../../../src/types/entry.entity';
import { Answer } from '../../../../src/types/answer.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wufoo-form',
  templateUrl: './wufoo-form.component.html',
  styleUrls: ['./wufoo-form.component.css']
})
export class WufooFormComponent implements OnInit {
  fields: Field[];
  answer: object;
  fieldErrors: FieldError[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.answer = {};
    this.http.get('/api/fields/filtered').subscribe(
      (resp: Field[]) => {
        // tslint:disable-next-line: no-string-literal
        this.fields = resp;
      },
      err => {
        console.log(err);
      }
    );
  }

  Submit(value: any) {
    const body = new Entry();
    body.Answers = [];
    for (const field in value) {
      if (value.hasOwnProperty(field)) {
        const answer = new Answer();
        answer.FieldID = Number(field);
        answer.Answer = value[field];
        body.Answers.push(answer);
      }
    }
    this.http
      .post('/api/entries/create', body)
      .subscribe(
        (resp: EntryPostResponseBody) => {
          if (resp.Success === 1) {
            this.router.navigate(['fin']);
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
