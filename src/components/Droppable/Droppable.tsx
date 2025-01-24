'use client'
import { motion } from "motion/react";
import { HTMLAttributes, ReactNode, useRef } from "react"

interface DroppableProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export function Droppable({ children }: DroppableProps) {
    const dropRef = useRef<HTMLDivElement>(null);
    function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
    }

    function handleDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <motion.div
            className="relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 w-full bg-transparent rounded-2xl p-4 gap-2 items-start justify-start"
            ref={dropRef}
            layout
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {children}
        </motion.div>
    )
}