import { Link as RouterLink } from "react-router-dom";
import { Grid, Button, Container, Stack, Typography } from "@mui/material";
import Page from "components/Page";
import Iconify from "components/Iconify";
import POSTS from "_mocks_/blog";
import BlogPostsSearch from "sections/@dashboard/blog/BlogPostsSearch";
import BlogPostsSort from "sections/@dashboard/blog/BlogPostsSort";
import BlogPostCard from "sections/@dashboard/blog/BlogPostCard";

export default function Blog() {
  return (
    <Page title="Blog | Material-kit">
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Post
          </Button>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={5}
        >
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort />
        </Stack>
        <Grid container spacing={3}>
          {POSTS.map((post, index) => {
            return <BlogPostCard key={post.id} index={index} post={post} />;
          })}
        </Grid>
      </Container>
    </Page>
  );
}
