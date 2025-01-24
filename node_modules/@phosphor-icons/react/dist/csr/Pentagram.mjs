var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, o = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && m(r, a, e[a]);
  if (t)
    for (var a of t(e))
      c.call(e, a) && m(r, a, e[a]);
  return r;
}, f = (r, e) => n(r, p(e));
import g, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Pentagram.mjs";
const I = d((r, e) => /* @__PURE__ */ g.createElement(l, f(o({ ref: e }, r), { weights: w })));
I.displayName = "Pentagram";
export {
  I as Pentagram
};
