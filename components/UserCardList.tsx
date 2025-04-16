import React from "react";
import Link from "next/link";
import { GithubUser } from "@/hooks/useGithubUsers";
import { Card, Avatar, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import IconButton from "@mui/material/IconButton";
import { useFavorites } from "@/context/FavoritesContext";

interface Props {
  users: GithubUser[];
}

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  background-color: rgb(127, 125, 125);
  cursor: pointer;
  height: 100%;
  width: 300px;
  box-sizing: border-box;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #2a2a2a;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;
const UserCardList: React.FC<Props> = ({ users }) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <Grid
      container
      spacing={3}
      alignItems="stretch"
      justifyContent="flex-start"
    >
      {users?.map((user) => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
          <Box height="100%">
            <StyledCard>
              <Link
                href={`/users/${user.login}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  flex: 1,
                  overflow: "hidden",
                }}
              >
                <Avatar
                  src={user.avatar_url}
                  alt={`Avatar de ${user.login}`}
                  sx={{ width: 56, height: 56 }}
                />
                <Box sx={{ overflow: "hidden", flex: 1 }}>
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                    }}
                  >
                    {user.login}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Show profile
                  </Typography>
                </Box>
              </Link>

              <IconButton
                onClick={() => toggleFavorite(user)}
                aria-label={`Check ${user.login} as favorite`}
                sx={{
                  color: isFavorite(user.login) ? "yellow" : "grey.500",
                }}
              >
                {isFavorite(user.login) ? <StarIcon /> : <StarBorderIcon />}
              </IconButton>
            </StyledCard>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default React.memo(UserCardList);
