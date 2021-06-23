import axios from "axios";
import { KEY } from "./config";
import { OPEN_CAGE_DATA } from "./url";

export default axios.create({
  baseURL: OPEN_CAGE_DATA,
  params: {
    key: KEY,
    format: "json",
  },
});
