var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && a(o, t, e[t]);
  if (r)
    for (var t of r(e))
      c.call(e, t) && a(o, t, e[t]);
  return o;
}, f = (o, e) => n(o, p(e));
import l, { forwardRef as B } from "react";
import N from "../lib/IconBase.mjs";
import d from "../defs/NoteBlank.mjs";
const k = B((o, e) => /* @__PURE__ */ l.createElement(N, f(m({ ref: e }, o), { weights: d })));
k.displayName = "NoteBlank";
export {
  k as NoteBlank
};
