import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  heading:string= 'Book Form';
  bookForm:FormGroup;

  constructor(private formBuilder: FormBuilder){
  this.bookForm=this.formBuilder.group({
    id:['1',[Validators.required,Validators.max(500),Validators.min(1)]],
    title:['Angel Story',[Validators.required,Validators.minLength(3)]],
    author:this.formBuilder.group({

      name:['Ayantika',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      email:['ayantika@gmail.com',[Validators.required, Validators.email]]
     
     }),
     dateofpublishing:['2020-09-09',[Validators.required]],
     publishers:this.formBuilder.array([])

  })
}

bookPublishers():FormArray{
  return this.bookForm.get('publishers') as FormArray;
}

newPublisher():FormGroup{
  return this.formBuilder.group({
    pubname:['',[Validators.required, Validators.minLength(5),Validators.maxLength(20)]],
    city:''
  });
}

addPublisher(){
  this.bookPublishers().push(this.newPublisher());
}

removePublisher(pubIndex:number){
  this.bookPublishers().removeAt(pubIndex);
}



get id():any{
  return this.bookForm.get("id");
}

get title():any{
  return this.bookForm.get("title");
}

get name():any{
  return this.bookForm.get("author")?.get("name");
}

get email():any{
  return this.bookForm.get("author")?.get("email");
}

get dateofpublishing():any{
  return this.bookForm.get("dateofpublishing");
}

onSubmit():void{
  console.log(this.bookForm.value);
}


  

}
