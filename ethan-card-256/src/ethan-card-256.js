import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class EthanCard256 extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    :host {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
    body {
      background: cyan;
    }
    .all {
      border-style: solid;
      border-radius: 20px;
      text-align: center;
      padding: 20px;
      border-width: 5px;
      width: 300px;
      max-width: 500px;
      margin: auto;
      background-color: coral;
      margin-top: 10px;
    }
    .text {
      text-indent: 5%;
      font-size: 16px;
      color: blue;
    }
    .title {
      font-size: 40px;
    }
    .buttons {
      text-align: center;
      padding: 5px;
    }
    .detailButton {
      margin: 1px;
      position: center;
    }

    button:hover,
    buttons:focus {
      background-color: yellow;
    }
    .picture {
      border-radius: 10px;
      border: solid white;
      width: 300px;
    }
    @media (min-width: 500px) and (max-width: 800px) {
      .detailButton {
        display: none;
      }
    }
    @media (max-width: 500px) {
      .all {
        transform: scale(0.8);
      }
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
        <div class="buttons">
          <button class="copy">Copy</button>

          <button class="toggleBackGroundColor">Change Background Color</button>

          <button class="changeTitle">Change Title</button>

          <button class="deleteButton">Delete Last Instance</button>
        </div>

        <div class="all">
          <h1 class="title">Ethan Chen</h1>
          <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
          <p class="text">
            The image above is a Tacoma pickup truck made by the Japanese
            automaker Toyota. Toyota has been making the Tacoma pickup truck
            since 1995. The Tacoma has two engines options: 2.7-liter 4-Cylinder
            and the 3.5-liter V6. It has a miles per gallon of 20 in the city
            and 23 on the highway.
          </p>
          <button class="detailButton">Detail</button>
        </div>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('ethan-card-256', EthanCard256);
