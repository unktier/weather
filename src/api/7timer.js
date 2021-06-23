import axios from "axios";
import { TIMER_API } from "./url";

export default axios.create({
  baseURL: TIMER_API,
  params: {
    product: "civil",
    output: "json",
  },
});
