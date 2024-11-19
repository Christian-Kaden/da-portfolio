import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isOpen = false;
  menuState = '';

  ngOnInit() {
    this.checkWindowSize();
  }

  toggleMenu() {
    if (this.isOpen) {
      this.menuState = 'close';
      setTimeout(() => {
        this.isOpen = false;
        this.restoreScroll();
      }, 300);
    } else {
      this.isOpen = true;
      this.menuState = 'open';
      this.disableScroll();
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.checkWindowSize();
  }

  private checkWindowSize() {
    if (window.innerWidth > 680) {
      this.menuState = 'close';
      this.isOpen = false;
    }
  }

  private disableScroll() {
    document.body.style.overflow = 'hidden'; // Deaktiviert Scrollen
  }

  private restoreScroll() {
    document.body.style.overflow = ''; // Setzt Standardwert zurück
  }
}
