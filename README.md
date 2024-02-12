# A Blog App created using React

**Note:** The operations are in memory except for the Unsplash search image. Jsonplaceholder's endpoints are used to initialize the state.

### Modules:

1. Users:

   - An authentication page where users can sign in and sign up.
   - Users have a username and password.

2. Posts:
   - Posts have a title and content.
   - The user can create, edit and delete their posts.
   - All posts from all users would be displayed on the home screen.

> **Note:** The post's state is initialized by calling the following api endpoint: https://jsonplaceholder.typicode.com/posts

3. Comments:
   - A post can have many comments.
   - The user can create, edit and delete their comments.

> **Note:** The comment's state for each fetched post is initialized by calling the following api endpoint: https://jsonplaceholder.typicode.com/posts/{$postId}/comments
