import getURL from "./utils";
import { ADDRESS, PATH, PORT, REGION as region} from "./constant";

const url = getURL(ADDRESS, PATH, PORT);

export { url, region };