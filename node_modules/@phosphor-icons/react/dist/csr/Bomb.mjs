var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (e, o, m) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, a = (e, o) => {
  for (var m in o || (o = {}))
    c.call(o, m) && t(e, m, o[m]);
  if (r)
    for (var m of r(o))
      n.call(o, m) && t(e, m, o[m]);
  return e;
}, f = (e, o) => p(e, s(o));
import B, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Bomb.mjs";
const w = b((e, o) => /* @__PURE__ */ B.createElement(d, f(a({ ref: o }, e), { weights: l })));
w.displayName = "Bomb";
export {
  w as Bomb
};
