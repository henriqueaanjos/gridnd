var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      n.call(e, o) && m(r, o, e[o]);
  return r;
}, c = (r, e) => i(r, p(e));
import S, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import j from "../defs/ProjectorScreen.mjs";
const l = R((r, e) => /* @__PURE__ */ S.createElement(d, c(a({ ref: e }, r), { weights: j })));
l.displayName = "ProjectorScreen";
export {
  l as ProjectorScreen
};
