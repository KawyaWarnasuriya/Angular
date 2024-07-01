import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'This loaded dynamically';
  imgUrl: string ='https://miro.medium.com/v2/resize:fit:512/1*FKD2Uy_Q6r6AviZA2VD4RQ.png';


  isDisabled: boolean= true;
  isActive: boolean = true;
  fruitName: string = 'Apple';

  userName: string = 'John Don';
  textValue: string = "Value is coming from the component";

  buttonClick(){
    console.log('Button Clicked');
  }

  onKeyup(){
    console.log(this.textValue);
  }

  keyEnter(event:any){
    //console.log(event.keyCode)
    if(event.ketCode == 13 ){
      console.log('Enter Key Pressed');
    }
  }

  keyupFilturing(user:HTMLInputElement){
    console.log(user.value);
    //console.log(user.id);
  }

  updateUserName(username:HTMLInputElement){
    this.userName = username.value;
    console.log(this.userName);

  }


}
