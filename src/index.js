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
      time="21min em 4 aulas"
      info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum 
      velit vitae libero aliquet, et gravida erat fringilla. Fusce consequat tincidunt 
      diam a venenatis. Donec euismod neque in enim gravida, vitae iaculis nisi aliquam. 
      Etiam tristique sit amet ipsum et eleifend."
    />
  </ModuleContainer>
);