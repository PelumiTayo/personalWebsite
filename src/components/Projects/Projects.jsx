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
import { faGithub, fab } from "@fortawesome/free-brands-svg-icons";

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

function Card({ image, title, category, website }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="lg"
      p="lg"
      radius="md"
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button color="dark">
        <a href={website} target="_blank" id="githubLink">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: "cashflow.png",
    title: "CashFlow Academy",
    category: "nature",
    website: "https://cashflow-ui-pfwm.onrender.com/",
  },
  {
    image: "lifetracker.png",
    title: "LifeTracker",
    category: "beach",
    website: "https://life-tracker-frontend-pmww.onrender.com/",
  },
  {
    image: "studentstore.png",
    title: "Student Store",
    category: "nature",
    website: "https://studentstore-frontend.onrender.com/",
  },
  {
    image: "flixster.png",
    title: "Flixster",
    category: "nature",
    website: "https://pelumitayo.github.io/Flixster/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Best places to visit this winter",
    category: "tourism",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Active volcanos reviews: travel at your own risk",
    category: "nature",
  },
];

export default function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <div
        id="Projects"
        style={{ width: "75%", margin: "0 auto" }}
        class="container"
      >
        <h1>
          <div class="animation">
            <span class="first">My</span>
            <span class="oh">
              <span class="second">&nbsp;Projects</span>
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
