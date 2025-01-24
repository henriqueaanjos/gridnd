var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && r(o, t, e[t]);
  if (m)
    for (var t of m(e))
      c.call(e, t) && r(o, t, e[t]);
  return o;
}, s = (o, e) => i(o, n(e));
import l, { forwardRef as x } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/TextColumns.mjs";
const w = x((o, e) => /* @__PURE__ */ l.createElement(d, s(a({ ref: e }, o), { weights: u })));
w.displayName = "TextColumns";
export {
  w as TextColumns
};
