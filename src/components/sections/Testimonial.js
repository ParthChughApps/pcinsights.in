import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Effortless cooperation, communication and collaboration",
    paragraph:
      "We prioritize communication to ensure that we’re on the same page as you. We provide weekly status reports to keep you updated.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — I had a chance to work along side Parth during our
                    engineering years. I felt motivated and astounded by his
                    zeal to complete each project with such competence. He is
                    one of the best team player who is enthusiastic, talented
                    passionate and sure about his goals in life..
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Aekansh Gupta
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">Data Scientist</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Parth is highly dedicated to every project he undertakes.
                    He is a quick learner and a hardworking person. We have
                    worked together in a lot of projects including our B.tech
                    research as well as our company project training. He has
                    developed a good amount of expertise in full stack
                    development..
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Mihir Kavishwar
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    Senior Associate Software Engineer at MathWorks
                  </span>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Parth is an amazing professional, very hardworking and
                    extremely talented who brings all of the skills and
                    expertise in programming and systems security. He is a very
                    productive person and is multi-skilled with vast knowledge.
                    He is also careful, proactive, self motivated and
                    intelligent team player. I highly recommend him and am
                    certain he would be a valuable asset for any company.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Nisha Vachhani
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    Compliance | Operations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
