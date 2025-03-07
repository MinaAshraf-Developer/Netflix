import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkActive , RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Netflix';
  navBg: any;
  @HostListener('document:scroll') scrollover() {
    console.log(document.body.scrollTop, 'scrollLength#')
    if (document.body.scrollTop > 0  || document.documentElement.scrollTop > 0)
    {
      this.navBg = {
  'background-color' : "#000000"
    }
    }
    else {
      this.navBg = {
        'background-color' : "transparent"
      }
    }
  }

  
}
