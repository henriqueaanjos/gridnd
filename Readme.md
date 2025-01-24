<h1 align="center">
    <img alt="gridnd" title="Gridnd" src="./public/Logo.png" />
</h1>

<h3 align="center"> 
  A library for React that simplifies the creation of interactive grids with widgets.  
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
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-usage">Usage</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-documentation">Documentation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-demonstration">Demonstration</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
  <a href="#-contribution">Contribution</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 🚀 Features  
- 📦 **Customizable widgets**: Create a grid with items of variable sizes (`sm`, `md`, `lg`, `xl`).  
- ↔️ **Drag and drop**: Easily reorder cards with drag-and-drop functionality.  
- 👁️ **Hide items**: Each card can be hidden or resized.  

## 📦 Installation  
```bash
npm install gridnd
# or
yarn add gridnd
```

## 🛠️ Usage

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

## 📚 Documentation

### Props of the <Droppable /> component:
This component is the drag area, responsible for organizing the items into a grid.

|Prop  |	Type |	Description|
|:-----:|:------------:|:----------|
|Children|	ReactNode|	You need to pass child components inside <Droppable />|

### Props of the <Draggable /> component:
This component makes the objects draggable.

|Prop|	Type|	Description|
|:-----:|:------------:|:----------|
|id |	String|	ID of the component to be dragged.|
|size|	'sm' or 'md' or 'lg' or 'xl'|	Size the component will occupy in the grid|
|onDragMove |	(idOrigin: string, idDestiny: string) => void|	Function responsible for managing the drag-and-drop of items|
|onHidden (optional) |	() => void|	Function triggered when hiding cards|
|isSizingDynamic (optional) |	Boolean|	Checks if the card can change its size|
|availableSizes (optional) |	('sm' or 'md' or 'lg' or 'xl')[]|	Represents the sizes that cards can have|
|Children |	ReactNode|	The component you want to place inside the card must be passed here|

### Reorder function:
This function is a standard function for reordering cards.

```ts
export function reorderItens<T>(list: T[], indexOrigin: number, indexDestiny:number){
    const result = Array.from(list);
    const [removed] = result.splice(indexOrigin, 1);
    result.splice(indexDestiny, 0, removed);
  
    return result;
  }
```
## 🖼️ Demonstration

![gridnd](./public/demonstration.gif)

## 🏗️ Contribution

Contributions are welcome!

## 📄 License
This project is under the MIT license.

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
