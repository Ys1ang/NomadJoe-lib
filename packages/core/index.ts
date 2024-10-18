import { makeInstaller } from "@harmony/utils";
import components from "./components.ts";
import '@harmony/theme/index.css'
const installer = makeInstaller(components);
export * from "@harmony/components";
export default installer;
