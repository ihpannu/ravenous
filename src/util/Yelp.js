const apiKey = 'WfwS3ga6nHNgONSp7xYNHn4SPersWkm1Alf0Rx9Lb1ffP8ysm_HHIsEV8tRNyfYLx0dD0RurIb7F5y4P' +
    'sOK5fGDWJ6CMg7FKKeJws4wA4oxWCPXpNqPrdqYFXbU4WnYx';

const Yelp = {
  search(term, location, sortBy) {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }
  ).then(response => response.json()).then(
    
    function (jsonResponse) {
    if (jsonResponse.businesses) {
      return jsonResponse.businesses.map(business => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address,
        city: business.location.city,
        state: business.location.state,
        zipcode: business.location.zip_code,
        category: business.categories,
        title: business.rating,
        reviewCount: business.review_count
      }));
    }
  })
}
};
export default Yelp;