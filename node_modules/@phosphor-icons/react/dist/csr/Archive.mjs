var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      h.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, p(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import v from "../defs/Archive.mjs";
const w = d((r, e) => /* @__PURE__ */ n.createElement(l, i(a({ ref: e }, r), { weights: v })));
w.displayName = "Archive";
export {
  w as Archive
};
