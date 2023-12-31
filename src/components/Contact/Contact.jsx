import React, { useState } from "react";
import "./Contact.css";
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  rem,
  Card,
  Avatar,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Rings } from "react-loading-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  function handleSubmit() {
    setLoading(true); // Start loading
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbymP04Iq3CieIzFTM16lELMFnPsJWV8uTuNxy118qyIrhij9O-k71bF37IqEXdTzNKzoA/exec";
    const form1 = document.forms["submit-to-google-sheet"];
    //submit formData to google sheets
    fetch(scriptURL, { method: "POST", body: new FormData(form1) })
      .then((response) => {
        console.log("Success!", response);
        form.reset();
        setMessage("Form successfully submitted!");
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setMessage("An error has occurred, please try again!");
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  }

  function UserCardImage({ image, avatar, name, job }) {
    const useStyles = createStyles((theme) => ({
      avatar: {
        border: `${rem(2)} solid ${
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
        }`,
      },
    }));
    const { classes } = useStyles();

    return (
      <Card
        withBorder
        sx={{
          border: "3px solid var(--fushia)",
          backgroundColor: "var(--dark-theme)",
          marginTop: 40,
        }}
        padding="xl"
        radius="md"
        className={classes.card}
      >
        <Card.Section
          sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: 140,
          }}
        />
        <Avatar
          src={avatar}
          size={80}
          radius={80}
          mx="auto"
          mt={-30}
          className={classes.avatar}
        />
        <Text c={"var(--stark)"} ta="center" fz="lg" fw={500} mt="sm">
          {name}
        </Text>
        <Text ta="center" fz="sm" c={"var(--stark)"}>
          {job}
        </Text>
        <Button
          fullWidth
          radius="md"
          mt="xl"
          size="md"
          c={"var(--stark)"}
          bg={"var(--fushia)"}
        >
          <a
            target="_blank"
            style={{ textDecoration: "none", color: "var(--stark)" }}
            href="https://github.com/PelumiTayo/"
          >
            Follow <FontAwesomeIcon icon={faGithub} />
          </a>
        </Button>
      </Card>
    );
  }

  const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan("sm");

    return {
      wrapper: {
        display: "flex",
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        borderRadius: theme.radius.lg,
        padding: rem(4),
        border: `${rem(1)} solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[2]
        }`,

        [BREAKPOINT]: {
          flexDirection: "column",
        },
      },

      form: {
        boxSizing: "border-box",
        flex: 1,
        color: "var(--stark)",
        padding: theme.spacing.xl,
        paddingLeft: `calc(${theme.spacing.xl} * 2)`,
        borderLeft: 0,

        [BREAKPOINT]: {
          padding: theme.spacing.md,
          paddingLeft: theme.spacing.md,
        },
      },

      fields: {
        marginTop: rem(-12),
      },

      fieldInput: {
        flex: 1,

        "& + &": {
          marginLeft: theme.spacing.md,

          [BREAKPOINT]: {
            marginLeft: 0,
            marginTop: theme.spacing.md,
          },
        },
      },

      fieldsGroup: {
        display: "flex",

        [BREAKPOINT]: {
          flexDirection: "column",
        },
      },

      contacts: {
        boxSizing: "border-box",
        position: "relative",
        borderRadius: theme.radius.lg,
        backgroundImage: `url(vite.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: `${rem(1)} solid transparent`,
        padding: theme.spacing.xl,
        flex: `0 0 ${rem(280)}`,

        [BREAKPOINT]: {
          marginBottom: theme.spacing.sm,
          paddingLeft: theme.spacing.md,
        },
      },

      title: {
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [BREAKPOINT]: {
          marginBottom: theme.spacing.xl,
        },
      },

      control: {
        [BREAKPOINT]: {
          flex: 1,
        },
      },
    };
  });

  const { classes } = useStyles();

  return (
    <>
      <div id="Contact">
        <h1 id="contactH">
          <div className="animation">
            <span className="first">Contact</span>
            <span className="oh">
              <span className="second">&nbsp;Me</span>
            </span>
          </div>
        </h1>
        <Paper shadow="md" radius="lg">
          <div
            style={{ border: "2px solid var(--jewel)" }}
            className={classes.wrapper}
          >
            <div
              style={{ backgroundColor: "var(--jewel)" }}
              className={classes.contacts}
            >
              <UserCardImage
                image={
                  "https://static.vecteezy.com/system/resources/thumbnails/026/342/794/original/programmer-typing-laptop-line-2d-loading-bar-animation-black-woman-programming-animated-cartoon-linear-character-4k-loading-motion-graphic-it-developer-code-download-bar-process-indicator-gif-video.jpg"
                }
                avatar={"logo.png"}
                name={"Pelumi Tayo-Orisadare"}
                job={"Software Engineer"}
              />
            </div>

            <form
              className={classes.form}
              onSubmit={form.onSubmit(
                (_event) => {
                  if (form.isValid) {
                    handleSubmit();
                  }
                },
                (validationErrors, _values, _event) => {
                  validationErrors.name &&
                    form.setFieldError("name", "Enter your full name.");
                  validationErrors.email &&
                    form.setFieldError("email", "Enter a valid email.");
                  validationErrors.subject &&
                    form.setFieldError("subject", "Enter a subject.");
                }
              )}
              name="submit-to-google-sheet"
            >
              <Text
                fz="lg"
                c={"var(--stark)"}
                fw={700}
                className={classes.title}
              >
                Get in touch
              </Text>
              <Text
                fz="lg"
                ta={"center"}
                c={"var(--stark)"}
                fw={700}
                className={classes.title}
              >
                If you'd like to talk about a project you want help with or want
                to work together or need any advice, just drop me a message{" "}
                <span>
                  <a
                    style={{ textDecoration: "none", color: "var(--fushia)" }}
                    href="mailto: pelumi.tayoorisadare@gmail.com"
                  >
                    here.
                  </a>
                </span>
              </Text>

              <div style={{ color: "var(--stark)" }} className={classes.fields}>
                <SimpleGrid
                  cols={2}
                  breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                >
                  <TextInput
                    sx={{
                      ["& .mantine-TextInput-label"]: { color: "var(--stark)" },
                    }}
                    label="Your name"
                    placeholder="Your name"
                    name="name"
                    variant="filled"
                    {...form.getInputProps("name")}
                    required
                  />
                  <TextInput
                    sx={{
                      ["& .mantine-TextInput-label"]: { color: "var(--stark)" },
                    }}
                    label="Your email"
                    placeholder="123@pelumi.dev"
                    name="email"
                    variant="filled"
                    {...form.getInputProps("email")}
                    required
                  />
                </SimpleGrid>

                <TextInput
                  sx={{
                    ["& .mantine-TextInput-label"]: { color: "var(--stark)" },
                  }}
                  mt="md"
                  label="Subject"
                  placeholder="Subject"
                  name="subject"
                  variant="filled"
                  {...form.getInputProps("subject")}
                  required
                />

                <Textarea
                  mt="md"
                  sx={{
                    ["& .mantine-Textarea-label"]: { color: "var(--stark)" },
                  }}
                  label="Your message"
                  placeholder="Please include all relevant information"
                  minRows={3}
                  maxRows={5}
                  autosize
                  name="message"
                  variant="filled"
                  {...form.getInputProps("message")}
                />
                <Text
                  fz="lg"
                  ta={"center"}
                  c={
                    message === "Form successfully submitted!" ? "green" : "red"
                  }
                  fw={700}
                  className={classes.title}
                >
                  {message}
                </Text>
                <Group position="right" mt="md">
                  <Button
                    type="submit"
                    onSubmit={handleSubmit}
                    className={classes.control}
                  >
                    {loading ? (
                      <Rings stroke="white" speed={1.25} />
                    ) : (
                      <span>Send Message</span>
                    )}
                  </Button>
                </Group>
              </div>
            </form>
          </div>
        </Paper>
      </div>
      <p style={{ color: "white", textAlign: "center" }}>
        Made by Oluwapelumi Tayo-Orisadare. Updated December 18th 2023
      </p>
    </>
  );
}
