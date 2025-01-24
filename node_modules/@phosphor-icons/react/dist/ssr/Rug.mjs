var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    R.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import g, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Rug.mjs";
const u = d((r, e) => /* @__PURE__ */ g.createElement(l, f(a({ ref: e }, r), { weights: n })));
u.displayName = "Rug";
export {
  u as Rug
};
