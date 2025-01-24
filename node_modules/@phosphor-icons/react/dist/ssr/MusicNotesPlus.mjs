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
import u, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/MusicNotesPlus.mjs";
const n = N((o, e) => /* @__PURE__ */ u.createElement(R, a(m({ ref: e }, o), { weights: d })));
n.displayName = "MusicNotesPlus";
export {
  n as MusicNotesPlus
};
