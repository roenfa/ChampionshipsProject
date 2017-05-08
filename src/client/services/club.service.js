
console.log('Export Service Club');
export default function ClubService($resource, Global) {
  var url = Global.PATH + '/club';
  return $resource(url + '/:_id', {
    _id: '@_id'
  }, {
        create: {
          method: 'POST'
        },
        find: {
          method: 'GET',
          isArray: true
        }
     });
}
