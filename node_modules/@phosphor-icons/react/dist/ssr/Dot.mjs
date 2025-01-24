var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      R.call(o, e) && m(t, e, o[e]);
  return t;
}, f = (t, o) => p(t, s(o));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Dot.mjs";
const D = l((t, o) => /* @__PURE__ */ d.createElement(n, f(a({ ref: o }, t), { weights: w })));
D.displayName = "Dot";
export {
  D as Dot
};
