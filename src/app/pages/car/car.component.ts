import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  pickupLocation = '';
  dropLocation = '';
  pickupDate = '';
  loading = false;
  showPopup = false;
  cars: any[] = [];

  searchCars() {
    if (!this.pickupLocation || !this.dropLocation || !this.pickupDate) {
      this.showPopup = true;
      return;
    }

    this.loading = true;
    this.cars = [];

    setTimeout(() => {
      this.loading = false;
      this.cars = [
        { name: 'Car 1', type: '4-Seater', seats: 4, price: 2000, image: 'https://www.rushlane.com/wp-content/uploads/2024/02/2024-maruti-swift-india-launch-9-may-2024-5.jpg' },
        { name: 'Car 2', type: '4-Seater', seats: 4, price: 2200, image: 'https://imgd-ct.aeplcdn.com/664x415/n/u0kvp0b_1638883.jpg?q=80' },
        { name: 'Car 3', type: '4-Seater', seats: 4, price: 2500, image: 'https://lh3.googleusercontent.com/proxy/zPRKayY8ajByp1r5XpevlM_ySC_EVJcojyIhYQqH11mw0Bj0YoO-Qtvr3rAUlL6f_uy-kvhrlN40i4QOosV3iR5SLbm87xG8qu3GorZtyXkFT4ETqxsQ2QWV' },
        { name: 'Car 4', type: '4-Seater', seats: 4, price: 2300, image: 'https://carindia.in/wp-content/uploads/2019/10/New-Renault-Kwid-Climber-India-web.jpg' },
        { name: 'Car 5', type: '7-Seater', seats: 7, price: 3000, image: 'https://images.jdmagicbox.com/quickquotes/images_main/toyota-innova-crysta-2-4-zx-7-str-bs6-silver-271052365-etpea.png' },
        { name: 'Car 6', type: '7-Seater', seats: 7, price: 3200, image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-47.jpeg?isig=0&q=80' },
        { name: 'Car 7', type: '7-Seater', seats: 7, price: 3100, image: 'https://images.timesdrive.in/photo/msid-151016131,thumbsize-440752,width-560,height-250,false/151016131.jpg' }
      ];
    }, 2000);
  }

  closePopup() {
    this.showPopup = false;
  }

  customer = {
    name: '',
    phone: '',
    whatsapp: '',
    email: ''
  };
  
  selectedCar: any = null;
  showBookingForm = false;
  bookingLoading = false;
  bookingConfirmed = false;
  
  openBooking(car: any) {
    this.selectedCar = car;
    this.showBookingForm = true;
    this.customer = { name: '', phone: '', whatsapp: '', email: '' };
  }
  
  submitBooking() {
    if (!this.customer.name || !this.customer.phone || !this.customer.email) {
      alert("Please fill in all required fields.");
      return;
    }
  
    this.showBookingForm = false;
    this.bookingLoading = true;
  
    setTimeout(() => {
      this.bookingLoading = false;
      this.bookingConfirmed = true;
    }, 2000);
  }
  
  closeAll() {
    this.bookingConfirmed = false;
    this.selectedCar = null;
  }
}
