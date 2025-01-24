var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    l.call(e, t) && a(o, t, e[t]);
  if (r)
    for (var t of r(e))
      n.call(e, t) && a(o, t, e[t]);
  return o;
}, f = (o, e) => p(o, s(e));
import c, { forwardRef as B } from "react";
import N from "../lib/SSRBase.mjs";
import R from "../defs/NoteBlank.mjs";
const d = B((o, e) => /* @__PURE__ */ c.createElement(N, f(m({ ref: e }, o), { weights: R })));
d.displayName = "NoteBlank";
export {
  d as NoteBlank
};
