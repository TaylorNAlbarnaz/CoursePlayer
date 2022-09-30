import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModuleContainer, Module} from './components';
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModuleContainer>
    <Module
      id="1"
      title="Título do Módulo 1"
      time="21min em 4 aulas"
      info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum 
      velit vitae libero aliquet, et gravida erat fringilla. Fusce consequat tincidunt 
      diam a venenatis. Donec euismod neque in enim gravida, vitae iaculis nisi aliquam. 
      Etiam tristique sit amet ipsum et eleifend."
    />

<Module
      id="2"
      title="Título do Módulo 2"
      time="34min em 3 aulas"
      info="Lorem ipsum dolor sit amet, Morbi tristique ligula eu maximus tempor. 
      Vivamus pellentesque neque quis sem aliquet porttitor. Duis molestie metus maximus dui molestie, 
      vel euismod ligula iaculis. Maecenas quis urna quis purus sagittis posuere nec eget magna. 
      Maecenas lacinia at tortor at sollicitudin."
    />

<Module
      id="3"
      title="Título do Módulo 3"
      time="14min em 1 aula"
      info="Lorem ipsum dolor sit amet, Duis nec metus nec nisl blandit lobortis. 
      Phasellus non finibus nisl, ac tincidunt tortor. Proin at risus ac eros tincidunt facilisis. 
      Donec lobortis tellus massa, at vestibulum justo egestas ac. In lacinia fermentum condimentum. 
      Nulla facilisi. Mauris sagittis."
    />
  </ModuleContainer>
);