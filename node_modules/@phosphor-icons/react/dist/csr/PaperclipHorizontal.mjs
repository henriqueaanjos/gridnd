var m = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? m(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, i = (r, o) => {
  for (var e in o || (o = {}))
    f.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      n.call(o, e) && t(r, e, o[e]);
  return r;
}, p = (r, o) => c(r, l(o));
import s, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import z from "../defs/PaperclipHorizontal.mjs";
const H = d((r, o) => /* @__PURE__ */ s.createElement(w, p(i({ ref: o }, r), { weights: z })));
H.displayName = "PaperclipHorizontal";
export {
  H as PaperclipHorizontal
};
