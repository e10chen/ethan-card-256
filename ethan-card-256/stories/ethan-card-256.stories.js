import { html } from 'lit';
import '../src/ethan-card-256.js';

export default {
  title: 'EthanCard256',
  component: 'ethan-card-256',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <ethan-card-256
      style="--ethan-card-256-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </ethan-card-256>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
