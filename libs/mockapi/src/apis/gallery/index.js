import mock from "../MockConfig";
import { photos } from "../../fakedb/index.js";

mock.onGet('/gallery/photos').reply(200, photos);
