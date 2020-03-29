import React from "react";
import PropTypes from "prop-types";
import { Avatar2 } from "Components/Avatar";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contents from "./Contents/Contents";
import {
  ContentFilter,
  FilterList,
  ContentFrame,
  MakerForm,
  ContentMaker,
  MakerName,
  FormText,
  TextAvatar,
  TextInput,
  StaticLabel,
  StaticInput,
  FormStatic
} from "./ContentFrame.style";
import { useCallback, useRef } from "react";

export default () => {
  const { avatarUrl, nickname } = JSON.parse(localStorage.getItem("user"));
  const inputRef = useRef();
  const focusing = useCallback(e => {
    e.preventDefault();
    inputRef.current.focus();
  });
  const autoSize = useCallback(e => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  });
  return (
    <>
      {/* <ContentFilter>
        <FilterList>hi</FilterList>
      </ContentFilter> */}
      <ContentFrame>
        <MakerForm>
          <ContentMaker>
            <MakerName>게시물 만들기</MakerName>
            <FormText>
              <TextAvatar to="/login">
                <Avatar2 avatarUrl={avatarUrl} />
              </TextAvatar>
              <TextInput
                ref={inputRef}
                nickname={nickname}
                onKeyDown={e => autoSize(e)}
              />
            </FormText>
            <FormStatic>
              <StaticLabel>
                <FontAwesomeIcon icon={faImage} size="lg" />
                &nbsp; 사진 / 동영상
              </StaticLabel>
              <StaticInput onChange={e => focusing(e)} />
            </FormStatic>
          </ContentMaker>
        </MakerForm>
        <Contents avatarUrl={avatarUrl} />
      </ContentFrame>
    </>
  );
};
