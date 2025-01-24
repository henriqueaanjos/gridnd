<h1 align="center">
    <img alt="gridnd" title="Gridnd" src="./public/Logo.png" />
</h1>

<h3 align="center"> 
  Uma biblioteca para React que facilita a criação de grids interativos com widgets.  
</h3>

---

<p align="center">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/henriqueaanjos/gridnd?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/henriqueaanjos/gridnd">
	
  
  <a href="https://github.com/henriqueaanjos/gridnd/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/henriqueaanjos/gridnd">
  </a>
  

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/henriqueaanjos/gridnd/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/henriqueaanjos/gridnd?style=social">
  </a>
</p>

<p align="center">
  <a href="#-Funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Uso">Uso</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Documentação">Documentação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Demonstração">Demonstração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
  <a href="#-Contribuição">Contribuição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Licença">Licença</a>
</p>

## 🚀 Funcionalidades  
- 📦 **Widgets personalizáveis**: Crie um grid com itens de tamanhos variáveis (`sm`, `md`, `lg`, `xl`).  
- ↔️ **Arrastar e soltar**: Reordene os cards de forma simples com drag-and-drop.  
- 👁️ **Ocultar itens**: Cada card pode ser ocultado ou redimensionado.  

## 📦 Instalação  
```bash
npm install gridnd
# ou
yarn add gridnd
```
## 🛠️ Uso

```tsx
import { Droppable, Draggable, reorderItens } from 'gridnd'
import 'gridnd/style.css'

import { useState } from 'react';
import { Card, cards, CardProps } from '@/components/Card';


export default function Home() {
  const [widgets, setWidgets] = useState<CardProps[]>(cards);

  function handleDropMove(idOrigin: string, idDestiny: string) {
    const indexOrigin = widgets.findIndex(item => item.id.toString() === idOrigin);
    const indexDestiny = widgets.findIndex(item => item.id.toString() === idDestiny);
    
    const result = reorderItens(widgets, indexOrigin, indexDestiny);

    setWidgets(result);
  }

  return (
    <div className="w-screen h-screen bg-slate-900 p-4">
      <Droppable style={{ backgroundColor: '#1e293b' }}>   
        {widgets.map(item =>
          <Draggable
            key={item.id}
            id={item.id.toString()}
            size={item.size}
            onDragMove={handleDropMove}
            isSizingDynamic
            onHidden={() => {}}
          >
            <Card colorStyle={item.colorStyle} title={item.title}/>
          </Draggable>
        )}
      </Droppable>
    </div>
  );
}
```

## 📚 Documentação

### Props do componente <Droppable />:
Esse componente é a area de arraste dos objetos, ela é a responsável por organizar os itens em grid.

| Prop      | Tipo       | Descrição      |
| :------------ | :----------: | -----------: |
| Children     | ReactNode      | É necessário passarmos para dentro do <Droppable /> componentes filhos     |

### Props do componente <Draggable />:
Esse componente é o que torna os objetos arrastáveis.

| Prop      | Tipo       | Descrição      |
| :------------ | :----------: | -----------: |
| id       | String      | ID do componente a ser arrastado.     |
| size     | 'sm' ou 'md' ou 'lg' ou 'xl'    | Tamanho que o componente irá ocupar na grid    |
| onDragMove    |  (idOrigin: string, idDestiny: string) => void   | Função responsável por gerenciar o arraste dos itens   |
| onHidden (opcional)     | () => void  | Função responsável pelo clique em ocultar os cards    |
| isSizingDynamic (opcional)     | Boolean   | Verifica se o card pode alterar o tamanho   |
| availableSizes (opcional)    | ('sm' ou 'md' ou 'lg' ou 'xl')[]   | Representa os tamanhos que os cards podem ter  |
| Children     | ReactNode      | É necessário passarmos O Componente que desejamos que fique dentro do card    |


### Função reorder:
Essa função é uma função padrão para reordenação dos cards.

```tsx
export function reorderItens<T>(list: T[], indexOrigin: number, indexDestiny:number){
    const result = Array.from(list);
    const [removed] = result.splice(indexOrigin, 1);
    result.splice(indexDestiny, 0, removed);
  
    return result;
  }
```
## 🖼️ Demonstração

![gridnd](./public/demonstration.gif)

## 🏗️ Contribuição

Contribuições são bem-vindas! 

## 📄 Licença

Este projeto está sob a licença MIT.

---
<p align="center">
  by Henrique Anjos with ❤️
</p>
<p align="center">
  <a href="https://www.linkedin.com/in/henrique-aanjos">
    <img alt="Conecte-se comigo no LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white">
  </a>
  <a href="https://www.instagram.com/henriqueaanjos/">
    <img alt="Conecte-se comigo no Instagram" src="https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white">
  </a>
</p
