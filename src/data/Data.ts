const user = "FabianHummel"
const endpoint = "https://api.github.com/users"

export interface AccountProps {
	name: string;
	login: string;
	html_url: string;
	avatar_url: string;
}

export interface RepositoryProps {
	name: string;
	description: string;
	html_url: string;
	ssh_url: string;
	updated_at: string;
}

export const fetchUser = async () =>
	(await fetch(`${endpoint}/${user}`)).json().then(res => {
		return res as AccountProps
	})

export const fetchRepos = async () =>
	(await fetch(`${endpoint}/${user}/repos`)).json().then(res => {
		return res as RepositoryProps[]
	})

export const fetchFriends = async () =>
	(await fetch(`${endpoint}/${user}/following`)).json().then(res => {
		return res as AccountProps[]
	})

export const fetchStarred = async () =>
	(await fetch(`${endpoint}/${user}/starred`)).json().then(res => {
		return res as RepositoryProps[]
	})