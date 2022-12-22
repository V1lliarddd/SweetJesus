import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social_page.component.html',
  styleUrls: ['./social_page.component.css'],
})
export class SocialPageComponent {
  images = [
    {
      imageSrc:
        'https://images.squarespace-cdn.com/content/v1/57239a2801dbaedc4e8a8405/1517424984614-W5STCOCYX4SUCOFY5EIS/SJ+Gallery_1.jpg?format=2500w',
      imageAlt: 'Image1',
    },
    {
      imageSrc:
        'https://images.squarespace-cdn.com/content/v1/57239a2801dbaedc4e8a8405/1667409378343-7VDH1R566TP83VDN1A18/The+answers+to+all+your+prayers%2C+all+in+a+single+pimped+out+cone.+%282%29.png?format=2500w',
      imageAlt: 'Image2',
    },
    {
      imageSrc:
        'https://images.squarespace-cdn.com/content/v1/57239a2801dbaedc4e8a8405/1533150669891-4YWTS5T1N9PU6KEU3IH2/try-krusty-slider.jpg?format=2500w',
      imageAlt: 'image3',
    },
  ];
}
