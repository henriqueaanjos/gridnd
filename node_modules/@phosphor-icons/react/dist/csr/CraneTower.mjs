var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, f = (r, e) => n(r, p(e));
import w, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import C from "../defs/CraneTower.mjs";
const I = d((r, e) => /* @__PURE__ */ w.createElement(l, f(m({ ref: e }, r), { weights: C })));
I.displayName = "CraneTower";
export {
  I as CraneTower
};
