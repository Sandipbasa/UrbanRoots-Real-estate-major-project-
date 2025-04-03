import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem({ listing }) {
  // Safely handle missing listing data
  if (!listing) {
    return (
      <div className='bg-white shadow-md rounded-lg w-full sm:w-[330px]'>
        <div className='p-3 text-center text-gray-500'>
          Listing data not available
        </div>
      </div>
    );
  }

  // Default image URL
  const defaultImage = 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg';

  // Safely handle price display
  const displayPrice = () => {
    try {
      if (listing.offer && listing.discountPrice) {
        return listing.discountPrice.toLocaleString('en-US');
      }
      if (listing.regularPrice) {
        return listing.regularPrice.toLocaleString('en-US');
      }
      return 'N/A';
    } catch {
      return 'N/A';
    }
  };

  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/listing/${listing._id || ''}`}>
        <img
          src={listing.imageUrls?.[0] || defaultImage}
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
          onError={(e) => {
            e.target.src = defaultImage;
          }}
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {listing.name || 'No title available'}
          </p>
          
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-600 truncate w-full'>
              {listing.address || 'Address not specified'}
            </p>
          </div>
          
          <p className='text-sm text-gray-600 line-clamp-2'>
            {listing.description || 'No description provided'}
          </p>
          
          <p className='text-slate-500 mt-2 font-semibold'>
            ${displayPrice()}
            {listing.type === 'rent' && ' / month'}
          </p>
          
          <div className='text-slate-700 flex gap-4'>
            {listing.bedrooms !== undefined && (
              <div className='font-bold text-xs'>
                {listing.bedrooms > 1 
                  ? `${listing.bedrooms} beds` 
                  : `${listing.bedrooms} bed`}
              </div>
            )}
            
            {listing.bathrooms !== undefined && (
              <div className='font-bold text-xs'>
                {listing.bathrooms > 1 
                  ? `${listing.bathrooms} baths` 
                  : `${listing.bathrooms} bath`}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}