var p = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? p(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      l.call(o, e) && t(r, e, o[e]);
  return r;
}, f = (r, o) => i(r, s(o));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import D from "../defs/DropHalf.mjs";
const H = d((r, o) => /* @__PURE__ */ n.createElement(w, f(m({ ref: o }, r), { weights: D })));
H.displayName = "DropHalf";
export {
  H as DropHalf
};
