import { Component } from "solid-js";
import GitHubSVG from "@dev/GitHub.svg?component-solid"
import { user } from "../App";

export const Navbar : Component<{}> = () => {
	return (
		<nav class="h-16 px-4 py-4 flex items-center gap-5 bg-light">
			<GitHubSVG class="h-full fill-white" />
			<h1 class="text-[1.3rem]">
				<span class="font-bold hidden sm:inline">GitHub </span>
				<span class="font-light">Kickstarter</span>
			</h1>

			<div class="flex-1" /> {/* Spacer */}

			{user() ? <>
				<div class="flex flex-col">
					<a href={user().html_url} target="blank">
						<h1 class="font-regular text-[1.3rem]">{user().name}</h1>
					</a>
					<p class="font-light text-sm text-right">{user().login}</p>
				</div>
				<img class="w-10 h-10 rounded-full" src={user().avatar_url} alt={user().name} />
			</> : <>
				<h1>Loading...</h1>
			</>}
		</nav>
	)
}