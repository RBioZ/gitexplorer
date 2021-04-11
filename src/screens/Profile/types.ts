export interface IUser{
  login: string,
  id: number,
  avatar_url: string,
  name: string,
  company: string,
  blog: string,
  location: string,
  email: string | null,
  bio: string | null,
  public_repos: 66,
  public_gists: 1,
  followers: 61,
  following: 111,
}

export interface IRepository {
	id: string;
	name: string;
	description: string;
	url: string;
	stargazers_count: number,
	language: string,
	forks_count: number,
	forks: number,
	html_url: string;
}
