import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent {
  myForm!: FormGroup;
  formData: any;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    // Form initialization
    this.myForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.invalid) {
      return;
    }

    const title = this.myForm.value.title;

    this.apiService.deleteArticle(title).subscribe(
      (response) => {
        // Handle the response
        this.myForm = this.formBuilder.group({
          title: ['', Validators.required]
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
