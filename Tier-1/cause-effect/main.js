const nav = document.querySelector('.nav-list');
const content = document.querySelector('.content');

const api = 'https://fakerapi.it/api/v1/persons';

let data;

const getData = async () => {
  const res = await fetch(api);
  const data = await res.json();

  return data.data;
};

const getNames = () => {
  const names = data.map((item) => item.firstname);
  return names;
};

const updateContent = (index) => {
  const template = contentTemplate(data[index]);
  content.innerHTML = template;
};

const contentTemplate = (data) => {
  return `
    <p><span>Full name:</span> ${data.firstname} ${data.lastname}</p>
    <div>
      <p><span>Address:</span></p>
      <p>${data.address.buildingNumber}</p>
      <p>${data.address.street}</p>
      <p>${data.address.streetName}</p>
      <p>${data.address.city}</p>
      <p>${data.address.country}</p>
    </div>
    <p><span>Phone number:</span> ${data.phone}</p>
    <p><span>DOB:</span> ${data.birthday}</p>
  `;
};

const navItem = (name, index, className) => {
  const li = document.createElement('li');
  li.id = index;
  li.className = className;
  li.innerText = name;

  li.addEventListener('click', () => {
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach((item) => item.classList.remove('active'));
    li.className = 'list-item active';
    updateContent(index);
  });
  return li;
};

window.addEventListener('DOMContentLoaded', async () => {
  data = await getData();
  const names = getNames();
  names.forEach((name, i) => {
    if (i === 0) {
      nav.appendChild(navItem(name, i, 'list-item active'));
    } else {
      nav.appendChild(navItem(name, i, 'list-item'));
    }
  });
  content.innerHTML = contentTemplate(data[0]);
});
