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
  StorageFnc,
  StorageWrap
} from "./MyStorage.style";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ color, icon, theme, fnc, myContents, linked }) => {
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
        <StorageFnc to={linked}>{fnc}</StorageFnc>
      </StorageHeader>
      <StorageWrap>
        <StorageBody>
          {myContents.map((f, key) => {
            if (icon === "Image") {
              const { fileUrl } = f;
              return (
                <Wrap key={key}>
                  <Img url={fileUrl} h={"100%"} />
                </Wrap>
              );
            } else {
              const { avatarUrl, name } = f;
              return (
                <Wrap key={key}>
                  <Img url={avatarUrl} h={"80%"} />
                  <Name>{name}</Name>
                </Wrap>
              );
            }
          })}
        </StorageBody>
      </StorageWrap>
    </Storage>
  );
};
