import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  rem,
  Image,
} from "@mantine/core";
import {
  IconHome2,
  IconFolders,
  IconTools,
  IconInfoCircle,
  IconPhone,
} from "@tabler/icons-react";

export default function Nav() {
  const useStyles = createStyles((theme) => ({
    link: {
      width: rem(50),
      height: rem(50),
      borderRadius: theme.radius.md,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--stark)",

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[0],
      },
    },

    active: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  }));

  function NavbarLink({ icon: Icon, label, active, onClick }) {
    const { classes, cx } = useStyles();
    let newlabel;
    if (label === "Home") {
      newlabel = "/";
    } else if (label === "About") {
      newlabel = "#aboutH";
    }
    return (
      <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
        <a href={newlabel ? `${newlabel}` : `#${label}`}>
          <UnstyledButton
            onClick={onClick}
            className={cx(classes.link, { [classes.active]: active })}
          >
            <Icon size="1.2rem" stroke={1.5} />
          </UnstyledButton>
        </a>
      </Tooltip>
    );
  }

  const mockdata = [
    { icon: IconHome2, label: "Home" },
    { icon: IconTools, label: "Skillset" },
    { icon: IconFolders, label: "Projects" },
    { icon: IconInfoCircle, label: "About" },
    { icon: IconPhone, label: "Contact" },
    // { icon: IconFingerprint, label: "Security" },
    // { icon: IconSettings, label: "Settings" },
  ];

  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(index);
      }}
    />
  ));

  return (
    <nav id="navbar">
      <div id="logo-design">
        <a href="/">P</a>
      </div>
      <Navbar
        bg={"var(--dark-theme)"}
        pos={"fixed"}
        height={750}
        width={{ base: 80 }}
        p="md"
      >
        <Center>
          <a href="/">
            <Image src={"logo.png"} />
          </a>
        </Center>
        <Navbar.Section grow mt={50}>
          <Stack justify="center" spacing={0}>
            {links}
          </Stack>
        </Navbar.Section>
        {/* <Navbar.Section>
          <Stack justify="center" spacing={0}>
            <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
            <NavbarLink icon={IconLogout} label="Logout" />
          </Stack>
        </Navbar.Section> */}
      </Navbar>
    </nav>
  );
}
