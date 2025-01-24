var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      w.call(e, o) && t(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/CraneTower.mjs";
const C = R((r, e) => /* @__PURE__ */ c.createElement(d, f(m({ ref: e }, r), { weights: l })));
C.displayName = "CraneTower";
export {
  C as CraneTower
};
