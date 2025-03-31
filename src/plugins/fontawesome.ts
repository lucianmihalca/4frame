import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faInstagram, faTwitter, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass, faStar, faFilm } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
library.add(
  faInstagram,
  faTwitter,
  faFacebook,
  faYoutube,
  faMagnifyingGlass,
  faUser,
  faStar,
  faFilm
);

export { FontAwesomeIcon };
