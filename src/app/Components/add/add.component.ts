import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  myForm!: FormGroup;
  formData: any;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    // Form initialization
    this.myForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      hindiBody: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.invalid) {
      return;
    }

    const title = this.myForm.value.title;
    const body = this.myForm.value.body;
    const hindiBody = this.myForm.value.hindiBody;

    this.apiService.composeArticle(title, body, hindiBody).subscribe(
      (response) => {
        // Handle the response
        this.myForm = this.formBuilder.group({
          title: ['', Validators.required],
          body: ['', Validators.required],
          hindiBody: ['', Validators.required],
        });
        this.router.navigate(['']);
      },
      (error) => {
        // Handle the error
        this.router.navigate(['/error']);
      }
    );
  }
}
