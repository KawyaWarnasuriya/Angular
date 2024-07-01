import { Component } from "@angular/core";

@Component({
    selector:'app-navbar',
    standalone:true,
    template:`  <h1>Navbar Component</h1> 
                <p>Dummy Pargraph </p> 
                <button>Submit</button>`,

    

    templateUrl:'./navbar.component.html',
    styleUrl:'./navbar.component.css'

})

export class AppNavbar{}