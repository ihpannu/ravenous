const apiKey = 'WfwS3ga6nHNgONSp7xYNHn4SPersWkm1Alf0Rx9Lb1ffP8ysm_HHIsEV8tRNyfYLx0dD0RurIb7F5y4P' +
    'sOK5fGDWJ6CMg7FKKeJws4wA4oxWCPXpNqPrdqYFXbU4WnYx';

const Yelp = {};

search = (term, location, sortBy) => {
  return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`)
}