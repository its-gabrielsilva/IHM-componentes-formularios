class AulasComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.hoje = "ter";
  }

  connectedCallback() {
    this.loadData();
  }

  async loadData() {
    try {
      const response = await fetch('aulas.json');
      const aulas = await response.json();
      this.render(aulas);
    } catch (error) {
      console.error('Erro ao carregar os dados das aulas:', error);
    }
  }

  // Melhoria: devolve a cor do CR conforme a nota
  // < 6 vermelho | 6 <= nota < 8 laranja | >= 8 verde
  getCorNota(nota) {
    // O JSON traz a nota como string, então converte para número
    const valor = parseFloat(String(nota).replace(',', '.'));

    if (valor < 6) return '#d93025';   // vermelho
    if (valor < 8) return '#f29900';   // laranja
    return '#1e8e3e';                  // verde
  }

  render(aulas) {
    const aulasDia = aulas.filter(a => a.data === this.hoje);

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="styles_componente.css">
      <div>
        ${aulasDia.map(a => {
          let provaDisplay = a.prova_alert ? '' : 'display: none;';
          let corNota = this.getCorNota(a.nota);
          return `
            <div class="comp-aula">
              <div class="lable-prova p_lable" style="${provaDisplay}">PROVA: <b>${a.prova}</b></div>
              <div class="titulo_aula">${a.disciplina}</div>
              <p class="p">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
              <div class="lables">
                <div class="lable-frequencia p_lable">FALTAS: <b>${a.frequencia}</b></div>
                <div class="lable-nota p_lable" style="background-color: ${corNota};">CR: <b>${a.nota}</b></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
}

customElements.define('aulas-component', AulasComponent);
