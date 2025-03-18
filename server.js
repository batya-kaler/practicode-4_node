
import renderApi from '@api/render-api';

renderApi.auth('rnd_ZyaZYaP7rC7LhGOicHB5RgqdpOrv');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));