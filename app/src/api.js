const url = 'hhttps://hackeaporunacausa-vuqxxbowzc.now.sh';
import moment from 'moment';
import faker from 'faker';
const headers = new Headers({
  'Content-Type': 'Application/json'
});

export const getFirstUser = () => {
  return fetch(url + '/mentors', {
    headers,
  }).then(res => res.json())
    .then(data => data)
    .catch(error => error)
};

export const insertUser = () => {
  fetch(url, {
    method: 'post',
    headers,
    body: JSON.stringify({
      mentor_name: faker.name.firstName(),
      mentor_last_name: faker.name.lastName(),
      birth_date: 12689,
      gender: "f",
      address: faker.address.streetName(),
      phone_number: 234234,
      license_num: 234,
      location: [faker.address.streetAddress()],
      mentoring_type: ["Comunidades especiales"],
      appointment: [{
        mentee: faker.name.firstName(),
        date: moment().add(1, 'days').calendar(),
        time: '4PM'
      }]
    })
  }).then(res => {
    return res.json();
  }).then(data => {
    console.log(data);
  }).catch(err => {
    console.log('Error', err);
  });
};

// R.times(insertUser, 10);
