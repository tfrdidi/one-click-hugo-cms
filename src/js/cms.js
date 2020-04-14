import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/neuigkeiten";
import AblaufPreview from "./cms-preview-templates/ablauf";
import GeschichtePreview from "./cms-preview-templates/geschichte";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("neuigkeiten", PostPreview);
CMS.registerPreviewTemplate("ablauf", AblaufPreview);
CMS.registerPreviewTemplate("geschichte", GeschichtePreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.init();
