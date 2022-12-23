import { Component, Input, OnInit } from '@angular/core';

export interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-social-slider',
  templateUrl: './social-slider.component.html',
  styleUrls: ['./social-slider.component.css'],
})
export class SocialSliderComponent implements OnInit {
  @Input() images: carouselImage[] = [];
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;
  selectedIndex = 0;
  autoSlideImages() {
    setInterval(() => {
      this.nextImage();
    }, this.slideInterval);
  }
  constructor() {}
  ngOnInit() {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }
  nextImage() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
