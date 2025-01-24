var p = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var i = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && i(r, o, e[o]);
  if (m)
    for (var o of m(e))
      f.call(e, o) && i(r, o, e[o]);
  return r;
}, a = (r, e) => s(r, c(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/PersonSimpleCircle.mjs";
const I = d((r, e) => /* @__PURE__ */ n.createElement(w, a(t({ ref: e }, r), { weights: C })));
I.displayName = "PersonSimpleCircle";
export {
  I as PersonSimpleCircle
};
