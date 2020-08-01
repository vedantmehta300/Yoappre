import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "@material-ui/core/Button";
import { spacing } from "@material-ui/system";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import MetaTags from "react-meta-tags";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.orange}>VM</Avatar>
    </div>
  );
}

const Bob = () => {
  return (
    <>
      <div className="teeth">
        <h1 style={{ color: "white", textAlign: "center" }}>
          Netflix Movies List
        </h1>
      </div>
    </>
  );
};

const Bob1 = (props) => {
  return (
    <>
      <div className="cardm">
        <img src={props.link} style={{ width: "100%" }} className="imgh" />
        <div className="container1">
          <a className="Button1" href={props.link1}>
            <button className="hoho">Click To Watch Movie</button>
          </a>
        </div>
      </div>
    </>
  );
};

const Nam = (
  <>
    <Bob />
    <div>
      <Bob1
        link="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg"
        link1="https://www.amazon.com/Inception-Leonardo-DiCaprio/dp/B0047WJ11G"
      />
      <Bob1
        link="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg"
        link1="https://www.primevideo.com/region/eu/detail/amzn1.dv.gti.62b8aa90-65b0-6f92-1736-7f21d5b07ac9/?ref_=dvm_pds_gen_in_as_s_gt_dtitles_5050B7|m_pQJhjtnrc_c430980105762"
      />
      <Bob1
        link="https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg"
        link1="https://www.primevideo.com/detail/amzn1.dv.gti.7cacb4f1-2d6d-d5a7-f312-4bc2424cea35/?ref_=dvm_pds_gen_in_as_s_gt_tier1_Allday_dtitles135B5|m_3etwfzbVc_c420049354743"
      />
      <Bob1
        link="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg"
        link1="https://www.hotstar.com/in/movies/avengers-endgame/1260013556?utm_source=search&utm_medium=Aw&utm_campaign=00_mindshareindia2-Disney+-Generic-Shows-Title-Led-EM_SVOD_Shw&utm_term=Watch%20avengers%20endgame&gclid=CjwKCAjw0_T4BRBlEiwAwoEiAfzhSgHulrmjljrPmnzGCP5kXMbcp9KiWDxH-cLbyLiXx0vbjaDg4RoCuOkQAvD_BwE"
      />

      <Bob1
        link="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg"
        link1="https://www.amazon.com/Shawshank-Redemption-Tim-Robbins/dp/B001EBV0OY"
      />
      <Bob1
        link="https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg"
        link1="https://www.primevideo.com/detail/0RIGDU4C6T5O43VSOB6EN7WIUE/?ref_=dvm_pds_gen_in_as_s_gt_dtitles_5063E8|m_MkpixsXSc_c434712103430"
      />
      <Bob1
        link="https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg"
        link1="https://www.primevideo.com/region/eu/detail/0IVA8FFJRSQ0L646NNEJWHOTGJ/?ref_=dvm_pds_gen_in_as_s_gt_tier1_Allday_dtitles_5034B1|m_Si76TQXCc_c428568271350"
      />
      <Bob1
        link="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_SY1000_SX675_AL_.jpg"
        link1="https://www.amazon.com/Interstellar-Matthew-McConaughey/dp/B00TU9UFTS"
      />
      <Bob1
        link="https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_QL50_SY1000_CR0,0,666,1000_AL_.jpg"
        link1="https://www.amazon.com/Jaeden-Lieberher/dp/B0756VMDV5"
      />
      <LetterAvatars />
    </div>
  </>
);

ReactDOM.render(Nam, document.getElementById("root"));
