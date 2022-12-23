import { Component } from '@angular/core';
import { carouselImage } from '../social-slider/social-slider.component';

@Component({
  selector: 'app-social',
  templateUrl: './social_page.component.html',
  styleUrls: ['./social_page.component.css'],
})
export class SocialPageComponent {
  images1: carouselImage[] = [
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
  images2: carouselImage[] = [
    {
      imageSrc:
        'https://www.narcity.com/media-library/sweet-jesus-holiday-ice-cream-cone-is-here-for-a-limited-time-this-christmas.jpg?id=25958498&width=1245&height=700&coordinates=181%2C0%2C181%2C0',
      imageAlt: 'Image4',
    },
    {
      imageSrc:
        'https://s3.amazonaws.com/secretsaucefiles/photos/images/000/116/087/large/sweet-jesus-feature.jpg?1485403617',
      imageAlt: 'Image5',
    },
    {
      imageSrc:
        'http://www.suziethefoodie.com/wp-content/uploads/2018/07/Sweet-Jesus-Blog.jpg',
      imageAlt: 'Image6',
    },
  ];
}
