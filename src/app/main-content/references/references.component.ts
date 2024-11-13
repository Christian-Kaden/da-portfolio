import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  currentReference = true;

  cards = [
    {
      text: 'It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.',
      author: 'I.Nuber - Frontend Engineer',
    },
    {
      text: 'Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.',
      author: 'E.Eichinger - Team Partner',
    },
    {
      text: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      author: 'V. Schuster - Team Partner',
    },
  ];

  currentCardIndex = 0;

  prevCard() {
    this.currentCardIndex =
      (this.currentCardIndex - 1 + this.cards.length) % this.cards.length;
  }

  nextCard() {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
  }

  goToCard(index: number) {
    this.currentCardIndex = index;
  }
}
