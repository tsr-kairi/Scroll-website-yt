import React from "react";
import SvgIcon1 from "../../images/svg-1.svg";
import SvgIcon2 from "../../images/svg-3.svg";
import SvgIcon3 from "../../images/svg-4.svg";

import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesIcon,
  ServicesWrapper,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={SvgIcon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            We help you reduce your fees and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={SvgIcon2} />
          <ServicesH2>Virtual expense</ServicesH2>
          <ServicesP>
            You can access our platform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={SvgIcon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
