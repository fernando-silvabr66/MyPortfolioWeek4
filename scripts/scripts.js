const myMenu = document.querySelector('.my-mob-menu');
const myMenuBtn = document.querySelector('.my-baricon');
const myCloseBtn = document.querySelector('.my-close-menu');
const myPortfolioBtn = document.querySelector('.my-btn-Portfolio');
const myAboutBtn = document.querySelector('.my-btn-About');
const myContactBtn = document.querySelector('.my-btn-Contact');

function showMyMobMenu(e) {
  e.preventDefault();
  myMenu.style.display = 'block';
}

function hideMyMobMenu() {
  myMenu.style.display = 'none';
}

myMenuBtn.addEventListener('click', showMyMobMenu);
myCloseBtn.addEventListener('click', hideMyMobMenu);
myPortfolioBtn.addEventListener('click', hideMyMobMenu);
myAboutBtn.addEventListener('click', hideMyMobMenu);
myContactBtn.addEventListener('click', hideMyMobMenu);

const arrayProjects = [
  {
    id: 'my-proj-1',
    title: 'Multi-Post Stories',
    image: '../images/proj-img.png',
    imageclass: 'img-1-3',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['html', 'Css', 'Ruby', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 0,
  },
  {
    id: 'my-proj-2',
    title: 'Multi-Post Stories',
    image: '../images/proj-img.png',
    imageclass: 'img-2-4',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Css', 'Javascript', 'Rails'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 1,
  },
  {
    id: 'my-proj-3',
    title: 'Multi-Post Stories',
    image: '../images/proj-img.png',
    imageclass: 'img-1-3',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Css', 'Ruby', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 2,
  },
  {
    id: 'my-proj-4',
    title: 'Multi-Post Stories',
    image: '../images/proj-img.png',
    imageclass: 'img-2-4',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Css', 'Javascript', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 3,
  },
];

const popupWindow = document.querySelector('.my-project-det');

function showInnerItems(index) {
  const popupHeader = document.createElement('div');
  popupHeader.innerHTML = `
    <div class="my-project-popup">
      <div class="my-popup-header">
        <h3 class="my-popup-title">${arrayProjects[index].title}</h3>
        <i id="closer" class="fa fa-times"></i>
      </div>
      <div class="my-popup-img">
        <img src="../images/popup-img.png" alt="Project Screenshot" />
      </div>
      <div class="my-popup-project-detail">
        <p>
          ${arrayProjects[index].description}
        </p>      
      </div>
      <div class="my-popup-technologies">
        <ul class="my-proj-tech">
            <li class="border-class">${arrayProjects[index].technologyList[0]}</li>
            <li class="border-class">${arrayProjects[index].technologyList[1]}</li>
            <li class="border-class">${arrayProjects[index].technologyList[2]}</li>
            <li class="border-class">${arrayProjects[index].technologyList[3]}</li>
        </ul>
      </div>
      <div class="my-popup-footer">
        <button class="my-popup-btn">${arrayProjects[index].firstButton} <img src="../images/live-icon.png" ></button>
        <button class="my-popup-btn">${arrayProjects[index].secondButton} <i class="fab fa-github"></i></button>
      </div>
    </div>
  `;
  popupWindow.appendChild(popupHeader);
  const closer = document.getElementById('closer');
  closer.addEventListener('click', () => {
    popupWindow.removeChild(popupHeader);
  });
}

function displayPopup(param) {
  popupWindow.style.display = 'block';
  showInnerItems(param);
}

const projContainer = document.querySelector('.my-grid-container');

arrayProjects.forEach((project) => {
  const container = document.createElement('div');

  container.innerHTML = `
    <div class="${project.id}">
      <div class="my-proj-img">
        <img src="${project.image}" alt="Project Screenshot" class="${project.imageclass}">
      </div>
      <div class="my-proj-det">
        <div class="my-proj-info">
          <div class="my-proj-title">
            <h3>${project.title}</h3>
          </div>
          <div class="my-proj-desc">
            <p class="my-proj-desc-p">
              ${project.description}
            </p>
          </div>
        </div>
        <div class="">
          <ul class="my-proj-tech">
              <li class="border-class">${project.technologyList[0]}</li>
              <li class="border-class">${project.technologyList[1]}</li>
              <li class="border-class">${project.technologyList[2]}</li>
              <li class="noborder">${project.technologyList[3]}</li>
          </ul>  
        </div>
        <div class="my-proj-btn">
          <button id="${project.id}" type="button" class="my-btn btn-primary">See Project</button>
        </div>
      </div>
    </div>
  `;

  projContainer.appendChild(container);
  const btn = document.getElementById(project.id);

  btn.addEventListener('click', () => {
    displayPopup(project.index);
  });
});

const contactForm = document.querySelector('#my-contact-form');
const emailAddress = document.getElementById('user-email');
const errorMessage = document.getElementById('form-email-error-message');

function validateEmail(emailAddress) {
  const validValues = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  if (validValues.test(emailAddress)) {
    return true;
  }
  return false;
}

contactForm.addEventListener('submit', (e) => {
  if (!validateEmail(emailAddress.value)) {
    errorMessage.innerHTML = 'Please, enter only lower case in e-mail address field !';
    e.preventDefault();
  } else {
    contactForm.submit();
  }
});

function storeData(userName, userEmail, userMessage) {
  const formData = {
    userName,
    userEmail,
    userMessage,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

contactForm.addEventListener('keyup', (e) => {
  e.preventDefault();
  const name = document.getElementById('user-name').value;
  const email = document.getElementById('user-email').value;
  const message = document.getElementById('user-message').value;
  storeData(name, email, message);
});

const getData = JSON.parse(localStorage.getItem('formData'));

window.onload = () => {
  if (getData != null) {
    document.getElementById('user-name').value = getData.userName;
    document.getElementById('user-email').value = getData.userEmail;
    document.getElementById('user-message').value = getData.userMessage;
  }
};