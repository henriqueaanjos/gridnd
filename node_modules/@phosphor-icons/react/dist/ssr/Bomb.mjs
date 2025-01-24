var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var t = (e, o, m) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, a = (e, o) => {
  for (var m in o || (o = {}))
    c.call(o, m) && t(e, m, o[m]);
  if (r)
    for (var m of r(o))
      B.call(o, m) && t(e, m, o[m]);
  return e;
}, f = (e, o) => p(e, s(o));
import R, { forwardRef as b } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Bomb.mjs";
const n = b((e, o) => /* @__PURE__ */ R.createElement(d, f(a({ ref: o }, e), { weights: l })));
n.displayName = "Bomb";
export {
  n as Bomb
};
