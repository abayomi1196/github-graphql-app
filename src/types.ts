import { ApolloError } from "@apollo/client";

export interface ViewerDetails {
  [key: string]: {
    avatarUrl: string;
    login: string;
    name: string;
    location: string;
    createdAt: Date;
    followers: {
      totalCount: number;
    };
    following: {
      totalCount: number;
    };

    repositories: {
      totalCount: number;
    };
  };
}

export interface ViewerDetailsVars {
  privacy: string;
}

export interface UserDetailsVars {
  login: string;
}

export interface ViewerRepos {
  [key: string]: {
    repositories: {
      nodes: {
        id: string;
        name: string;
        stargazerCount: number;
        forkCount: number;
        isPrivate: boolean;
        updatedAt: Date;
        url: string;
        description: string;

        languages: {
          nodes: {
            id: string;
            name: string;
            color: string;
          }[];
        };

        repositoryTopics: {
          topic: {
            name: string;
          };
        }[];
      }[];
    };
  };
}

export interface ViewerReposVars {
  first: number;
  orderBy: {
    field: string;
    direction: string;
  };
  languagesOrderBy: {
    direction: string;
    field: string;
  };
  privacy: string;
}

export interface UserReposVars {
  login: string;
  first: number;
  orderBy: {
    field: string;
    direction: string;
  };
  languagesOrderBy: {
    direction: string;
    field: string;
  };
}

export interface singleRepo {
  id: string;
  name: string;
  stargazerCount: number;
  forkCount: number;
  isPrivate: boolean;
  updatedAt: Date;
  url: string;
  description: string;

  languages: {
    nodes: {
      id: string;
      name: string;
      color: string;
    }[];
  };

  repositoryTopics: {
    topic: {
      name: string;
    };
  }[];
}

export interface ReposProps {
  data: ViewerRepos | undefined;
  loading: boolean;
  error: ApolloError | undefined;
  type: "user" | "viewer";
}

export interface ProfileProps {
  data: ViewerDetails | undefined;
  loading: Boolean;
  error: ApolloError | undefined;
  type: "user" | "viewer";
}
