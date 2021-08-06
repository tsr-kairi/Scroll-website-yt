import { GraphicEq } from "@material-ui/icons";
import React from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/" signIn>
                How it works
              </FooterLink>

              <FooterLink to="/" signIn>
                Testimonials
              </FooterLink>

              <FooterLink to="/" signIn>
                carriers
              </FooterLink>

              <FooterLink to="/" signIn>
                Investors
              </FooterLink>

              <FooterLink to="/" signIn>
                Terms of Service
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/" signIn>
                Info Video
              </FooterLink>

              <FooterLink to="/" signIn>
                Submit Video
              </FooterLink>

              <FooterLink to="/" signIn>
                Ambassadors
              </FooterLink>

              <FooterLink to="/" signIn>
                Agency
              </FooterLink>

              <FooterLink to="/" signIn>
                Influencer
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/" signIn>
                Contact
              </FooterLink>

              <FooterLink to="/" signIn>
                Privacy
              </FooterLink>

              <FooterLink to="/" signIn>
                Support
              </FooterLink>

              <FooterLink to="/" signIn>
                Destinations
              </FooterLink>

              <FooterLink to="/" signIn>
                Sponsorship
              </FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/" signIn>
                LinkedIn
              </FooterLink>

              <FooterLink to="/" signIn>
                Instagram
              </FooterLink>

              <FooterLink to="/" signIn>
                Facebook
              </FooterLink>

              <FooterLink to="/" signIn>
                YouTube
              </FooterLink>

              <FooterLink to="/" signIn>
                Twitter
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <GraphicEq />
              TSR
            </SocialLogo>
            <WebsiteRights>
              tsr &copy; {new Date().getFullYear()} All Rights Reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="/www.facebook.com/rikirajkoiri"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="/www.linkedin.com/ranjitkairi"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="/www.instagram.com/face_killer_riki"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="/www.youtube.com/tsr-vlog"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="/www.twitter.com/ranjitkairi2"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
