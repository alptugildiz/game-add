import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-newgame',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.scss']
})
export class NewgameComponent implements OnInit {
  http: any;

  constructor() { }

  ngOnInit(): void {
  }
  newGame() {
    var name = (<HTMLInputElement>document.getElementById('gameName')).value;
    var bundle = (<HTMLInputElement>document.getElementById('bundle')).value;
    var email = (<HTMLInputElement>document.getElementById('email')).value;
    var icon = (<HTMLInputElement>document.getElementById('icon')).value;


    let info = { name: '', bundle: '', email: '', icon: '' }
    let data = []

    if (name.length == 0) {
      (<HTMLInputElement>document.getElementById('nameValidator')).innerText = "İsim boş bırakılamaz!"
    }

    if (name.length > 0) {
      (<HTMLInputElement>document.getElementById('nameValidator')).innerText = ""
      info.name = name
    }
    if (this.validateBundle(bundle)) {
      (<HTMLInputElement>document.getElementById('bundleValidator')).innerText = ""
      info.bundle = bundle;
    }
    if (!this.validateBundle(bundle)) {
      (<HTMLInputElement>document.getElementById('bundleValidator')).innerText = "Lütfen uygun bir Bundle değeri giriniz (`example.com` gibi)"
    }
    if (this.validateEmail(email)) {
      (<HTMLInputElement>document.getElementById('emailValidator')).innerText = ""
      info.email = email;
    }
    if (!this.validateEmail(email)) {
      (<HTMLInputElement>document.getElementById('emailValidator')).innerText = "Lütfen uygun bir email değeri giriniz"
    }

    if (icon.length > 0) {
      (<HTMLInputElement>document.getElementById('nameValidator')).innerText = ""
      info.icon = "/assets/uploaded.png"
    }
    
    if(info.name.length>0 && info.bundle.length>0 && info.email.length>0 && info.icon.length>0)
    {data.push(info)
      console.log(data)
    }
  }
  validateEmail(e: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(e);
  }
  validateBundle(b: string) {
    var re = /^([A-Za-z]{1}[A-Za-z\d_]*\.)+[A-Za-z][A-Za-z\d_]*$/;
    return re.test(b);
  }


  // for uploading pictures (not working at localhost rn )

  // filedata: any;

  // fileEvent(e:any) {
  //   this.filedata = e.target.files[0];
  // }

  // handleFileInput(files: FileList) {
  //   var myFormData = new FormData();
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   headers.append('Accept', 'application/json');
  //   myFormData.append('image', this.filedata);
  //   /* Image Post Request */
  //   this.http.post('http://localhost/save.php', myFormData, {
  //     headers: headers
  //   }).subscribe((data: any) => {
  //     //Check success message
  //     console.log(data);
  //   });
  // }
}
