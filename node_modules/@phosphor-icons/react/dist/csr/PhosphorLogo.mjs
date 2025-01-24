var s = Object.defineProperty, f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? s(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    i.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      c.call(o, e) && m(r, e, o[e]);
  return r;
}, p = (r, o) => f(r, h(o));
import g, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/PhosphorLogo.mjs";
const w = n((r, o) => /* @__PURE__ */ g.createElement(d, p(a({ ref: o }, r), { weights: l })));
w.displayName = "PhosphorLogo";
export {
  w as PhosphorLogo
};
