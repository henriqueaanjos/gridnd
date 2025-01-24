var i = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, m) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, p = (o, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && a(o, m, e[m]);
  if (r)
    for (var m of r(e))
      c.call(e, m) && a(o, m, e[m]);
  return o;
}, t = (o, e) => l(o, f(e));
import d, { forwardRef as n } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/UploadSimple.mjs";
const R = n((o, e) => /* @__PURE__ */ d.createElement(w, t(p({ ref: e }, o), { weights: I })));
R.displayName = "UploadSimple";
export {
  R as UploadSimple
};
