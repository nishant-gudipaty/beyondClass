/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      profileOwnerId
      profileOwnerUsername
      name
      profile_type
      intro
      mail
      insta
      created_at
      posts {
        items {
          id
          postOwnerId
          postOwnerUsername
          title
          content
          cover_photo
          attachements
          created_at
          createdAt
          updatedAt
          profilePostsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        profileOwnerId
        profileOwnerUsername
        name
        profile_type
        intro
        mail
        insta
        created_at
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      postOwnerId
      postOwnerUsername
      title
      content
      cover_photo
      attachements
      created_at
      comments {
        items {
          id
          commentOwnerId
          commentOwnerUsername
          comment
          created_at
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          likeOwnerId
          likeOwnerUsername
          createdAt
          updatedAt
          postLikesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      profilePostsId
      owner
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postOwnerId
        postOwnerUsername
        title
        content
        cover_photo
        attachements
        created_at
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        profilePostsId
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      commentOwnerId
      commentOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        title
        content
        cover_photo
        attachements
        created_at
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        profilePostsId
        owner
      }
      comment
      created_at
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        commentOwnerId
        commentOwnerUsername
        post {
          id
          postOwnerId
          postOwnerUsername
          title
          content
          cover_photo
          attachements
          created_at
          createdAt
          updatedAt
          profilePostsId
          owner
        }
        comment
        created_at
        createdAt
        updatedAt
        postCommentsId
        owner
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      likeOwnerId
      likeOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        title
        content
        cover_photo
        attachements
        created_at
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        profilePostsId
        owner
      }
      createdAt
      updatedAt
      postLikesId
      owner
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        likeOwnerId
        likeOwnerUsername
        post {
          id
          postOwnerId
          postOwnerUsername
          title
          content
          cover_photo
          attachements
          created_at
          createdAt
          updatedAt
          profilePostsId
          owner
        }
        createdAt
        updatedAt
        postLikesId
        owner
      }
      nextToken
    }
  }
`;
