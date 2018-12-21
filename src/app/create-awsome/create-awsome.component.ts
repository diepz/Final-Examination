import { AwesomeService } from './../awesome.service';
import { Awesome } from './../awesome';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-awsome',
  templateUrl: './create-awsome.component.html',
  styleUrls: ['./create-awsome.component.scss']
})
export class CreateAwsomeComponent implements OnInit {
  awesome: Awesome;
  awesomeList: Awesome[] = [];
  awesomeForm: FormGroup;
  constructor(private route: ActivatedRoute, private awesomeService: AwesomeService, private fb: FormBuilder) { }

  ngOnInit() {
    this.awesomeForm = this.fb.group({
      tag: ['', [Validators.required, Validators.minLength(10)]],
      url: ['', [Validators.required, Validators.minLength(10)]],
      descriptions: ['', [Validators.required, Validators.minLength(10)]]
    });

  }

  onSubmit() {
    if (this.awesomeForm.valid) {
      const { value } = this.awesomeForm;
      this.awesomeService.createAwesome(value).subscribe(data => {
        this.awesomeList.unshift(data);
        this.awesomeForm.reset({
          tag: '',
          url: '',
          descriptions: ''
        });
      }, error => console.log(error));
    }
  }

}
