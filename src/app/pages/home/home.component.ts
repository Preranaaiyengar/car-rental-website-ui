import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  services = [
    {
      title: 'Rent a Car',
      image: '/car.jpg',
      quote: 'Flexible rentals for all your needs.',
      route: '/car'
      
    },
    {
      title: 'Book a Cab',
      image: '/cab.jpg',
      quote: 'Quick rides at your fingertips.',
    },
    {
      title: 'Book a Driver',
      image: '/driver.jpg',
      quote: 'Professional drivers at your service.',
    },
    {
      title: 'Book a Bus',
      image: '/bus.jpg',
      quote: 'Group travel made easy.',
    },
    {
      title: 'Book a Tempo Traveller',
      image: '/tempo.webp',
      quote: 'Comfortable journeys for big families.',
    },
    {
      title: 'Full Package Trip',
      image: '/trip.jpg',
      quote: 'End-to-end trip management.',
    },
  ];
  constructor(private router: Router) {}

  goToService(service: any) {
    if (service.route) {
      this.router.navigate([service.route]);
    }
  }
}

