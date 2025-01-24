'use client'
import { Card } from '@/components/Card';
import { Droppable, Draggable, reorderItens } from 'gridnd'
import 'gridnd/style.css'
import { useState } from 'react';

export type CardProps = {
  id: number,
  title: string,
  size: 'sm' | 'md' | 'lg' | 'xl',
  colorStyle: number,
}

const cards: CardProps[] = [
  {
    id: 1,
    title: "Card 1",
    size: 'sm',
    colorStyle: 1, 
  }, {
    id: 2,
    title: "Card 2",
    size: 'md',
    colorStyle: 2, 
  }, {
    id: 3,
    title: "Card 3",
    size: 'lg',
    colorStyle:3
  }, {
    id: 4,
    title: "Card 4",
    size: 'sm',
    colorStyle:4
  }, {
    id: 5,
    title: "Card 5",
    size: 'sm',
    colorStyle:5
  },{
    id: 6,
    title: "Card 6",
    size: 'sm',
    colorStyle:6
  }, {
    id: 7,
    title: "Card 7",
    size: 'sm',
    colorStyle:7
  }, {
    id: 8,
    title: "Card 8",
    size: 'sm',
    colorStyle:8
  }, {
    id: 9,
    title: "Card 9",
    size: 'sm',
    colorStyle:9
  }, {
    id: 10,
    title: "Card 10",
    size: 'sm',
    colorStyle:10
  }

]

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
