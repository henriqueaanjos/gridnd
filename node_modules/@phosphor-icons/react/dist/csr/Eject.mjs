var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && m(t, o, e[o]);
  return t;
}, c = (t, e) => i(t, p(e));
import E, { forwardRef as d } from "react";
import j from "../lib/IconBase.mjs";
import l from "../defs/Eject.mjs";
const w = d((t, e) => /* @__PURE__ */ E.createElement(j, c(a({ ref: e }, t), { weights: l })));
w.displayName = "Eject";
export {
  w as Eject
};
