import { builder } from "./builder";

import "./models/Message";
import "./models/User";

const schema = builder.toSchema({});
export default schema;
