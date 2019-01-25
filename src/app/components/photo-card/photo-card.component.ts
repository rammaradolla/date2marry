import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';
import { AppStateService } from '../../services/app-state.service';
import { ApiCallingService } from '../../services/api-calling.service';
import { UserProfile } from '../../models/userProfile';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})

export class PhotoCardComponent implements OnInit {

  constructor(private apiCallingService:ApiCallingService, private appStateService: AppStateService) { }
  @Input() photoUrl: String;
  @ViewChild('slideshow') slideshow: any;
  imageUrls: (string | IImage)[] = [
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg', caption: 'The first slide', href: '#config' },
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg', clickAction: () => alert('custom click function') },
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg', caption: 'Apple TV', href: 'https://www.apple.com/' },
    'https://cdn.vox-cdn.com/uploads/chorus_image/image/56674755/mr_pb_is_the_best.0.jpg',
    { url: 'assets/kitties.jpg', backgroundSize: 'contain', backgroundPosition: 'center' }
  ];
  height: string = '300px';
  minHeight: string;
  arrowSize: string = '20px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = false;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  ngOnInit() {

  }

  onSlide(photoIndex) {
   // alert(photoIndex);
  }

}
