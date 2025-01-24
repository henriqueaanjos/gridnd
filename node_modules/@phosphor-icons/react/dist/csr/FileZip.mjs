var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      l.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => f(o, s(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import F from "../defs/FileZip.mjs";
const I = d((o, e) => /* @__PURE__ */ n.createElement(w, a(m({ ref: e }, o), { weights: F })));
I.displayName = "FileZip";
export {
  I as FileZip
};
