import { GetServerSideProps } from "next";
import { GithubUser } from "@/hooks/useGithubUsers";
import {
  Container,
  Typography,
  Avatar,
  Box,
  IconButton,
  Button,
  Link,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useFavorites } from "@/context/FavoritesContext";

interface UserDetailPageProps {
  user: GithubUser | null;
}

export default function UserDetailPage({ user }: UserDetailPageProps) {
  const { toggleFavorite, isFavorite } = useFavorites();

  if (!user) {
    return (
      <Container sx={{ paddingY: 4 }}>
        <Typography variant="h6" color="error">
          User not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ paddingY: 4 }}>
      <Box marginBottom={5}>
        <Link href="/" passHref style={{ textDecoration: "none" }}>
          ← Go to user list
        </Link>
      </Box>

      <Box display="flex" alignItems="center" gap={2}>
        <Avatar
          src={user.avatar_url}
          alt={user.login}
          sx={{ width: 80, height: 80 }}
        />
        <Box>
          <Typography variant="h4">{user.login}</Typography>
          <Typography variant="body2" color="text.secondary">
            ID: {user.id}
          </Typography>
        </Box>
        <IconButton
          onClick={() => toggleFavorite(user)}
          sx={{
            marginLeft: "auto",
            color: isFavorite(user.login) ? "yellow" : "grey.500",
          }}
        >
          {isFavorite(user.login) ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
      </Box>

      <Box marginTop={4}>
        <Button
          variant="contained"
          color="primary"
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          See profile on GitHub
        </Button>
      </Box>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username = context.params?.username as string;

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) return { props: { user: null } };

    const user: GithubUser = await res.json();
    return { props: { user } };
  } catch {
    return { props: { user: null } };
  }
};
