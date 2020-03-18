import React, { useContext, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Avatar4 } from "Components/Avatar";
import { apiReComment } from "api";
import ReComment from "./ReComment/ReComment";
import {
  ReComments,
  ReCommentsUp,
  UpInput,
  ReCommentWrap
} from "./ReComments.style";

export default ({ id, Recomments }) => {
  const { avatarUrl } = JSON.parse(localStorage.getItem("user"));
  const [initReComments, setReComments] = useState(Recomments);
  const reCommentsWrite = useCallback(async e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const text = e.target.value;
      e.target.value = "";
      const {
        data: { newReComment }
      } = await apiReComment(id, text);
      setReComments([...initReComments, newReComment]);
    }
  });
  const autoSize = useCallback(e => {
    e.target.style.height = e.target.scrollHeight + "px";
  });
  return (
    <ReComments>
      <ReCommentsUp>
        <Avatar4 avatarUrl={avatarUrl} />
        <UpInput
          onKeyUp={e => reCommentsWrite(e)}
          onKeyDown={e => autoSize(e)}
        />
      </ReCommentsUp>
      <ReCommentWrap>
        {initReComments.map((reComment, key) => {
          return <ReComment key={key} reComment={reComment} />;
        })}
      </ReCommentWrap>
    </ReComments>
  );
};
