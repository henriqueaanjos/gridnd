var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(r, o, e[o]);
  if (i)
    for (var o of i(e))
      l.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => f(r, p(e));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import v from "../defs/FileArchive.mjs";
const w = n((r, e) => /* @__PURE__ */ h.createElement(d, a(m({ ref: e }, r), { weights: v })));
w.displayName = "FileArchive";
export {
  w as FileArchive
};
