var a = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (o, e, s) => e in o ? a(o, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[e] = s, i = (o, e) => {
  for (var s in e || (e = {}))
    n.call(e, s) && r(o, s, e[s]);
  if (t)
    for (var s of t(e))
      p.call(e, s) && r(o, s, e[s]);
  return o;
}, m = (o, e) => c(o, f(e));
import u, { forwardRef as M } from "react";
import N from "../lib/IconBase.mjs";
import d from "../defs/MusicNotesMinus.mjs";
const l = M((o, e) => /* @__PURE__ */ u.createElement(N, m(i({ ref: e }, o), { weights: d })));
l.displayName = "MusicNotesMinus";
export {
  l as MusicNotesMinus
};
