// Dados do carrossel de eventos (as "fotos" são gradientes, sem imagens externas)
const eventos = [
  {
    titulo: "Campus Flow 2026",
    descricao: "A Festa dos Alunos mudou. Entre no Flow, o resto fica pra depois!",
    data: "19/08 às 15:00",
    local: "Área de Convivência",
    fundo: "radial-gradient(circle at 20% 30%, #ff2bd6 0%, transparent 35%), radial-gradient(circle at 80% 25%, #19e3ff 0%, transparent 35%), radial-gradient(circle at 50% 80%, #7b2cff 0%, transparent 45%), #12062b"
  },
  {
    titulo: "Semana das Engenharias de Computação e Software",
    descricao: "Palestras, oficinas e hackathon com empresas parceiras do Inatel.",
    data: "13/05 à 17/05",
    local: "Campus Inatel",
    fundo: "radial-gradient(circle at 25% 25%, #126ae2 0%, transparent 40%), radial-gradient(circle at 80% 70%, #19e3ff 0%, transparent 40%), #061a3d"
  },
  {
    titulo: "Interpanelas",
    descricao: "Futsal, vôlei e e-sports. Monte seu time e participe!",
    data: "16/05 à 17/05",
    local: "Área Esportiva",
    fundo: "radial-gradient(circle at 30% 70%, #1e8e3e 0%, transparent 40%), radial-gradient(circle at 75% 30%, #f29900 0%, transparent 40%), #0e2a17"
  }
];

const slidesEl = document.getElementById('slides');
const tituloEl = document.getElementById('evento-titulo');
const descricaoEl = document.getElementById('evento-descricao');
const dataEl = document.getElementById('evento-data');
const localEl = document.getElementById('evento-local');

let atual = 0;
let timer;

// Cria um slide para cada evento
eventos.forEach(e => {
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.style.background = e.fundo;
  slidesEl.appendChild(slide);
});

function mostrar(indice) {
  atual = (indice + eventos.length) % eventos.length;
  slidesEl.style.transform = `translateX(-${atual * 100}%)`;

  const e = eventos[atual];
  tituloEl.textContent = e.titulo;
  descricaoEl.textContent = e.descricao;
  dataEl.textContent = e.data;
  localEl.textContent = e.local;
}

function reiniciarTimer() {
  clearInterval(timer);
  timer = setInterval(() => mostrar(atual + 1), 5000);
}

document.getElementById('anterior').addEventListener('click', () => {
  mostrar(atual - 1);
  reiniciarTimer();
});

document.getElementById('proximo').addEventListener('click', () => {
  mostrar(atual + 1);
  reiniciarTimer();
});

mostrar(0);
reiniciarTimer();
