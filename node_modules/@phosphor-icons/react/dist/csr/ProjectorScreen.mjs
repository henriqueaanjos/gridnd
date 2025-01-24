var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var c = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && c(r, o, e[o]);
  if (t)
    for (var o of t(e))
      s.call(e, o) && c(r, o, e[o]);
  return r;
}, a = (r, e) => i(r, n(e));
import d, { forwardRef as j } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/ProjectorScreen.mjs";
const I = j((r, e) => /* @__PURE__ */ d.createElement(l, a(m({ ref: e }, r), { weights: w })));
I.displayName = "ProjectorScreen";
export {
  I as ProjectorScreen
};
