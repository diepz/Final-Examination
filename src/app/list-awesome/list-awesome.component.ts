import { AwesomeService } from './../awesome.service';
import { Component, OnInit } from '@angular/core';
import { Awesome } from '../awesome';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-list-awesome',
  templateUrl: './list-awesome.component.html',
  styleUrls: ['./list-awesome.component.scss']
})
export class ListAwesomeComponent implements OnInit {
  awesomeList: Awesome[] = [];
  awesomeForm: FormGroup;
  constructor(private awesomeService: AwesomeService, private fb: FormBuilder) { }

  ngOnInit() {
    this.awesomeForm = this.fb.group({
      tag: ['', [Validators.required, Validators.minLength(10)]],
      url: ['', [Validators.required, Validators.minLength(10)]],
      descriptions: ['', [Validators.required, Validators.minLength(10)]]
    });
    this.awesomeService.getAwesomes().subscribe(data => {
      this.awesomeList = data;
    }, error => {
      console.log(error);
    }, () => {
      console.log('completed');
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

  deleteAwesome(i) {
    const awesome = this.awesomeList[i];
    this.awesomeService.deleteAwesome(awesome.id).subscribe(() => {
      this.awesomeList = this.awesomeList.filter(b => b.id !== awesome.id);
    });
  }

}
