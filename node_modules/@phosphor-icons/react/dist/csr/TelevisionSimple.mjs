var p = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var r = (o, e, i) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[e] = i, t = (o, e) => {
  for (var i in e || (e = {}))
    f.call(e, i) && r(o, i, e[i]);
  if (m)
    for (var i of m(e))
      n.call(e, i) && r(o, i, e[i]);
  return o;
}, a = (o, e) => s(o, l(e));
import c, { forwardRef as d } from "react";
import v from "../lib/IconBase.mjs";
import w from "../defs/TelevisionSimple.mjs";
const I = d((o, e) => /* @__PURE__ */ c.createElement(v, a(t({ ref: e }, o), { weights: w })));
I.displayName = "TelevisionSimple";
export {
  I as TelevisionSimple
};
