import Hero from "./partials/partials/Hero";
import Heroselectservice from "./partials/partials/Heroselectservice";
import Sectionourmission from "./partials/partials/Sectionourmission";
import Faq from "./partials/partials/Faq";

import React from "react";

function Page() {
  return (
    <div className="bg-white">
        <Hero />
        <Sectionourmission/>
        <Faq />
    </div>
  );
}

export default Page;
