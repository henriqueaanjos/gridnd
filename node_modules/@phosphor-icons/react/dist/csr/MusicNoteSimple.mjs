var p = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var r = (o, e, t) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, i = (o, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && r(o, t, e[t]);
  if (m)
    for (var t of m(e))
      l.call(e, t) && r(o, t, e[t]);
  return o;
}, a = (o, e) => s(o, c(e));
import n, { forwardRef as N } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/MusicNoteSimple.mjs";
const w = N((o, e) => /* @__PURE__ */ n.createElement(d, a(i({ ref: e }, o), { weights: u })));
w.displayName = "MusicNoteSimple";
export {
  w as MusicNoteSimple
};
