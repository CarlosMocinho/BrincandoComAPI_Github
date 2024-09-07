async function fetchGitHubUserData(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const userData = await response.json();
  return userData;
}

async function createCard(userData) {


  //
  const card = document.createElement('div');
  card.classList.add('Card');

  const foto = document.createElement('div');
  foto.classList.add('foto');

  const info = document.createElement('div');
  info.classList.add('Info');

  const cxbotao = document.createElement('div');
  cxbotao.classList.add('cxbotao');

  const botao = document.createElement('button');
  botao.classList.add('botao'); // Adicionar classe
  botao.textContent = 'Olhar mais Perto'; // oque vai aparecer no botão
  botao.addEventListener('click', () => { // adicionar ação quando clicar
    window.open(userData.html_url); // abre o perfil
  });


  //define a foto como background
  foto.style.backgroundImage = `url(${userData.avatar_url})`;
  card.appendChild(foto);

  //criar elementos do info
  const login = document.createElement('h1');
  login.textContent = userData.login;
  const nome = document.createElement('h1');
  nome.textContent = userData.name;
  const bio = document.createElement('h1');
  bio.textContent = userData.bio;


  //criação dos bgls dentro do html
  info.appendChild(login);
  info.appendChild(bio);
  card.appendChild(info);
  card.appendChild(cxbotao);
  cxbotao.appendChild(botao);



  const container = document.querySelector('.container');
  container.appendChild(card);
}

async function main() {
  const userNames = ['CarlosMocinho', 'zCaio79', 'Paulo-VieiraDev', 'matheusribeiroavila', 'EduardaCicatt0'];

  for (const username of userNames) {
    const userData = await fetchGitHubUserData(username);
    createCard(userData);
  }
}

main();