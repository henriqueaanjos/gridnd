var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var r = (o, e, s) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[e] = s, m = (o, e) => {
  for (var s in e || (e = {}))
    p.call(e, s) && r(o, s, e[s]);
  if (t)
    for (var s of t(e))
      l.call(e, s) && r(o, s, e[s]);
  return o;
}, a = (o, e) => c(o, f(e));
import u, { forwardRef as n } from "react";
import N from "../lib/IconBase.mjs";
import d from "../defs/MusicNotesPlus.mjs";
const w = n((o, e) => /* @__PURE__ */ u.createElement(N, a(m({ ref: e }, o), { weights: d })));
w.displayName = "MusicNotesPlus";
export {
  w as MusicNotesPlus
};
