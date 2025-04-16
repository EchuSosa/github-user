import React, { Suspense, lazy, useState } from "react";
import { useGithubUsers } from "@/hooks/useGithubUsers";
import {
  Container,
  Typography,
  CircularProgress,
  TextField,
  Box,
} from "@mui/material";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";

const UserCardList = lazy(() => import("@/components/UserCardList"));

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { users, loading, error, searchUsers } = useGithubUsers();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    searchUsers(term);
  };

  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography variant="h6" gutterBottom>
        Change theme <ThemeToggleButton />
      </Typography>
      <Typography variant="h4" gutterBottom>
        GitHub Users
      </Typography>
      <TextField
        label="Search user"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{
          width: "100%",
          maxWidth: 260,
          marginBottom: 3,
          borderRadius: 1,
          marginLeft: "auto",
        }}
        aria-label="Search GitHub user"
      />

      {error && (
        <Typography color="error" sx={{ marginBottom: 2 }}>
          {error}
        </Typography>
      )}

      {loading ? (
        <Box
          height={"100%"}
          width={"100%"}
          display={"flex"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Suspense fallback={<div>Loading users...</div>}>
          <UserCardList users={users} />
        </Suspense>
      )}
    </Container>
  );
}
