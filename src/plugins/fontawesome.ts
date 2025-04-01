import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faInstagram, faTwitter, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faStar,
  faFilm,
  faCirclePlay,
  faVideoCamera,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
library.add(
  faInstagram,
  faTwitter,
  faFacebook,
  faYoutube,
  faList,
  faMagnifyingGlass,
  faUser,
  faStar,
  faFilm,
  faCirclePlay,
  faVideoCamera,
  faHeart,
  faComment
);

export { FontAwesomeIcon };
