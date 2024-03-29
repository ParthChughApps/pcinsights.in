import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Seamless scalability with your own tech team",
    paragraph:
      "Whether you’re looking for a full-fledged team to support large-scale projects or developers to help you with a small project, we’ve got you covered.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  PWA
                </div>
                <h3 className="mt-0 mb-12">WHSmith</h3>
                <p className="m-0">
                  We helped WHSmith to lift and shift of their existing website
                  to a better PWA App using Mobify's PWA kit and Salesforce's
                  Commerce API to improve its overall performance and sales.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/Whsmith.png")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Multi-Purpose Apps
                </div>
                <h3 className="mt-0 mb-12">BlokPass and BlokVerify</h3>
                <p className="m-0">
                  We helped Blok to create applications for contact less
                  personal information sharing and attestation using Anonymous
                  handshake.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/Blok.jpeg")}
                  alt="Features split 02"
                  width={528}
                  height={400}
                  style={{ objectFit: "contain", maxHeight: "400px" }}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Insurance App
                </div>
                <h3 className="mt-0 mb-12">Vertical Fox</h3>
                <p className="m-0">
                  Developed a platform for insurance brokers that
                  allows them to gather information from different 
                  vendors and make informed decisions based on their 
                  clients' needs. The platform includes features such 
                  as vendor comparison, policy analysis, and real-time quotes.                  
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/verticalfox.png")}
                  alt="Features split 03"
                  width={528}
                  height={400}
                  style={{ objectFit: "contain", maxHeight: "400px" }}
                />
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Marketting App
                </div>
                <h3 className="mt-0 mb-12">AdCast</h3>
                <p className="m-0">
                  AdCast is a platform, which help the influncers to earn by
                  sharing Ads on social media. We helped AdCast to create a
                  platform to create Ads and publish the Ads.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/AdCast.jpeg")}
                  alt="Features split 03"
                  width={528}
                  height={400}
                  style={{ objectFit: "contain", maxHeight: "400px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
