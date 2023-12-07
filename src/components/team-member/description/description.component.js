import React from "react";
import { useIsMedium, useIsSmall } from "../../../utils/media-query.hook";
import LinkedInSrc from "../../../assets/images/icons/LinkedIn-Black.svg";
import { Bio, Contact, DescriptionWrapper, Name } from "./descriptions.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Description = ({ teamMember }) => {
  const isMedium = useIsMedium();
  const isSmall = useIsSmall();
  const { name, bio, email, linkedIn, professionalTitles, title } = teamMember;
  return (
    <div>
      {name && (
        <Name
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.4,
            type: "linear",
          }}
          viewport={{ once: true }}
        >
          <h1>{name}</h1>,{title && <h2>{title}</h2>}
        </Name>
      )}
      {professionalTitles && (
        <DescriptionWrapper
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.5,
            type: "linear",
          }}
          viewport={{ once: true }}
        >
          {!isMedium &&
            professionalTitles &&
            professionalTitles.map((title, index) => (
              <div key={index} className="pro-title">
                {title}
              </div>
            ))}
          {isMedium && (
            <ul>
              {!isSmall &&
                professionalTitles.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              {isSmall &&
                professionalTitles.map((title, index) => {
                  let titleArr = title.split(",");
                  if (titleArr.length !== 2) {
                    return <li key={index}>{title}</li>;
                  } else {
                    return (
                      <li key={index}>
                        {titleArr[0]},
                        <br />
                        {titleArr[1]}
                      </li>
                    );
                  }
                })}
            </ul>
          )}
          {bio && <Bio>{renderRichText(bio)}</Bio>}
        </DescriptionWrapper>
      )}
      <Contact
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.6,
          type: "linear",
        }}
        viewport={{ once: true }}
      >
        {email && <a href={`mailto:${email}`}>{email}</a>}
        {linkedIn && (
          <a href={linkedIn} target="_blank" rel="noreferrer">
            <img src={LinkedInSrc} alt="LinkedIn Logo" />
          </a>
        )}
      </Contact>
    </div>
  );
};

export default Description;
