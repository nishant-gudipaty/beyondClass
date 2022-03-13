/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
