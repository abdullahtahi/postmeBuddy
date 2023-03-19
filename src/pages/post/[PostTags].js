import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "@/component/FunctionHandler/FunctionHandler";
import Layout from "@/component/Layout/Layout";
import style from "../../styles/Tagsrequested.module.scss";
import PostCard from "@/component/PostCard/PostCard";
import { CircularProgress, Grid } from "@mui/material";
function PostTags() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { post } = useSelector((state) => state.Post);
  const filterpost = post.filter((e) =>
    e?.tags.includes(router.query.PostTags)
  );
  useEffect(() => {
    getAllPosts(dispatch);
  }, []);
  return (
    <Layout>
      <div className={style.postTagContainer}>
        <p>
          The Requested Tag is <span>{router.query.PostTags}</span>
        </p>
        <Grid container>
          {filterpost.length > 0 ? (
            filterpost?.map((e, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <PostCard PostData={e} />
              </Grid>
            ))
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </div>
    </Layout>
  );
}

PostTags.getInitialProps = async () => ({
  ssr: false,
});
export default PostTags;
