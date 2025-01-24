var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => n(r, p(e));
import k, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/LinkBreak.mjs";
const w = B((r, e) => /* @__PURE__ */ k.createElement(d, i(m({ ref: e }, r), { weights: l })));
w.displayName = "LinkBreak";
export {
  w as LinkBreak
};
