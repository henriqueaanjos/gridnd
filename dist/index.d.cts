import * as react_jsx_runtime from 'react/jsx-runtime';
import { HTMLAttributes, ReactNode } from 'react';

interface DroppableProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
declare function Droppable({ children }: DroppableProps): react_jsx_runtime.JSX.Element;

type Size = 'sm' | 'md' | 'lg' | 'xl' | 'md' | 'lg' | 'xl';
interface DraggableProps {
    id: string;
    size: Size;
    children: ReactNode;
    onDragMove: (idOrigin: string, idDestiny: string) => void;
    onHidden?: () => void;
    isSizingDynamic?: boolean;
    availableSizes?: Size[];
}
declare function Draggable({ id, size, children, onDragMove, onHidden, isSizingDynamic, availableSizes, }: DraggableProps): react_jsx_runtime.JSX.Element;

declare function reorderItens<T>(list: T[], indexOrigin: number, indexDestiny: number): T[];

export { Draggable, Droppable, reorderItens };
