import './styles/globals.css'

export function reorderItens<T>(list: T[], indexOrigin: number, indexDestiny:number){
    const result = Array.from(list);
    const [removed] = result.splice(indexOrigin, 1);
    result.splice(indexDestiny, 0, removed);
  
    return result;
  }


export * from "./components/Droppable";
export * from "./components/Draggable";
