var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? s(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      l.call(o, e) && t(r, e, o[e]);
  return r;
}, p = (r, o) => f(r, i(o));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/DropSlash.mjs";
const D = n((r, o) => /* @__PURE__ */ h.createElement(d, p(m({ ref: o }, r), { weights: w })));
D.displayName = "DropSlash";
export {
  D as DropSlash
};
