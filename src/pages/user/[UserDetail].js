import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUser,
  getUserById,
} from "@/component/FunctionHandler/FunctionHandler";
import { format } from "date-fns";
import { CircularProgress, Grid, Paper } from "@mui/material";
import Image from "next/image";
import Layout from "@/component/Layout/Layout";
import style from "../../styles/userDetail.module.scss";
function UserDetail() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { singleUser } = useSelector((state) => state?.singleUser);

  useEffect(() => {
    getAllUser(dispatch);
    getUserById(dispatch, router?.query?.UserDetail);
  }, [router?.query?.UserDetail]);
  return (
    <Layout>
      {Object.keys(singleUser).length > 0 ? (
        <>
          <Grid item xs={12} sm={12} md={12} className={style.img}>
            <Image
              src={singleUser?.picture}
              alt="Avatar"
              width={200}
              height={200}
              lazy={String(true)}
              loading="lazy"
              quality={100}
            />
          </Grid>
          <Paper elevation={3} className={style.personalInformationContainer}>
            <p>Personal Information</p>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                className={style.personalInformationvalues}
              >
                <span>title:</span>
                <span>{singleUser?.title}</span>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                className={style.personalInformationvalues}
              >
                <span>First Name </span>
                <span>{singleUser?.firstName}</span>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                className={style.personalInformationvalues}
              >
                <span>Last Name </span>
                <span>{singleUser?.lastName}</span>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                className={style.personalInformationvalues}
              >
                <span>Gender</span>
                <span>{singleUser?.gender}</span>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                className={style.personalInformationvalues}
              >
                <span>Phone</span>
                <span>{singleUser?.phone}</span>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                className={style.personalInformationvalues}
              >
                <span>Register Date</span>
                <span>{format(new Date(), "yyyy-MM-dd h:mm aaa")}</span>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                className={style.personalInformationvalues}
              >
                <span>Email</span>
                <span>{singleUser?.email}</span>
              </Grid>
            </Grid>
          </Paper>
          <Paper elevation={3} className={style.locationInformationContainer}>
            <p>Location Information</p>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                className={style.personalInformationvalues}
              >
                <span>City:</span>
                <span>{singleUser?.location?.city}</span>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                className={style.personalInformationvalues}
              >
                <span>Country </span>
                <span>{singleUser?.location?.country}</span>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                className={style.personalInformationvalues}
              >
                <span>State</span>
                <span>{singleUser?.location?.state}</span>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                className={style.personalInformationvalues}
              >
                <span>Street</span>
                <span>{singleUser?.location?.street}</span>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                className={style.personalInformationvalues}
              >
                <span>Timezone</span>
                <span>{singleUser?.location?.timezone}</span>
              </Grid>
            </Grid>
          </Paper>
        </>
      ) : (
        <CircularProgress />
      )}
    </Layout>
  );
}

UserDetail.getInitialProps = async () => ({
  ssr: false,
});

export default UserDetail;
