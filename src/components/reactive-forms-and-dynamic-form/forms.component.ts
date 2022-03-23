import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'forms',
    templateUrl: './forms.component.html',
    providers: [FormBuilder]
})

export class UserForm implements OnInit {
    constructor(private fb: FormBuilder) { }
    userForm: any;

    ngOnInit() {
        this.userForm = this.fb.group({
            userid: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            address: this.fb.group({
                street: [''],
                city: [''],
                state: [''],
                zipcode: ['']
            }),
            aliases: this.fb.array([
                this.fb.control('', Validators.required)
            ])
        });
    }

    get aliases() {
        return this.userForm.get('aliases') as FormArray;
    }
    addAliases() {
        this.aliases.push(this.fb.control('', Validators.required));
    }

    onSubmit() {
        // e.preventDefault();
        alert(JSON.stringify(this.userForm.value));
        this.userForm.reset();
    }

    onReset() {
        this.userForm.reset();
    }
}