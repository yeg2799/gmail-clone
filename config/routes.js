
const { resolve } = require("path");
export default [
  {
    path: "/",
    name: "Home",
    component: resolve(__dirname, "../pages/index"),
  },
  {
    path: "/inbox",
    name: "Inbox",
    component: resolve(__dirname, "../pages/Content/Inbox"),
  },
  {
    path: "/inboxDetail",
    name: "InboxDetail",
    component: resolve(__dirname, "../pages/Content/InboxDetail"),
  }
];