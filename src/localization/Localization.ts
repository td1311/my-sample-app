import LocalizedStrings from "react-localization";
import { screenAddEditUserEN } from "./screens/AddEditUser-en";
import { screenAddEditUserJP } from "./screens/AddEditUser-jp";

export const strings = new LocalizedStrings({
  jp: {
    screenAddEditUser: screenAddEditUserEN
  },
  en: {
    screenAddEditUser: screenAddEditUserJP
  }
})