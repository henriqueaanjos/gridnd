var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      c.call(o, e) && m(r, e, o[e]);
  return r;
}, f = (r, o) => n(r, p(o));
import w, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import C from "../defs/Crown.mjs";
const I = d((r, o) => /* @__PURE__ */ w.createElement(l, f(a({ ref: o }, r), { weights: C })));
I.displayName = "Crown";
export {
  I as Crown
};
