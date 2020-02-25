import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/"
});
export const loginChecker = () => api.post();

export const logout = () => api.post("logout");
export const upLike = id => {
  const data = {
    id
  };
  return api.post(`api/${id}/like`, data);
};
export const upCommentLike = id => {
  const data = {
    id
  };
  return api.post(`api/${id}/commentLike`, data);
};

export const apiContents = () => api.post("api/contents");
export const apiComment = (id, comment) => {
  const data = {
    id,
    comment
  };
  return api.post(`api/${id}/comment`, data);
};
export const apiReComment = (id, reComment) => {
  const data = {
    id,
    reComment
  };
  return api.post(`api/${id}/reComment`, data);
};
