import React from "react";
import {
  Wrap,
  Img,
  Name,
  Storage,
  StorageHeader,
  StorageBody,
  HeaderWrap,
  ImgWrap,
  HeaderTheme,
  StorageFnc
} from "./MyContent.style";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ color, icon, theme, fnc, myContents }) => {
  return (
    <Storage>
      <StorageHeader>
        <HeaderWrap>
          <ImgWrap color={color}>
            {icon === "Image" ? (
              <FontAwesomeIcon icon={faImage} size={"sm"} />
            ) : (
              <FontAwesomeIcon icon={faUserFriends} size={"sm"} />
            )}
          </ImgWrap>
          <HeaderTheme>{theme}</HeaderTheme>
        </HeaderWrap>
        <StorageFnc>{fnc}</StorageFnc>
      </StorageHeader>
      <StorageBody>
        {myContents.map((f, key) => {
          if (icon === "Image") {
            const { fileUrl } = f;
            return (
              <Wrap key={key}>
                <Img url={fileUrl} />
              </Wrap>
            );
          } else {
            const { avatarUrl, name } = f;
            return (
              <Wrap key={key}>
                <Img url={avatarUrl} />
                <Name>{name}</Name>
              </Wrap>
            );
          }
          console.log(f);
        })}
      </StorageBody>
    </Storage>
  );
};
