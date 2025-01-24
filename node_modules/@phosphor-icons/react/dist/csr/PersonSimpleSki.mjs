var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && i(o, r, e[r]);
  if (m)
    for (var r of m(e))
      c.call(e, r) && i(o, r, e[r]);
  return o;
}, a = (o, e) => s(o, f(e));
import l, { forwardRef as S } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/PersonSimpleSki.mjs";
const w = S((o, e) => /* @__PURE__ */ l.createElement(d, a(t({ ref: e }, o), { weights: k })));
w.displayName = "PersonSimpleSki";
export {
  w as PersonSimpleSki
};
