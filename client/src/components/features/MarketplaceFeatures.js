import React from 'react';
import './MarketplaceFeatures.css';
import verifiedProfileImg from '../../assets/images/featurepage/verified-profile.png';
import searchFilterImg from '../../assets/images/featurepage/search-filter.png';
import instantBookingImg from '../../assets/images/featurepage/instant-booking.png';
import feedbackImg from '../../assets/images/featurepage/feedback.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Marketplace = () => {
  return (
    <section className="marketplace-section">
      <h1 className="marketplace-title">YOUR MARKETPLACE FOR TRUSTED CAREGIVERS</h1>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        className="marketplace-swiper"
      >
        <SwiperSlide>
          <div className="marketplace-card">
            <img src={verifiedProfileImg} alt="Verified Caregiver Profiles" className="card-image" />
            <div className="card-text">
              <h2 className="card-title">Verified Caregiver Profiles</h2>
              <p className="card-content">
                We ensure every caregiver on our platform is background-checked and thoroughly verified. Profiles include detailed bios, services offered, years of experience, certifications (if available), and hourly or monthly pricing. Availability is updated in real-time so you can see when they’re open for bookings. Caregivers also mention preferred work types (e.g., live-in, part-time, night duty). This transparency helps families make safe and informed choices. You get to know who you’re trusting before even making contact.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="marketplace-card">
            <img src={searchFilterImg} alt="Search and Filter" className="card-image" />
            <div className="card-text">
              <h2 className="card-title">Search & Filter by Needs</h2>
              <p className="card-content">
                No more scrolling endlessly. You can filter caregivers based on multiple criteria like service type (e.g., medical support, companionship, mobility help), location, pricing range, gender, and languages spoken. This ensures your search results are customized to your unique needs. Whether you need someone full-time or just for a few hours a week, the filtering system is designed to adapt. It saves time and makes discovery smooth. Families can find compatible caregivers quickly and confidently.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="marketplace-card">
            <img src={instantBookingImg} alt="Instant Booking" className="card-image" />
            <div className="card-text">
              <h2 className="card-title">Instant Booking & Scheduling</h2>
              <p className="card-content">
                Once you’ve found a suitable caregiver, booking is just a few clicks away. Select a time slot based on the caregiver’s availability and confirm instantly. The platform sends automatic reminders to both parties to reduce no-shows. You can book single-day services, weekly schedules, or recurring appointments. Rescheduling is easy and intuitive. This system adds flexibility and predictability to your care planning.              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="marketplace-card">
            <img src={feedbackImg} alt="Feedback" className="card-image" />
            <div className="card-text">
              <h2 className="card-title">Feedback & Ratings System</h2>
              <p className="card-content">
                After every session, families and elders can rate caregivers and leave detailed feedback. These reviews help future users identify top-performing caregivers. The system tracks consistency, punctuality, and professionalism, ensuring accountability across the platform. Caregivers with higher ratings appear more prominently in searches, giving good service the visibility it deserves. We actively monitor for concerns to maintain platform trust. Your voice helps shape the community.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Marketplace;
