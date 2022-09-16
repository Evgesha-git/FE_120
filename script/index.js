import header from "./components/header.js";
import { footer } from "./components/footer.js";
import app from "./components/app.js";

const root = document.getElementById('root');

root.append(header(), app(), footer());

