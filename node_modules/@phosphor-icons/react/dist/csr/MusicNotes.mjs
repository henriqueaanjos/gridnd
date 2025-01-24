var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var s = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && s(o, t, e[t]);
  if (r)
    for (var t of r(e))
      n.call(e, t) && s(o, t, e[t]);
  return o;
}, a = (o, e) => c(o, f(e));
import N, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/MusicNotes.mjs";
const w = d((o, e) => /* @__PURE__ */ N.createElement(l, a(m({ ref: e }, o), { weights: u })));
w.displayName = "MusicNotes";
export {
  w as MusicNotes
};
