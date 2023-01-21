import { Component } from "solid-js";
import { AccountProps } from "../data/Data";

export const Friend : Component<{data: AccountProps}> = (props) => {
	return (
		<div class="flex gap-5 items-center ml-3">
			<img class="w-10 rounded-full" src={props.data.avatar_url} alt={props.data.login} />
			<a href={`${props.data.html_url}?tab=repositories`} target="blank">
				<h2>{props.data.login}</h2>
			</a>
		</div>
	)
}