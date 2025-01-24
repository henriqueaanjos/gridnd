var p = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && a(o, r, e[r]);
  if (m)
    for (var r of m(e))
      n.call(e, r) && a(o, r, e[r]);
  return o;
}, i = (o, e) => s(o, l(e));
import c, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import w from "../defs/PersonSimpleWalk.mjs";
const I = d((o, e) => /* @__PURE__ */ c.createElement(k, i(t({ ref: e }, o), { weights: w })));
I.displayName = "PersonSimpleWalk";
export {
  I as PersonSimpleWalk
};
