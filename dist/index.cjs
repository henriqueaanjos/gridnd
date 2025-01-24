"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  Draggable: () => Draggable,
  Droppable: () => Droppable,
  reorderItens: () => reorderItens
});
module.exports = __toCommonJS(index_exports);

// src/components/Droppable/Droppable.tsx
var import_react = require("motion/react");
var import_react2 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function Droppable({ children }) {
  const dropRef = (0, import_react2.useRef)(null);
  function handleDragOver(e) {
    e.preventDefault();
  }
  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react.motion.div,
    {
      className: "relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 w-full bg-transparent rounded-2xl p-4 gap-2 items-start justify-start",
      ref: dropRef,
      layout: true,
      onDrop: handleDrop,
      onDragOver: handleDragOver,
      children
    }
  );
}

// src/components/Draggable/Draggable.tsx
var import_react3 = require("react");

// src/components/ui/dropdown-menu.tsx
var React = __toESM(require("react"), 1);
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"), 1);
var import_lucide_react = require("lucide-react");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/dropdown-menu.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/Draggable/Draggable.tsx
var import_react4 = require("@phosphor-icons/react");
var import_react5 = require("motion/react");
var import_jsx_runtime3 = require("react/jsx-runtime");
function Draggable({ id, size, children, onDragMove, onHidden, isSizingDynamic, availableSizes = ["sm", "md", "lg", "xl"] }) {
  const [isDragging, setIsDragging] = (0, import_react3.useState)(false);
  const [isHover, setIsHover] = (0, import_react3.useState)(false);
  const [isMenuOpen, setIsMenuOpen] = (0, import_react3.useState)(false);
  const [sizing, setSizing] = (0, import_react3.useState)(size);
  const [availableOptionSizes, setAvailableOptionSizes] = (0, import_react3.useState)(availableSizes);
  function handleDragStart() {
    setIsDragging(true);
  }
  function handleDrag(event, info) {
    const { x, y } = info.point;
    if (x === 0 && y === 0) return;
    const allCards = document.querySelectorAll("[data-draggable]");
    allCards.forEach((card) => {
      if (card.id === id) return;
      const data = card.getBoundingClientRect();
      if (x > data.x && x < data.x + data.width && (y > data.y && y < data.y + data.height)) {
        onDragMove(id, card.id);
      }
    });
  }
  ;
  function handleDragEnd() {
    setIsDragging(false);
  }
  function handleChangeSizing(value) {
    setSizing(value);
  }
  const handleWindowsSize = (0, import_react3.useCallback)(() => {
    const dimension = window.innerWidth;
    if (dimension < 768) {
      setAvailableOptionSizes((old) => old?.filter((item) => item === "xl" || item === "md"));
      if (sizing === "xl") {
        setSizing("lg");
      }
      if (sizing === "md") {
        setSizing("md");
      }
    }
  }, [sizing]);
  (0, import_react3.useEffect)(() => {
    handleWindowsSize();
    window.addEventListener("resize", handleWindowsSize);
    return () => window.removeEventListener("resize", handleWindowsSize);
  }, [handleWindowsSize]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_react5.motion.div,
    {
      className: ` rounded-2xl shadow-lg cursor-pointer flex w-full bg-slate-900 bg-opacity-50
            hover:shadow-xl hover:scale-[1.02] hover:bg-text-500 
            ${sizing === "sm" && "aspect-square"}
            ${sizing === "md" && "col-span-2 row-span-1 aspect-[2/1]"}
            ${sizing === "lg" && "col-span-2 row-span-2 aspect-square"}
            ${sizing === "xl" && "col-span-4 row-span-2 aspect-[2/1]"}
        `,
      transition: {
        layout: {
          duration: 0.1,
          type: "spring",
          stiffness: 200,
          damping: 20
        }
      },
      layout: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        import_react5.motion.div,
        {
          drag: true,
          dragMomentum: false,
          onDragStart: handleDragStart,
          onDrag: handleDrag,
          onDragEnd: handleDragEnd,
          dragConstraints: { left: -0, right: -0, top: -0, bottom: -0 },
          className: `w-full z-[2] rounded-2xl flex justify-center ${isDragging ? "cursor-grabbing" : "cursor-grab"}`,
          id,
          transition: {
            duration: 0.1,
            type: "spring",
            stiffness: 500,
            damping: 20
          },
          onMouseEnter: () => setIsHover(true),
          onMouseLeave: () => {
            if (!isMenuOpen) setIsHover(false);
          },
          "data-draggable": true,
          children: [
            children,
            isHover && (onHidden || isSizingDynamic) && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(DropdownMenu, { onOpenChange: () => setIsMenuOpen((old) => !old), children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                DropdownMenuTrigger,
                {
                  className: "absolute mt-2 z-[3] hover:bg-slate-50 hover:bg-opacity-20 rounded-md",
                  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.DotsThree, { size: "1.5rem", className: "text-white", weight: "bold" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(DropdownMenuContent, { className: "z-[4]", children: [
                onHidden && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                    DropdownMenuItem,
                    {
                      className: "flex flex-row gap-2 items-center justify-start",
                      onClick: onHidden,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.EyeClosed, { size: "1rem" }),
                        " Hidden Card"
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenuSeparator, {})
                ] }),
                isSizingDynamic && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(DropdownMenuLabel, { className: "flex flex-row gap-2 items-center justify-start", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.ArrowsOutSimple, { size: "1rem" }),
                    " Size"
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(DropdownMenuRadioGroup, { value: sizing, onValueChange: handleChangeSizing, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      DropdownMenuRadioItem,
                      {
                        value: "sm",
                        disabled: !availableOptionSizes.includes("sm"),
                        children: "Small(sm)"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      DropdownMenuRadioItem,
                      {
                        value: "md",
                        disabled: !availableOptionSizes.includes("sm"),
                        children: "Medium(md)"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      DropdownMenuRadioItem,
                      {
                        value: "lg",
                        disabled: !availableOptionSizes.includes("sm"),
                        children: "Larger(lg)"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      DropdownMenuRadioItem,
                      {
                        value: "xl",
                        disabled: !availableOptionSizes.includes("sm"),
                        children: "Extra Larger(xl)"
                      }
                    )
                  ] })
                ] })
              ] })
            ] })
          ]
        }
      )
    }
  );
}

// src/index.tsx
function reorderItens(list, indexOrigin, indexDestiny) {
  const result = Array.from(list);
  const [removed] = result.splice(indexOrigin, 1);
  result.splice(indexDestiny, 0, removed);
  return result;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Draggable,
  Droppable,
  reorderItens
});
//# sourceMappingURL=index.cjs.map