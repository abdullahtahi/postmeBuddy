import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import style from "../../styles/PostCard.module.scss";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
export default function PostCard({ PostData }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "0 1rem  2rem 1rem",
        height: { xs: "500px", sm: "500px", md: "400px" },
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={PostData.image}
        title="green iguana"
      />
      <CardContent>
        <Typography className={style.postDate}>
          {format(new Date(PostData?.publishDate), "yyyy-MM-dd h:mm aaa")}
        </Typography>
        <Link href={`/user/${PostData?.owner?.id}`} className={style.postname}>
          <Typography>
            {PostData?.owner?.firstName + " " + PostData?.owner?.lastName}
          </Typography>
        </Link>
        <Typography className={style.posttext}>{PostData.text}</Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
          className={style.postTagContainer}
        >
          {PostData.tags.map((e, i) => (
            <Typography key={i} className={style.posttags}>
              <Link href={`/post/${e}`}>{e}</Link>
            </Typography>
          ))}
        </div>
      </CardContent>

      <div>
        <div className={style.likesContainer}>
          <div className={style.likes}>{PostData.likes}</div>
          <div>
            <ThumbUpAltIcon />
          </div>
        </div>
      </div>
    </Card>
  );
}
PostCard.propTypes = {
  PostData: PropTypes.object.isRequired,
};
