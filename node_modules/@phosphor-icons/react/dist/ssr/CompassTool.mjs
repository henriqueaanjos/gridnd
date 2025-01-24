var p = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, o, m) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, s = (e, o) => {
  for (var m in o || (o = {}))
    l.call(o, m) && a(e, m, o[m]);
  if (r)
    for (var m of r(o))
      c.call(o, m) && a(e, m, o[m]);
  return e;
}, t = (e, o) => f(e, i(o));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/CompassTool.mjs";
const C = d((e, o) => /* @__PURE__ */ R.createElement(n, t(s({ ref: o }, e), { weights: w })));
C.displayName = "CompassTool";
export {
  C as CompassTool
};
