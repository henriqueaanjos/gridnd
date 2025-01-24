var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      n.call(e, t) && m(o, t, e[t]);
  return o;
}, i = (o, e) => c(o, f(e));
import N, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/MusicNote.mjs";
const w = d((o, e) => /* @__PURE__ */ N.createElement(l, i(a({ ref: e }, o), { weights: u })));
w.displayName = "MusicNote";
export {
  w as MusicNote
};
