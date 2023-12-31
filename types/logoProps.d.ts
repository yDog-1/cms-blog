class SuperLogoProps {
  width: number;
  height: number;
  darkMode: Boolean;
  Dir: { black: string; white: string };
  Name: string;
}

type LogoProps = Omit<SuperLogoProps, "Dir" | "Name">;
