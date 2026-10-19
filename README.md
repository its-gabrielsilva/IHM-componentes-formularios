# Componente de Aulas — Inatel

Projeto do módulo **Componentes e Formulários**: um Web Component personalizado que exibe dinamicamente as informações das aulas do dia a partir de um arquivo JSON, dentro de uma página inspirada no aplicativo do Inatel.

## O que o projeto faz

- Carrega as aulas do arquivo `aulas.json` com `fetch`.
- Exibe apenas as aulas do dia da semana definido na variável `hoje`.
- Mostra em cada cartão: disciplina, local, horário, faltas, CR (nota média) e data da prova.
- Exibe a faixa **PROVA** somente quando `prova_alert` é `true`.
- Muda a cor do **CR** conforme a nota:

| Nota | Cor |
|---|---|
| menor que 6 | vermelho |
| de 6 até menos de 8 | laranja |
| 8 ou mais | verde |

- A página também tem cabeçalho com a marca Inatel, saudação "Olá, Gabriel!" e um carrossel de eventos.

## Estrutura de arquivos

```
exercicio-aulas/
├── index.html              # Página principal (cabeçalho, saudação, componente e carrossel)
├── aulas.json              # Dados das aulas
├── script_componente.js    # Web Component <aulas-component>
├── script_pagina.js        # Carrossel de eventos
├── styles_componente.css   # Estilos do componente (shadow DOM)
├── styles_pagina.css       # Estilos da página
└── README.md
```

## Conceitos aplicados

- **Custom Elements** (`class AulasComponent extends HTMLElement` e `customElements.define`)
- **Shadow DOM** (`attachShadow`) com CSS isolado do restante da página
- **Template literals** para gerar o HTML dinamicamente
- **Consumo de JSON** com `fetch` e `async/await`
- **Estilização condicional** (faixa de prova e cor do CR)

## Autor: 

Gabriel Silva Lopes

## Licença

Trabalho acadêmico desenvolvido para fins educacionais.
