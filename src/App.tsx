import { Navbar } from "./components/Navbar";
import { Limiter } from "./components/Limiter";
import { Container } from "./components/Container";
import { Column } from "./components/Column";
import { Repository } from "./components/Repository";
import { For } from "solid-js";

import { createResource } from 'solid-js';
import { fetchFriends, fetchRepos, fetchStarred, fetchUser } from './data/Data';
import { Friend } from "./components/Friend";

export const [repos] = createResource(fetchRepos);
export const [user] = createResource(fetchUser);
export const [friends] = createResource(fetchFriends);
export const [starred] = createResource(fetchStarred);

export function App() {
	return <>
		<Navbar />
		<Limiter>
			<Container>
				<Column title="Repositories">
					<For each={repos() && repos().sort((a, b) => Date.parse(a.updated_at) - Date.parse(b.updated_at))}>{
						(item) => <Repository data={item} />
					}</For>
				</Column>
				<Column title="Starred Repositories">
					<For each={starred() && starred().sort((a, b) => Date.parse(a.updated_at) - Date.parse(b.updated_at))}>{
						(item) => <Repository data={item} starred />
					}</For>
				</Column>
				<Column title="Following">
					<For each={friends()}>{
						(item) => <Friend data={item} />
					}</For>
				</Column>
			</Container>
		</Limiter>
	</>
};