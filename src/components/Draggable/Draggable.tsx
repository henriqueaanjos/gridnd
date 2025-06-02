'use client'
import {  ReactNode, useCallback, useEffect,  useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { ArrowsOutSimple, DotsThree, EyeClosed } from "@phosphor-icons/react";
import { motion, PanInfo } from "motion/react";

type Size = 'sm' | 'md' | 'lg' | 'xl' | 'md' | 'lg' | 'xl';

interface DraggableProps {
    id: string,
    size: Size,
    children: ReactNode,
    onDragMove: (idOrigin: string, idDestiny: string) => void,
    onHidden?: () => void,
    isSizingDynamic?: boolean,
    availableSizes?: Size[],
    language?: 'pt-BR' | 'en-US',
}

export function Draggable({ id, size, children, onDragMove, onHidden, isSizingDynamic, availableSizes = ['sm', 'md', 'lg', 'xl'], language = 'en-US' }: DraggableProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [sizing, setSizing] = useState<Size>(size);
    const [availableOptionSizes, setAvailableOptionSizes] = useState<Size[]>(availableSizes);

    function handleDragStart() {
        setIsDragging(true);
    }

    function handleDrag(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
        const { x, y } = info.point;
        if (x === 0 && y === 0) return;

        const allCards = document.querySelectorAll('[data-draggable]');
        allCards.forEach((card) => {
            if (card.id === id) return;
            const data = card.getBoundingClientRect();
            if ((x > data.x && x < (data.x + data.width)) && (y > data.y && y < (data.y + data.height))) {
                onDragMove(id, card.id)
            }
        })
    };

    function handleDragEnd(){
        setIsDragging(false);
    }

    function handleChangeSizing(value: string) {
        setSizing(value as Size);
    }

    const handleWindowsSize = useCallback(() => {
        const dimension = window.innerWidth;
        if (dimension < 768) {
            setAvailableOptionSizes(old => old?.filter(item => (item === 'xl' || item === 'md')));
            if (sizing === 'xl') {
                setSizing('lg');
            } if (sizing === 'md') {
                setSizing('md');
            }
        }
    }, [sizing])

    useEffect(() => {
        handleWindowsSize();
        window.addEventListener("resize", handleWindowsSize)
        return () => window.removeEventListener("resize", handleWindowsSize)
    }, [handleWindowsSize])

    return (
        <motion.div
            className={` rounded-2xl shadow-lg cursor-pointer flex w-full bg-slate-900 bg-opacity-50
            hover:shadow-xl hover:scale-[1.02] hover:bg-text-500 
            ${sizing === "sm" && "aspect-square"}
            ${sizing === "md" && "col-span-2 row-span-1 aspect-[2/1]"}
            ${sizing === "lg" && "col-span-2 row-span-2 aspect-square"}
            ${sizing === "xl" && "col-span-4 row-span-2 aspect-[2/1]"}
        `}
            transition={{
                layout: {
                    duration: 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                },
            }}
            layout
        >
            <motion.div
                drag
                dragMomentum={false}
                onDragStart={handleDragStart}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                dragConstraints={{ left: -0, right: -0, top: -0, bottom: -0 }}
                className={`w-full z-[2] rounded-2xl flex justify-center ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                id={id}
                transition={{
                    duration: 0.1,
                    type: "spring",
                    stiffness: 500,
                    damping: 20
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => { if (!isMenuOpen) setIsHover(false) }}
                data-draggable

            >
                {children}

                {isHover && (onHidden || isSizingDynamic) &&
                    <DropdownMenu onOpenChange={() => setIsMenuOpen(old => !old)}>
                        <DropdownMenuTrigger
                            className="absolute mt-2 z-[3] hover:bg-slate-50 hover:bg-opacity-20 rounded-md"
                        >
                            <DotsThree size="1.5rem" className="text-white" weight="bold" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="z-[4]">
                            {onHidden &&
                                <>
                                    <DropdownMenuItem
                                        className="flex flex-row gap-2 items-center justify-start"
                                        onClick={onHidden}
                                    >
                                        <EyeClosed size="1rem" /> 
                                        {language === 'pt-BR'? 'Ocultar Card' : 'Hidden Card'}
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                </>
                            }
                            {isSizingDynamic &&
                                <>
                                    <DropdownMenuLabel className="flex flex-row gap-2 items-center justify-start">
                                        <ArrowsOutSimple size="1rem" /> Size
                                    </DropdownMenuLabel>
                                    <DropdownMenuRadioGroup value={sizing} onValueChange={handleChangeSizing}>
                                        <DropdownMenuRadioItem
                                            value="sm"
                                            disabled={!availableOptionSizes.includes('sm')}
                                        >
                                            {language === 'pt-BR'? 'Pequeno(sm)' : 'Small(sm)'}
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem
                                            value="md"
                                            disabled={!availableOptionSizes.includes('sm')}
                                        >
                                            {language === 'pt-BR'? 'Médio(md)' : 'Medium(md)'}
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem
                                            value="lg"
                                            disabled={!availableOptionSizes.includes('sm')}
                                        >
                                            {language === 'pt-BR'? 'Grande(lg)' : 'Larger(lg)'}
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem
                                            value="xl"
                                            disabled={!availableOptionSizes.includes('sm')}
                                        >
                                            {language === 'pt-BR'? 'Extra Grande(xl)' : 'Extra Larger(xl)'}
                                        </DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </>
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                }
                {/* </div> */}
            </motion.div>
        </motion.div>
    )
}