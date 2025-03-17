import React from 'react';
// Remove Breadcrumbs import
import PropertyTitle from '../components/property/PropertyTitle';
import ImageGallery from '../components/property/ImageGallery';
import PropertyInfo from '../components/property/PropertyInfo';
import PropertyFeatures from '../components/property/PropertyFeatures';
import AdditionalFeatures from '../components/property/AdditionalFeatures';
import ContactForm from '../components/contact/ContactForm';
import LocationMap from '../components/map/LocationMap';
import AdvertiserInfo from '../components/advertiser/AdvertiserInfo';

const PropertyDetail = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Remove Breadcrumbs component */}
      <PropertyTitle />
      <ImageGallery />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <PropertyInfo />
            <PropertyFeatures />
            <AdditionalFeatures />
            <LocationMap />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <ContactForm />
            <AdvertiserInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;