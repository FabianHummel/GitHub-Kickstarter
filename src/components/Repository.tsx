import { Component } from "solid-js";
import { RepositoryProps } from "../data/Data";
import RepositorySVG from "@dev/Repository.svg?component-solid"
import StarredSVG from "@dev/Starred.svg?component-solid"

export const Repository : Component<{data: RepositoryProps, starred?: boolean }> = (props) => {
	return (
		<div class="p-4 rounded-md border-[1px] border-borders">
			<span class="flex gap-2 items-center">
				{props.starred ?
					<StarredSVG class="fill-muted h-5" /> :
					<RepositorySVG class="fill-muted h-5" />}

				<h2 class="text-base text-primary font-bold">
					<a href={props.data.html_url} target="blank">{props.data.name}</a></h2>
			</span>

			<p class="text-xs text-muted">{props.data.description}</p>
		</div>
	)
}