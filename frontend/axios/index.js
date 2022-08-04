// ✨ implement axiosWithAuth
import axios from "axios";

const axiosWithAuth = (payload) => {
  switch (payload.type) {
    case "GET":
      return axios.get(payload.url, {
        headers: { Authorization: `${payload.token}` },
      });
    case "ADD":
      return axios.post(
        payload.url,

        {
          title: payload.article.title,
          text: payload.article.text,
          topic: payload.article.topic,
        },
        {
          headers: { Authorization: `${payload.token}` },
        }
      );
    case "UPDATE":
      return axios.put(
        payload.url,
        {
          title: payload.article.title,
          text: payload.article.text,
          topic: payload.article.topic,
        },
        {
          headers: { Authorization: `${payload.token}` },
        }
      );
    case "DELETE":
      return axios.delete(payload.url, {
        headers: { Authorization: `${payload.token}` },
      });
  }
};

export default axiosWithAuth;
