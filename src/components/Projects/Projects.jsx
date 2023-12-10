import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
} from "@mantine/core";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

function Card({ item }) {
  const { classes } = useStyles();
  const matches = useMediaQuery("(max-width: 470px)");

  return (
    <Paper
      shadow="lg"
      p="lg"
      radius="lg"
      sx={{
        backgroundImage: `url(${item.image})`,
        backgroundSize:
          item.title === "Snake Game" || item.title === "SonicScore"
            ? "50%"
            : "contain", // Adjusted logic
        backgroundRepeat: "no-repeat",
      }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {item.category}
        </Text>
        <Title bg={"var(--dark-theme)"} order={3} className={classes.title}>
          {item.title}
        </Title>
      </div>
      <div>
        {item.website && (
          <Button color="dark">
            <a href={item.website} target="_blank" id="githubLink">
              <FontAwesomeIcon icon={faChrome} />
            </a>
          </Button>
        )}
        {item.github && (
          <Button color="dark">
            <a href={item.github} target="_blank" id="githubLink">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Button>
        )}
        {item.mobile && (
          <Button color="dark">
            <a href={item.mobile} target="_blank" id="githubLink">
              <FontAwesomeIcon icon={faMobileScreenButton} />{" "}
            </a>
          </Button>
        )}
      </div>
    </Paper>
  );
}

const data = [
  {
    image: "jobQuest.png",
    title: "Job Quest",
    category: "React.js, Vite, NextUI, TailwindCSS",
    website: "https://peachykeen-jobquest.netlify.app/",
    github: "https://github.com/cherryontech/jobQuest",
  },
  {
    image: "soundScore.jpg",
    title: "SonicScore",
    category: "React.js, Create-React-App, PHP, MaterialUI, MySQL, PHPmyadmin",
    website: "https://soundscore-e4f0b.web.app/",
    github: "https://github.com/PelumiTayo/comp333-MVC",
    mobile: "https://play.google.com/apps/internaltest/4701577590839347571",
  },
  {
    image: "cashflow.png",
    title: "CashFlow Academy",
    category: "React.js, Express.js, PostgreSQL, Node.js, ChakraUI",
    website: "https://cashflow-ui-pfwm.onrender.com/",
    github: "https://github.com/PelumiTayo/CashFlowCapstone",
  },
  {
    image: "lifetracker.png",
    title: "LifeTracker",
    category: "React, PostgreSQL, Express.js, Node.js",
    website: "https://life-tracker-frontend-pmww.onrender.com/",
    github: "https://github.com/PelumiTayo/LifeTracker",
  },
  {
    image: "studentstore.png",
    title: "Student Store",
    category: "React",
    website: "https://studentstore-frontend.onrender.com/",
    github: "https://github.com/PelumiTayo/studentStore",
  },
  {
    image: "flixster.png",
    title: "Flixster",
    category: "HTML, CSS, Javascript",
    website: "https://pelumitayo.github.io/Flixster/",
    github: "https://github.com/PelumiTayo/Flixster",
  },
  {
    image: "unoGame.jpg",
    title: "Uno Game",
    category: "Python",
    github: "https://github.com/PelumiTayo/Uno_Game",
  },
  {
    image: "snakeGame.png",
    title: "Snake Game",
    category: "Python, Turtle",
    github: "https://github.com/PelumiTayo/Snake-Game",
  },
];

export default function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card item={item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <div
        id="Projects"
        style={{ width: "75%", margin: "0 auto" }}
        className="container"
      >
        <h1>
          <div className="animation">
            <span className="first">My</span>
            <span className="oh">
              <span className="second">&nbsp;Projects</span>
            </span>
          </div>
        </h1>
      </div>
      <Carousel
        w={"75%"}
        mx={"auto"}
        slideSize="50%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </>
  );
}
