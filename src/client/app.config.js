
export default function config(RestangularProvider, API_URL_BASE) {
  'ngInject';
  console.log(API_URL_BASE);
  RestangularProvider.setBaseUrl(API_URL_BASE);
  RestangularProvider.setDefaultHttpFields({cache: false});
}
